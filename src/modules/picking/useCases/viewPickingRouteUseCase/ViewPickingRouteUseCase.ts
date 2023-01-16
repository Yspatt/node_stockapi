import { prisma } from '@infra/prisma/client'

type IRequest = {
    products: [
        {
            sku: string
            stock: number
        }
    ]
}

type IResponse = {
    products: [
        {
            product: string
            amount: number
            reference: string
            shelfAmount: number
        }
    ]
}

export class ViewPickingRouteUseCase {
    constructor() {}

    async execute(params: IRequest): Promise<IResponse> {
        let result = []

        for (const product of params.products) {
            const response = await prisma.stock.findFirst({
                where: {
                    sku: product.sku,
                    stock: {
                        gte: product.stock,
                    },
                },
                include: {
                    shelf: true,
                },
            })
            if (response) {
                result.push({
                    product: product.sku,
                    amount: product.stock,
                    reference: response.shelf.reference,
                    shelfAmount: response.stock,
                })
                result = result.sort((a, b) =>
                    a.reference > b.reference ? 1 : -1
                )
            } else {
                const response = await prisma.stock.findMany({
                    where: {
                        sku: product.sku,
                    },
                    include: {
                        shelf: true,
                    },
                })
                let required = 0
                const found = []
                response.forEach((element) => {
                    if (required < product.stock) {
                        required += element.stock
                        found.push(element.shelf.reference)
                    }
                })

                result.push({
                    product: product.sku,
                    amount: product.sku,
                    reference: found,
                    shelfAmount: required,
                })
            }
        }

        return {
            products: result,
        } as IResponse
    }
}
