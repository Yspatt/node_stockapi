import { NodePlopAPI } from 'plop';
import { readdirSync } from 'fs';
import path from 'path'

const getDirectories = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export default function (plop: NodePlopAPI) {
  plop.setGenerator('usecase', {
    description: 'Base Use Case with API Route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name',
      },
      {
        type: 'list',
        name: 'module',
        message: 'Module',
        choices: getDirectories(path.resolve(__dirname, '../src/modules'))
      },
    ],
    actions: (answers) => {
      const actions = [
        {
          type: 'add',
          path: '../src/modules/{{module}}/useCases/{{camelCase name}}UseCase/{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/useCase.ts.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: '../src/modules/{{module}}/useCases/{{camelCase name}}UseCase/{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/useCase.spec.ts.hbs',
          skipIfExists: true,
        },
      ]

        actions.push({
          type: 'add',
          path: '../src/modules/{{module}}/useCases/{{camelCase name}}UseCase/{{pascalCase name}}Controller.ts',
          templateFile: 'templates/useCaseController.ts.hbs',
          skipIfExists: true,
        })

        actions.push({
          type: 'add',
          path: '../src/infra/http/factories/controllers/{{module}}/{{ pascalCase name }}ControllerFactory.ts',
          templateFile: 'templates/controllerFactory.ts.hbs',
          skipIfExists: true,
        })

      return actions;
    },
  });
};