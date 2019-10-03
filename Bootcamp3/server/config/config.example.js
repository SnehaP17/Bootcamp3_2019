//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: ''//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'e8313f7a78714228b19f769077aa9a6f' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};