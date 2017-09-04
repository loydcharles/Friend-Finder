var friendArray = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendArray);
    });

    app.post('/api/friends', function(req, res) {
        var resultSum = 0; // temp variable when we do the add
        var finalSum = 1; // to hold the best match as we loop through 
        bestMatch = friendArray[0]; // initilize the match to first object

        friendArray.push(req.body); // pust the result to array        

        //Loop through existing array to find the match
        friendArray.forEach(function(element, index) {
            resultSum = 0; 
            //go through each scores to get the lowest SUM
            element.scores.forEach(function(val, idx) {
                //take only if it's a positive match
                if (parseInt(req.body.scores[idx]) - parseInt(val) > 0) {
                    resultSum = parseInt(resultSum) + parseInt(req.body.scores[idx]) - (val);
//                    console.log(req.body.scores[idx] + " : " + val + " ResultSum: " + resultSum);
                }
            }, this);
//            console.log("Value: " + index + " Sum: " + resultSum);
            if(resultSum > finalSum) {
                finalSum = resultSum;
                bestMatch = friendArray[index];
            }
        }, this);   
        res.json(bestMatch);           
     //   res.json(true);
    });

    app.get("/api/clear", function() {
        // Empty out the arrays of data
        friendArray = [];        
    });   
};