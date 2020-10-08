module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
      'error',
      {
        // 不要分号
        semi: false,
        // 设置单引号
        singleQuote: true,
        // 设置换行长度
        printWidth: 160
      }
    ]
  }
}
