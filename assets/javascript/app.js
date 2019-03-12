$(document).ready(function() {
    var count = 0;
    var time = 120;
    var intervalID = setInterval(timer, 100);
    var correctCount = 0;
    var wrongCount = 0;



    function timer() {
        $("#timer").html("Timer: " + time + " seconds left");
        var resultsDiv = $('<div class="results">');
        var correctDiv = $('<p id="correct">');
        var wrongDiv = $('<p id="correct">');


        if (time === 0) {

            clearInterval(intervalID);
            time = 5;
            resultsDiv.text("Time's Up!");
            $('#timer').html(resultsDiv);
        }
        time--;
    };


});