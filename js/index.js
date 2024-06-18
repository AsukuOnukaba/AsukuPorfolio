const picSwap = document.querySelector('#pictureSwap');
let picker1 = document.querySelector('.swap');
let picker2 = document.querySelector('.overlay');

picSwap.addEventListener('mouseover', ()=>{
    picker1.style.display= "none"
    picker2.style.display= "block"
})

picker2.addEventListener('mouseout', ()=>{
    picker1.style.display= "block"
    picker2.style.display= "none"
})

