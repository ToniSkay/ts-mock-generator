module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "e2e/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: ["plugin:@angular-eslint/recommended", 'airbnb-typescript/base'],
      rules: {
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "array-callback-return": "off",
        "max-len": ["error", { "code": 150, "ignoreComments": true }]
      },
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140, "ignoreComments": true,}]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
