var s = "";
var display = document.querySelector('.display');

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function(e) {
        var expression=e.target.innerHTML;
        // alert(expression+ " "+ s );
        var audio = new Audio('sound.wav');
        audio.play();
        if (expression==='AC') {
            // alert("hi");    
            s = "";
            display.innerHTML='0';
        } 
        else if (expression==='=') {
            try {
                display.innerHTML = eval(s);
                s = "";
                
            } catch (error) {
                display.innerHTML = 'Error';
                s="";
                
            }
        } else {
            s= s+ expression;
            // alert(expression);
            display.innerHTML=s;
        }
    });
});
