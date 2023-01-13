const key = document.querySelector('.key')
const res = document.querySelector('.res')
const boxes = document.querySelectorAll('.box')

window.addEventListener('keydown', (e)=>{
    key.style.display = 'none'
    res.style.display = 'flex'

    for (let i = 0; i < boxes.length; i++) {
        boxes[0].innerHTML = e.key
        boxes[1].innerHTML = e.keyCode
        boxes[2].innerHTML = e.code
    }
})