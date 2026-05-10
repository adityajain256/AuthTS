# AuthTS
creating all type of authentication system. Just for practicing. 

### MAIL VERIFICATION REST API 
I need to implement some security so that **NO** user of my app can access dashboard with fake email. So I have learned how to send *OTP* one time password to verify their accound.

It is also better way to provide them a reset password mail which redirect them to a page where from they can change their password.

#### Step by Step process of implementing them. 
***OTP Verification***
1. Create two routes one for sign-up and second for verification:

-**userRouter.post("/sign-up", signUpUser),**

-**userRouter.post("/verify-OTP", verifyOTP)**

2. Send at OTP a 5 to 6 character long OTP. Via email or sms.
3. Save this OTP and it's expiry in DataBase.
4. Verify it by second route.
5. If verified then set user verified and provide access to the application.

***RESET Password***
1. Create two routes for it too:

-**userRouter.post("/request-reset-password", requestResetPassword);**
   
-**userRouter.post("/reset-pass", resetPassword)**

2. Send a url of changing the password while requesting the reset password.
3. Take query parameters and password from body. 
4. If everything is right then change the password.
