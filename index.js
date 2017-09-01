const express = require('express')

const app = express()

const policies = [{
        number: 1,
        name: 'Tom',
        address: '1234 Main St',
        type: 'Auto',
        state: 'IN'
    },
    {
        number: 2,
        name: 'Bill',
        address: '1234 Main St',
        type: 'Home',
        state: 'IN' 
    }
]

app.get('/greeting', (req, res) => {
    res.json({
      id: '123456',
      content: 'Hello there!'  
    })
})

app.get('/policy/:number', (req, res) => {
    const number = parseInt(req.params.number)
    res.send(policies.find(policy => policy.number === number))
})

app.get('/policy', (req, res) => {
    res.send(policies)
})

app.listen(3000, () => console.log('Running server on port 3000'))

module.exports = app;