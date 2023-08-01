module.exports = {
  // ...require('./client'), // adds key/values from users.js
  ...require("./login"), // adds key/values from users.js
  ...require("./logout"), // adds key/values from activites.js
  ...require("./mythings"), // etc
  ...require("./register"),
  ...require("./things"), // etc
  ...require("./createpost"),
  
};
