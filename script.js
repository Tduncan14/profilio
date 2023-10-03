

const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

// Mouse circle

const mouseCircleFn = (x,y) => {
    
    mouseCircle.style.cssText=`top:${y}px; left:${x}px`;
    mouseDot.style.cssText = `top:${y}px; left:${x}px`;


    

}


document.body.addEventListener('mousemove', e => {
    let X = e.clientX;
    let y = e.clientY;


    mouseCircleFn(x,y)
})