var time = $('#time')

setInterval(function (){
    
    var today = dayjs()
    
    var curDate = today.format("MMM DD, YYYY [at] hh:mm:ss a")
    time.text(curDate)
    console.log(time)
    }, 1000) 
   
// not sure why this is not working https://jqueryui.com/datepicker/#default I think I followed it?
$( function() {
    $( "#datepicker" ).datepicker();
} );