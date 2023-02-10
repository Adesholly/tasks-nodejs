import express from 'express'
import dotenv from 'dotenv'

dotenv.config()



const app = express()

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("API is running")
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})