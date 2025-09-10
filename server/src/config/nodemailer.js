import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host : 'smtp-relay.brevo.com',
    port : 587,
    auth : {
        user : process.env.SENDER_EMAIL,
        pass : process.env.SENDER_PASSWORD,
    }
})
export default transporter;