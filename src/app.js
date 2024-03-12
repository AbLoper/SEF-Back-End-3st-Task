const express = require("express")
const app = express()
const path = require("path")
const backPath = path.join(__dirname, '../public')
app.use(express.static(backPath))

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

const viewsDirectory = path.join(__dirname, "../temp1/views")
app.set("views", viewsDirectory)

var hbs = require("hbs")
const partialsPath = path.join(__dirname, "../temp1/partials")
hbs.registerPartials(partialsPath)

// app.get('/',(req,res)=>{
//     res.send("hello from homepage")
// })
// app.get('/about',(req,res)=>{
//     res.send("hello from about")
// })

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'hello from homepage',
//     })
// })
app.get("/", (req, res) => {
    res.render("./index", {
        title: "hello from home",
        img1: "./images/img.png"
    })
})

app.get('/page1', (req, res) => {
    res.render('./page1', {
        title: 'hello from page1',
        img1: "./images/1.jpg"
    })
})
app.get('/page2', (req, res) => {
    res.render('./page2', {
        title: 'hello from page2',
        img1: "./images/2.jpg"
    })
})
app.get('/page3', (req, res) => {
    res.render('./page3', {
        title: 'hello from page3',
        img1: "./images/3.jpg"
    })
})
app.get('/page4', (req, res) => {
    res.render('./page4', {
        title: 'hello from page4',
        img1: "./images/4.jpg"
    })
})
app.get('/page5', (req, res) => {
    res.render('./page5', {
        title: 'hello from page5',
        img1: "./images/5.jpg"
    })
})

// console.log(__dirname);

app.listen(port, () => {
    console.log(`app is lestening on port ${port}`);
})