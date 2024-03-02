let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextimage();
}, 6000)

function nextimage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}