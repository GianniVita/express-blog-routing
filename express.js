const express = require('express')
const app = express()
const port = 3000

app.get('/' , (req, res) => {
    res.send('Hello Boolean!')
})

app.listen(port, () => {
    console.log(`Example my blog is listening on port ${port} `);
    
})

