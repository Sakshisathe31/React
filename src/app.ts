import express from 'express'

const app = express()

//Routes
//http methods: get, post, put, delete
app.get('/', (req, res, next) => {
    res.json({message: 'Welcome to my elib apis'})
});
    
export default app;
