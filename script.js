// GLOBAL VARIABLES 
var saveBtnEl = $('.saveBtn');
var textInputEl = $('.textInput');

// Display the current date underneath header 
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Get the current time and use to manipulate colors 

var currentTime = moment().hours();
console.log(currentTime, 'time')
$('.time').each(function(){
    var HTMLTime = parseInt($(this).attr('id').split('-')[1])
    console.log (HTMLTime, 'HTMLTime')

    if (HTMLTime < currentTime) {
        $(this).addClass('past')
    }
    else if (HTMLTime === currentTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
    }
    else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
})

// Allow user to type text in time block and save data 
saveBtnEl.on('click',function(event){
    var userInput = $(this).siblings('.textInput').val()
    var time = $(this).parent().attr('id')
    console.log(time, userInput,'click')
    localStorage.setItem(time,userInput)  
})

$('#hour-9 .textInput').val(localStorage.getItem('hour-9'))
$('#hour-10 .textInput').val(localStorage.getItem('hour-10'))
$('#hour-11 .textInput').val(localStorage.getItem('hour-11'))
$('#hour-12 .textInput').val(localStorage.getItem('hour-12'))
$('#hour-13 .textInput').val(localStorage.getItem('hour-13'))
$('#hour-14 .textInput').val(localStorage.getItem('hour-14'))
$('#hour-15 .textInput').val(localStorage.getItem('hour-15'))
$('#hour-16 .textInput').val(localStorage.getItem('hour-16'))
$('#hour-17 .textInput').val(localStorage.getItem('hour-17'))
