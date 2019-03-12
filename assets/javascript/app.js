$(document).ready(function() {
    var count = 0;
    var time = 120;
    var intervalID = setInterval(timer, 50);
    var correctCount = 0;
    var wrongCount = 0;
    var answered = 0;
    var questions = 8;
    var radios = $('input:radio');



    function timer() {
        $("#timer").html("Timer: " + time + " seconds left");
        var resultsDiv = $('<div class="results">');
        var correctDiv = $('<p id="correct">');
        var wrongDiv = $('<p id="wrong">');


        if (time === 0) {

            clearInterval(intervalID);
            time = 5;
            resultsDiv.text("Time's Up!");
            $('#timer').html(resultsDiv);
            var inputs = $('input');
            for (var i = 0; i < radios.length; i++) {
                if(radios.is(':checked') === true) {
                    answered++;
                }
            }
            console.log(answered);
        }
        time--;
    };
    
    $('#finishQuiz').on('click', function(){
        clearInterval(intervalID);
        $('#timer').html("All done!");
    });


});