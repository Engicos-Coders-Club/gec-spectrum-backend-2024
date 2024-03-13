import { SendMailClient } from "zeptomail";
import { config } from 'dotenv';
config();

const url: string = "api.zeptomail.in/";
const token: string = process.env.ZEPTO_MAIL_TOKEN || "";
let client: SendMailClient = new SendMailClient({ url, token });


async function sendOtpEmail(email: string, otp: string, name: string = "") {

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
    "subject": `Hello${name ? ' ' + name : ''} Your OTP`,
    "htmlbody": `<div><b> Your OTP is ${otp}.</b></div>`,
}).then((resp: any) => console.log("success")).catch((error: any) => console.log("email sender error"));
}

//if (import.meta.url === `file://${process.argv[1]}`) { // will only run when the file is individually executed, not when imported
 //sendOtpEmail("codersclub.gec@gmail.com", "123456", "GEC Coders");
    // Test code
//console.log("Hello World")
//}

export { sendOtpEmail };