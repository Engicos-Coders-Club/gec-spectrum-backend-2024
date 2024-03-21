import { SendMailClient } from "zeptomail";
import { emailDefaultOtpTemplate } from "../email-template.js";
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

// while sending an OTP a message can be added, if custom is true it will not use the default template and use whatever you provide
async function sendOtpEmail(email: string, otp: string = '', name: string = "", message: string = "", subject:string='', custom:boolean=false) {
 if (custom)
 {
    const subjectBody: string = subject
    const htmlBody: string = message
    sendEmail(email,name,subjectBody,htmlBody)
 }
 
 else   
    {
        const subjectBody: string = emailDefaultOtpTemplate(name,otp,message).subjectBody
        const htmlBody: string = emailDefaultOtpTemplate(name,otp,message).htmlBody
        sendEmail(email,name,subjectBody,htmlBody)
    }
    
}

//if (import.meta.url === `file://${process.argv[1]}`) { // will only run when the file is individually executed, not when imported
 //sendOtpEmail("codersclub.gec@gmail.com", "123456", "GEC Coders");
    // Test code
//console.log("Hello World")
//}

export { sendOtpEmail };