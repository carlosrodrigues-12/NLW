const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db)=>{
    proffyValue = {
        name: "Carlos Rodrigues",
        avatar: "https://avatars2.githubusercontent.com/u/54942267?s=460&u=bcbb40049b946a5e689c3eec5e5fdce720461824&v=4",
        whatsapp: "84 98412-6687",
        bio: "Entusiasta das melhores tecnologias de programação.<br><br>Apaixonado por desenvolvimento e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma aula minha.",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const slectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(slectedProffys[0].name)

    const selectClassesProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    // console.log(selectClassesSchedules)
})