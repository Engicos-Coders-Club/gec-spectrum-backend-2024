const otpTemplate= function (otp:string, message:string) {
return `<!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
*{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.social_block.desktop_hide .social-table{display:inline-block!important}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
</style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff">
<tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table 
class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="center" style="line-height:10px"><div style="max-width:210px"><a href="https://www.gecspectrum.com/" target="_blank" style="outline:none" tabindex="-1"><img 
src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/imageedit_3_6024589465%281%29.png" style="display:block;height:auto;border:0;width:100%" width="210" alt="GEC Spectrum 2024 logo" title="GEC Spectrum 2024 logo"></a></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:20px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div 
style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#5c17cb;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><strong><span style="font-size:24px;">Your OTP</span></strong></p></div></div></td></tr></table><table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px"><div style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0;mso-line-height-alt:16.8px"><p style="margin:0;margin-bottom:16px">Hi,</p><p style="margin:0">
<strong>${otp}</strong> is the OTP to verify your account on our <a href="https://www.gecspectrum.com/" target="_blank" title="GEC Spectrum 2024 wesbite" style="text-decoration: underline; color: #5c17cb;" rel="noopener">website</a>. This OTP is usable only once. Please do not share with anyone.${message ? "\n" + message : ""}</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="social_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table class="social-table" width="104px" border="0" cellpadding="0" cellspacing="0" 
role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block"><tr><td style="padding:0 10px 0 10px"><a href="https://www.instagram.com/gecspectrum/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px">
<a href="https://www.linkedin.com/school/gecgoa/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display:block;height:auto;border:0"></a></td></tr></table></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class style="font-size:12px;mso-line-height-alt:18px;color:#fff;line-height:1.5;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"><p style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:18px"><span style="font-size:12px;"><strong>Got event related queries? Reach out</strong></span></p><p 
style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:18px"><span style="font-size:12px;"><a href="mailto:gecstudentscouncil@gmail.com" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #e5d5ff;">gecstudentscouncil@gmail.com</a></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;border-radius:0;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class 
style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:12px;"><a href="http://[previewinbrowser]/" target="_blank" rel="noopener" style="color: #5c17cb;">view this email in your browser</a></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
<div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
        <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
        <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
            <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                    <!--<![endif]-->


                    <div align="center" class="img-container center  autowidth " style="padding-right: 0px;  padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->

                        <a href="https://goo.gl/sDhD5J" target="_blank" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer">
                            <img class="center  autowidth " align="center" border="0" src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png" alt="Image" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 168px" width="168" />
                        </a>
                        <!--[if mso]></td></tr></table><![endif]-->
                    </div>


                    <!--[if (!mso)&(!IE)]><!-->
                </div><!--<![endif]-->
            </div>
        </div>
        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
</div>
</div></body></html>`
}

const paymentConfirmationTemplate = function (eventName:string,teamName:string) {
    return `<!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><link 
    href="https://fonts.googleapis.com/css2?family=Droid+Serif:wght@400;700&amp;display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&amp;display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&amp;display=swap" rel="stylesheet" type="text/css"><!--<![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.social_block.desktop_hide .social-table{display:inline-block!important}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff">
    <tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table 
    class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="center" style="line-height:10px"><div style="max-width:210px"><a href="https://www.gecspectrum.com/" target="_blank" style="outline:none" tabindex="-1"><img 
    src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/imageedit_3_6024589465%281%29.png" style="display:block;height:auto;border:0;width:100%" width="210" alt="GEC Spectrum 2024 logo" title="GEC Spectrum 2024 logo"></a></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:40px;padding-top:20px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div 
    style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#5c17cb;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:24px;"><strong>Registration Confirmation</strong></span></p></div></div></td></tr></table><table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px"><div style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:150%;text-align:center;direction:ltr;letter-spacing:0;mso-line-height-alt:21px"><p style="margin:0">
    Your payment has been successful and your team <strong>${teamName}</strong> has been sucessfully registered for the event "<span style="color: #5c17cb;">${eventName}</span>" at GEC Spectrum 2024.</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr>
    <td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;border-radius:0;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table 
    class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="divider_inner" style="font-size:1px;line-height:1px;border-top:1px solid #bbb"><span>&#8202;</span></td></tr></table></div></td></tr></table>
    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:30px;padding-right:55px;padding-bottom:10px;padding-left:55px"><div style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:150%;text-align:center;direction:ltr;letter-spacing:0;mso-line-height-alt:21px"><p 
    style="margin:0;margin-bottom:16px"><span style="color: #000101;">Dive into the ultimate thrill of competition against the stunning backdrop of <span style="color: #5c17cb;"><strong>Goa</strong></span>! Over 22 competitions await at <span style="color: #5c17cb;"><strong>Spectrum 2024</strong></span>, with a prize pool of <strong><span style="color: #5c17cb;">5.5 Lakh+</span></strong>. </span></p><p style="margin:0">
    <span style="color: #000101;">Head over to our website & let the adventure begin!</span></p></div></td></tr></table><table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.gecspectrum.com/" style="height:38px;width:134px;v-text-anchor:middle;" arcsize="61%" stroke="false" fillcolor="#5c17cb">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px">
    <![endif]-->
    <a href="https://www.gecspectrum.com/" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#5c17cb;border-radius:23px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 28px;">Spectrum 2024</span></span></a>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-top:15px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="social_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table class="social-table" width="104px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block"><tr><td style="padding:0 10px 0 10px"><a href="https://www.instagram.com/gecspectrum/" target="_blank"><img 
    src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px"><a href="https://www.linkedin.com/school/gecgoa/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" 
    style="display:block;height:auto;border:0"></a></td></tr></table></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class style="font-size:12px;mso-line-height-alt:18px;color:#fff;line-height:1.5;font-family:Arial,Helvetica Neue,Helvetica,sans-serif"><p 
    style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:18px"><span style="font-size:12px;"><strong>Got event related queries? Reach out</strong></span></p><p style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:18px"><span style="font-size:12px;"><a href="mailto:gecstudentscouncil@gmail.com" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #e5d5ff;">gecstudentscouncil@gmail.com</a></span></p></div></div></td></tr>
    </table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;border-radius:0;width:700px;margin:0 auto" width="700"><tbody><tr><td 
    class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class 
    style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:12px;"><a href="http://[previewinbrowser]/" target="_blank" rel="noopener" style="color: #5c17cb;">view this email in your browser</a></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
    
    
                            <div align="center" class="img-container center  autowidth " style="padding-right: 0px;  padding-left: 0px;">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
    
                                <a href="https://goo.gl/sDhD5J" target="_blank" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer">
                                    <img class="center  autowidth " align="center" border="0" src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png" alt="Image" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 168px" width="168" />
                                </a>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>
    
    
                            <!--[if (!mso)&(!IE)]><!-->
                        </div><!--<![endif]-->
                    </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
    </div></body></html>`

}

