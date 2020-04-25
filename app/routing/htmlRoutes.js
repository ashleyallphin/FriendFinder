//include path package to deliver pages with express
var path = require("path");

//(app = express) so router knows which page to deliver
module.exports = function (app) {

    //survey route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //homepage route (use homepage as default)
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })
}

