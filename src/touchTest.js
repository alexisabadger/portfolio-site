var touchTest = document.addEventListener("touchstart", e => {
    console.log(e)
})

var startTouch = document.addEventListener("touchstart", e => {
    console.log("Start")
})

var moveTouch = document.addEventListener("touchmove", e => {
    console.log("Move")
})

var endTouch = document.addEventListener("touchend", e => {
    console.log("End")
})



// store the touching position at the start of each touch
// var touchPos = document.body.ontouchstart = function(e){
//     touchPos = e.changedTouches[0].clientY;
// }

// // detect wether the "old" touchPos is 
// // greater or smaller than the newTouchPos
// var newTouch = document.body.ontouchmove = function(e){
//     let newTouchPos = e.changedTouches[0].clientY;
//     if(newTouchPos > touchPos) {
//         console.log("finger moving down");
//     }
//     if(newTouchPos < touchPos) {
//         console.log("finger moving up");
//     }
// }

export { touchTest, startTouch, moveTouch, endTouch }

