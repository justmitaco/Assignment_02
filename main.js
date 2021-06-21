(function(){
    'use strict';
    
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    
    var startTime;
    var elapsedTime = 0;
    var timerId;
    var timeToAdd = 0;
    
    function updateTimerText(){
        var h = Math.floor(elapsedTime / (1000*60*60)) % 60;
        var m = Math.floor(elapsedTime / 60000);
        var s = Math.floor(elapsedTime % 60000 / 1000);
        var ms = elapsedTime % 1000;

h = ('0' + h).slice(-1);
m = ('0' + m).slice(-1);
s = ('0' + s).slice(-1);
ms = ('0' + ms).slice(-1);

timer.textContent = h + ':' + m + ':' + s + ':' + ms;
}

function countup(){
    timerId = setTimeout(function(){
        elapsedTime = Date.now() - startTime + timeToAdd;
        updateTimerText();
        countup();
    },10);
}

start.addEventListener('click',function(){
    startTime = Date.now();
    countup();
});
stop.addEventListener('click',function(){
    clearTimeout(timerId);
    timeToAdd += Date.now() - startTime;
});

reset.addEventListener('click',function() {
    elapsedTime = 0;
    timeToAdd = 0;
    updateTimerText();
    
});
})();