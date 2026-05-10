import transporter from "../mailer/mail.config.js";

export const sendWelcomeMailService = () => {
    try {
        
    } catch (error) {
        return 
    }
}

export const sendOTPService = async (email: string) => {
    try {
        const generateOTP = Math.floor(Math.random() * ((Math.pow(10, 6) - 1) - Math.pow(10,5)) + Math.pow(10, 5));
        const info = await transporter.sendMail({
             from: 'dev.adtiya.developer@gmail.com', 
             to: email, 
             subject: "Mail verification.", 
             text: `Your OTP is: ${generateOTP}`, 
        });
        if(info.rejected){
            throw new Error("otp error");
        }

        return {info, OTP: generateOTP}


    } catch (error) {
        throw new Error("failed to send otp")
    }
}