const participantRegistered = function (eventName:string,teamName:string) {
    return `<!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.social_block.desktop_hide .social-table{display:inline-block!important}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff">
    <tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table 
    class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="center" style="line-height:10px"><div style="max-width:245px"><a href="https://www.gecspectrum.com/" target="_blank" style="outline:none" tabindex="-1"><img 
    src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/imageedit_3_6024589465%281%29.png" style="display:block;height:auto;border:0;width:100%" width="245" alt="GEC Spectrum 2024 logo" title="GEC Spectrum 2024 logo"></a></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:40px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div 
    style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#5c17cb;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><strong><span style="font-size:24px;">Registration Received</span></strong></p></div></div></td></tr></table><table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px"><div style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0;mso-line-height-alt:16.8px"><p style="margin:0;margin-bottom:16px">Hello ${teamName},&nbsp;</p><p style="margin:0;margin-bottom:16px">
    We have received your registration for the event <span style="color: #5c17cb;">'${eventName}'</span> on our website. We will verify your payment and the participation confirmation will be communicated through your profile/mail in 2-3 days.</p><p style="margin:0">~ Team Spectrum GEC</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:40px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="divider_inner" style="font-size:1px;line-height:1px;border-top:1px solid #bbb"><span>&#8202;</span></td></tr></table></div></td></tr></table><table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:40px;padding-right:20px;padding-bottom:4px;padding-left:20px"><div 
    style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0;mso-line-height-alt:16.8px"><p style="margin:0;margin-bottom:16px">Dive into the ultimate thrill of competition against the stunning backdrop of&nbsp;<strong>Goa</strong>! Over 22 competitions await at&nbsp;<strong>Spectrum 2024</strong>, with a prize pool of&nbsp;<strong>5.5 Lakh+</strong>.</p><p style="margin:0">
    Head over to our website & let the adventure begin!</p></div></td></tr></table><table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.gecspectrum.com/" style="height:38px;width:199px;v-text-anchor:middle;" arcsize="132%" stroke="false" fillcolor="#ffba25">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#000000; font-family:Arial, sans-serif; font-size:16px">
    <![endif]-->
    <a href="https://www.gecspectrum.com/" target="_blank" style="text-decoration:none;display:inline-block;color:#000000;background-color:#ffba25;border-radius:50px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:3px;padding-bottom:3px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>Spectrum Website</strong></span></span></a>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:25px;padding-top:25px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="social_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table class="social-table" width="104px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block"><tr><td style="padding:0 10px 0 10px"><a href="https://instagram.com/gecspectrum" target="_blank"><img 
    src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px"><a href="https://www.linkedin.com/school/gecgoa/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" 
    style="display:block;height:auto;border:0"></a></td></tr></table></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:21.6px;color:#fff;line-height:1.8"><p 
    style="margin:0;text-align:center;mso-line-height-alt:21.6px"><strong>Got event related queries? Reach out</strong></p><p style="margin:0;text-align:center;mso-line-height-alt:21.6px"><a href="mailto:gecstudentscouncil@gmail.com" rel="noopener noreferrer" target="_blank" style="text-decoration: underline; color: #dca2ff;">gecstudentscouncil@gmail.com</a></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-5" align="center" 
    width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff;color:#000;border-radius:0;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class 
    style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:12px;"><a href="http://[previewinbrowser]/" target="_blank" rel="noopener" style="color: #555555;">view this email in your browser</a></span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
    
    
                            <div align="center" class="img-container center  autowidth " style="padding-right: 0px;  padding-left: 0px;">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
    
                                <a href="https://goo.gl/sDhD5J" target="_blank" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer">
                                    <img class="center  autowidth " align="center" border="0" src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png" alt="Image" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 168px" width="168" />
                                </a>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>
    
    
                            <!--[if (!mso)&(!IE)]><!-->
                        </div><!--<![endif]-->
                    </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
    </div></body></html>`
}

