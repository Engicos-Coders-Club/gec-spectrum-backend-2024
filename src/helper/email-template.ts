
export const emailDefaultOtpTemplate = function (name:string,otp:string,message:string) {

   const data = { 

    "subjectBody":  
    
    `Hello${name ? ' ' + name : ''} Your OTP`,
    
    "htmlBody":
    
    `<div><b>${message ? message + '\n' : '' } Your OTP is ${otp}.</b></div>`
    
}

return data;
}