var friends = require("../data/friends.js");


module.exports = function(app){
    
    //a GET method to show JSON data of all friends in the array
    app.get("/api/friends", function(req,res){
    res.json(friends);
    
});


app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 50
    };

    console.log(req.body);

    //parse user's survey POST
    var userData = req.body;
    var userScores = userData.scores;

    //set totalDifference to 0
    var totalDifference = 0;

    for (var i=0; i < friends.length; i++) {

        console.log(friends[i]);
        totalDifference = 0;

        for (var j=0; j < friends[i].scores[j]; j++) {

            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDifference <= bestMatch.friendDifference) {

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;

            }
        }
    }

    //save the user's data to the database -- after finding bestMatch, so user doesn't receive himself as best match
    friends.push(userData);

    //return the HTML with the user's bestMatch
    res.json(bestMatch);
});

}