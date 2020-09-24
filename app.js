const express = require('express')

const app = express()

app.get('/', (_, res) => {
  res.status(200).send('helloworld')
})

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('app listening on port', PORT))