const teamRegistrationAdminUpdate = function (eventName:string,teamName:string) {
    return `<!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff">
    <tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#000;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table 
    class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="center" style="line-height:10px"><div style="max-width:245px"><a href="https://www.gecspectrum.com/" target="_blank" style="outline:none" tabindex="-1"><img 
    src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/imageedit_3_6024589465%281%29.png" style="display:block;height:auto;border:0;width:100%" width="245" alt="GEC Spectrum 2024 logo" title="GEC Spectrum 2024 logo"></a></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
    role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:40px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div 
    style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#5c17cb;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><strong><span style="font-size:24px;">New Registration Alert</span></strong></p></div></div></td></tr></table><table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px"><div style="color:#000;font-size:14px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0;mso-line-height-alt:16.8px"><p style="margin:0;margin-bottom:16px">Hi,&nbsp;</p><p style="margin:0">
    Team <span style="color: #5c17cb;">'<strong>${teamName}</strong>'</span> has registered for the event <span style="color: #5c17cb;">'<strong>${eventName}</strong>'</span> on 'Date Time'. Please verify their payment on the website.</p></div></td></tr></table><table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.gecspectrum.com/private/" style="height:38px;width:157px;v-text-anchor:middle;" arcsize="132%" stroke="false" fillcolor="#ffba25">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#000000; font-family:Arial, sans-serif; font-size:16px">
    <![endif]-->
    <a href="https://www.gecspectrum.com/private/" target="_blank" style="text-decoration:none;display:inline-block;color:#000000;background-color:#ffba25;border-radius:50px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:3px;padding-bottom:3px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>Admin Login</strong></span></span></a>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f9f5ff;color:#000;border-radius:0;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:12px;"><a href="http://[previewinbrowser]/" target="_blank" rel="noopener" style="color: #555555;">view this email in your browser</a></span></p></div></div></td></tr></table></td></tr></tbody></table>
    </td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
    
    
                            <div align="center" class="img-container center  autowidth " style="padding-right: 0px;  padding-left: 0px;">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
    
                                <a href="https://goo.gl/sDhD5J" target="_blank" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer">
                                    <img class="center  autowidth " align="center" border="0" src="https://enginemailerblobv1.blob.core.windows.net/images/08b941a9-ecfa-46d2-b0d3-e95efa91fe41/enginemailer-forever-free.png" alt="Image" title="https://www.enginemailer.com/?utm_source=newsletter&utm_medium=email&utm_campaign=ff_footer" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 168px" width="168" />
                                </a>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>
    
    
                            <!--[if (!mso)&(!IE)]><!-->
                        </div><!--<![endif]-->
                    </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
    </div></body></html>`
}

export const emailDefaultOtpTemplate = function (name:string,otp:string,message:string) {

   const data = { 

    subjectBody:  
    
    `Hello${name ? ' ' + name : ''}, Your OTP for verfiying on Spectrum 2024 website`,
    
    htmlBody:
    otpTemplate(otp,message)
    
}

return data;
}

export const emailDefaultPaymentConfirmation = function (eventName:string,teamName:string) {

   const data = {
    
    subjectBody: 

    `Participation & Payment Confirmation For ${eventName}: Spectrum 2024`,
    
    htmlBody: 
    
    paymentConfirmationTemplate(eventName,teamName) 
    
}

    return data;
}

export const participantRegisteredTemplate = function (eventName:string,teamName:string) {

   const data = {
    
    subjectBody:

    `Participation Request Recieved for ${eventName}: Spectrum 2024`,
    
    htmlBody: 
    
    participantRegistered(eventName,teamName) 
    
}
return data;
}

export const teamRegistrationAdminUpdateTemplate = function (eventName:string,teamName:string) {

   const data = {
    
    subjectBody:

    `Participation Request Recieved for ${eventName}: Spectrum 2024`,
    
    htmlBody: 
    
    teamRegistrationAdminUpdate(eventName,teamName)

}
    return data
}