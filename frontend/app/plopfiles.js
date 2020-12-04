const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) return `${fieldName} is required`
    return true
  }
}

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop/component/component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop/component/component.test.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile:
          'plop/component/component.module.scss.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.mdx',
        templateFile:
          'plop/component/component.mdx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop/component/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'plop/injectableIndex.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: 'import {{pascalCase name}} from \'./{{pascalCase name}}\'',
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name? Please, skip "Page" word at the end!',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop/page/page.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop/page/page.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.js',
        templateFile: 'plop/page/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}.js',
        templateFile: 'plop/page/page.mount.js.hbs',
      },
    ],
  })
}