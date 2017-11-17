/* ------------------------------------------------------------------------------------

    THIS IS THE JAVASCRIPT CODE FOR THE DRAG AND DROP DEMO


------------------------------------------------------------------------------------ */

//Global Variables

var dAnswerId;

var dValueId;

var dQuestionsId;

var allAnswers;

var myAnswersArray = [];
var answersInArray;

//Event Listeners

var startAgain = document.getElementById("checkR");

startAgain.addEventListener("click", resetAll, false);

function resetAll() {

    for (var i = 0; i < myAnswersArray.length; i++) {

        answersInArray = myAnswersArray[i];

        //console.log(answersInArray);

        allAnswers = document.getElementById(answersInArray);

        allAnswers.className = "theAnswers";

        //console.log(allAnswers);

        allAnswers.style.display = "block";

        var allAnswersIds = document.getElementById("r" + answersInArray);

        //console.log(allAnswersIds);

        allAnswersIds.appendChild(allAnswers);

    }

}

function dragStart(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

    dAnswerId = ev.target.getAttribute("id");
    //console.log(dAnswerId);

    dValueId = "a" + ev.target.getAttribute("value");
    //console.log(dValueId);

}

function dragOver(ev) {

    ev.preventDefault();
}

function dragDrop(ev) {

    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));

    dQuestionsId = ev.target.getAttribute("id");

    if(dQuestionsId === dValueId) {

        document.getElementById(dAnswerId).className = "correct";

    } else if(dQuestionsId !== dValueId) {
        //need to change "theAnswers" to "incorrect" here and in the CSS file because it is wrongly named
        document.getElementById(dAnswerId).className = "theAnswers";
    }

    //To collect answers and push to the array

    myAnswersArray.push(dAnswerId);



}







//This is the carousel jQuery code

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 0
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function () {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});
