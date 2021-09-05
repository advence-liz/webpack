var pxtowhatever = require('pxtowhatever')

module.exports = () => ({
  plugins: [
    pxtowhatever({
      // include: 'src',
      unit: '/100rem',
      propList: ['*'],
      minPixelValue: 1
    })
  ]
})
