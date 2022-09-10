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

function timeBlockColor (){
    let currentTime = moment().hours()
    let timeBlock = $(".timeSlot")
    timeBlock.each(function (){
        let hour = parseInt($(this).attr("data-id"))
        if (hour === currentTime){
            $(this).children(".col-10").attr("class", "present col-10")
            
        } else if (currentTime > hour){
            $(this).children(".col-10").attr("class", "past col-10")
 
        } else {
            $(this).children(".col-10").attr("class", "future col-10")
        }
    })
}

timeBlockColor();

$(".saveBtn").on("click", function(){
    
    let text = $(this).siblings('textarea').val();
    let time = $(this).siblings('div').text();
    localStorage.setItem(time, text)
    console.log(text)
    })


$("#timeBlockContent9").text(localStorage.getItem("9"))
$("#timeBlockContent10").text(localStorage.getItem("10"))
$("#timeBlockContent11").text(localStorage.getItem("11"))
$("#timeBlockContent12").text(localStorage.getItem("12"))
$("#timeBlockContent13").text(localStorage.getItem("13"))
$("#timeBlockContent14").text(localStorage.getItem("14"))
$("#timeBlockContent15").text(localStorage.getItem("15"))
$("#timeBlockContent16").text(localStorage.getItem("16"))
$("#timeBlockContent17").text(localStorage.getItem("17"))