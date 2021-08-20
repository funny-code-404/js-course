module.exports = { //в свойства экспорт присваиваешь,что тебе надо
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};