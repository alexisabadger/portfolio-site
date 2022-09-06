// more touch testing...

var touchPos = document.body.ontouchstart = function(e){
    touchPos = e.changedTouches[0].clientY;
}

// detect wether the "old" touchPos is 
// greater or smaller than the newTouchPos
var newTouch = document.body.ontouchmove = function(e){
    let newTouchPos = e.changedTouches[0].clientY;
    if(newTouchPos > touchPos) {
        console.log("finger moving down");
        console.log("page scrolling up...");
    }
    if(newTouchPos < touchPos) {
        console.log("finger moving up");
        console.log("page scrolling down...");
    }
}