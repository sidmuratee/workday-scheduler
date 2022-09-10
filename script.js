let container = document.querySelector(".container")
let button = document.querySelector(".saveBtn")



let time = moment();
$("#currentDay").text(time.format('MMMM Do YYYY, HH:mm:ss a'));


function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function () {

        $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm:ss a'));



    }, 1000);
}

setTime();

$(".saveBtn").on("click", function(){
    
    let text = $(this).siblings('textarea').val();
    let time = $(this).siblings('div').text();
    localStorage.setItem(time, text)
    console.log(text)
    })



