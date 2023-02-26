
const App = require("../class");
const nodemailer = require("nodemailer");


class Mail extends App{
    constructor(options = {name,mail,message}){
        super()
   this.name = options.name,
   this.mail = options.mail,
   this.message = options.message
  this.transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rccgheritageofgod@gmail.com",
      pass: "szgswawnjcqrsdlo",
      secure: true,
    },
  });

    }
/**
 * @param Name 
 * @param Mail
 * @param  message
 * Used To Send Mail
 */
async sendMail(){
    const option ={
        to: "herritageo125@gmail.com",
        from: this.mail,
        subject: `${this.name} Is Looking To Contact You`,
        text: `Thier Details: \n Email: ${this.mail} , \n Message: ${this.message} `
    }
    const data = await this.transporter.sendMail(option)
    if (data) {
        return true;
    }else{
        return false;
    }

}

}



module.exports = Mail