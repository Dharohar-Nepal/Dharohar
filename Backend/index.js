import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        res.send('This is my project')
        
    } catch (error) {
        console.log('Error: error.message')
    }
})

app.listen(port, () => {
    console.log(`Listening to ${port}`)
})