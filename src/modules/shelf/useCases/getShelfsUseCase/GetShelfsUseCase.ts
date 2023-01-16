import {
    IShelfRepository,
    ShelfSearchParams,
    ShelfSearchResult,
} from '@modules/shelf/repositories/IShelfRepository'

type IRequest = ShelfSearchParams

export class GetShelfsUseCase {
    constructor(private shelfRepository: IShelfRepository) {}

    async execute({
        page,
        perPage,
        query,
    }: IRequest): Promise<ShelfSearchResult> {
        const shelfs = await this.shelfRepository.getShelfs({
            page: page ?? 1,
            perPage: perPage ?? 100,
            query,
        })
        return shelfs
    }
}
