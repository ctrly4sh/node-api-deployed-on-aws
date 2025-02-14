import express from "express"
const app = express();

app.get('/aws/health' , (req, res) => {
    return res.send(`
        <h1>Hello World</h1>
        `)
});

app.listen(8001, ()=> {
    console.log(`Server listening at localhost:8001`)
})