

class App {
  constructor(options= {}) {
    
  }

  /**
   * This Starts THe Classes An Boots ExternaL Fuctions
   *@param {array} server Server Details
    @param {array} websocket The Websocket
   * 
   */
  Start(server,websocket) {
   this.server = server,
   this.websocket = websocket
  }
 



}

module.exports = App;
