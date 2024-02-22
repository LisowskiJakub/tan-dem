import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');
const config = require('./config.json')
const multer = require('multer')
const upload = multer({ dest: 'upload/' })
const express = require('express')




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.pass
    }
})



const mailer = express();
mailer.get('/', (req, res) => {

    transporter.sendMail({
        from: 'Nadawca <' + config.email + '>',
        to: 'lisowski.jakub@gmail.com',
        subject: 'test email',
        html: `<h1>Heading</h1>
    <p>Testowy tekst</p>`

    }, (err, info) => {
        if (err) throw err
        res.sendFile('./main.html')
        res.json({ status: info.response })

        // res.json({ status: 'working' })

    })

})
mailer.post('/upload', upload.single('file'), (req, res) => {

    res.send("Upload  successfully")

})



mailer.listen(7000, () => console.log(`Running on 7000`))