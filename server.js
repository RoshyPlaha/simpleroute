const index = require('./index.js') 

index.listen(3000, () => {
  console.log('server is running')
})