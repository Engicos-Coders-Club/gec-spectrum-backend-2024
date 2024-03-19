import { SendMailClient } from "zeptomail";
import { config } from 'dotenv';
config();

const url: string = "api.zeptomail.in/";
const token: string = process.env.ZEPTO_MAIL_TOKEN || "";
let client: SendMailClient = new SendMailClient({ url, token });

async function sendEmail(email:string,name:string,subjectBody:string,htmlBody:string) {

client.sendMail({
    "from": {
        "address": "no-reply@gecspectrum.com",
        "name": "noreply"
    },
    "to": [
        {
            "email_address": {
                "address": `${email}`,
                "name": `${name}`
            }
        }
    ],
    "subject": subjectBody,
    "htmlbody": htmlBody,
}).then((resp: any) => console.log("success")).catch((error: any) => console.log("email sender error"));

}

async function sendOtpEmail(email: string, otp: string = '', name: string = "", message: string = "", subject:string='', custom:boolean=false) {
 if (custom)
 {
    const subjectBody: string = subject
    const htmlBody: string = message
    sendEmail(email,name,subjectBody,htmlBody)
 }
 
 else   
    {
        const subjectBody: string = `Hello${name ? ' ' + name : ''} Your OTP`
        const htmlBody: string =`<div><b>${message ? message + '\n' : '' } Your OTP is ${otp}.</b></div>`
        sendEmail(email,name,subjectBody,htmlBody)
    }
    
}

//if (import.meta.url === `file://${process.argv[1]}`) { // will only run when the file is individually executed, not when imported
 //sendOtpEmail("codersclub.gec@gmail.com", "123456", "GEC Coders");
    // Test code
//console.log("Hello World")
//}

export { sendOtpEmail };