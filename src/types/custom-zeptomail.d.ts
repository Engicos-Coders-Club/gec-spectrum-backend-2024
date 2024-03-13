declare module 'zeptomail' {
    export class SendMailClient {
        constructor(options: { url: string, token: string });
        sendMail(mailData: any): Promise<any>; // Adjust the type of mailData as needed
        // Add any other methods or properties of SendMailClient here
    }
}