
export const emailDefaultOtpTemplate = function (name:string,otp:string,message:string) {

   const data = { 

    subjectBody:  
    
    `Hello${name ? ' ' + name : ''} Your OTP`,
    
    htmlBody:
    
    `<div><b>${message ? message + '\n' : '' } Your OTP is ${otp}.</b></div>`
    
}

return data;
}

export const emailDefaultPaymentConfirmation = function (eventName:string,teamName:string) {

   const data = {
    
    subjectBody: 

    `Participation & Payment Confirmation For ${eventName}`,
    
    htmlBody: 
    
    `Your payment has been successful and your team ${teamName} has been sucessfully registered for the event ${eventName} at GEC Spectrum`, 
    
}

    return data;
}