const App = require("../class");
const UserSchema = require("../Models/UserModel");
class Auth extends App {
  constructor(options = { mail, password, username }) {
    super();
    (this.name = options.name),
      (this.mail = options.mail),
      (this.username = options.username);
    this.db = UserSchema;
  }
  /**
   * 
   * @param Mail {String}
   * @param Password {String}
   * To Authenticate A User
   */
  async login(mail,password) {
     
  }

  async Singup(){
     const email = this.email
     const pass = this.password
     const username = this.username
     
     c

  }
}

module.exports = Auth