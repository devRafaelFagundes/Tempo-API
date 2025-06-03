require("dotenv").config()
const cors = require("cors")
const { json } = require("body-parser");
const path = require("path")
const express  = require("express")

const app = express();

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))
app.get('/weather', async (req, res)=>{
    const cidade = req.query.city
    if (!cidade) {
        res.status(404).json({
            message : "no specified city"
        })
    }
    const apiKey = process.env.API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`

    const response = await fetch(url)
    const data = await response.json()

    return res.status(200).json({
        success : true,
        message : "weather api fetched successfully",
        data
    })
})
app.get('/home', async(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, ()=>{
    console.log("funcionando porta 3000 :D")
})