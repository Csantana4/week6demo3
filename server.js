const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/api/cat', (req, res)=>{
    res.status(200).send('Best regards Flavio')
})


app.listen(4000, () => console.log("-----4000------"))