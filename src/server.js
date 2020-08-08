const proffys = [
    {name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "84 97412-4587",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]},

    {name: "Carlos Rodrigues",
    avatar: "https://avatars2.githubusercontent.com/u/54942267?s=460&u=bcbb40049b946a5e689c3eec5e5fdce720461824&v=4",
    whatsapp: "84 98412-6687",
    bio: "Entusiasta das melhores tecnologias de programação.<br><br>Apaixonado por desenvolvimento e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma aula minha.",
    subject: "Programação",
    cost: "20",
    weekday: [3],
    time_from: [720],
    time_to: [1220]}
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    return subjects[+subjectNumber-1]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)