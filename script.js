const containerCursos = document.querySelector('.container-cursos')

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click', () => goToNextImage())
prev.addEventListener('click', () => goToPrevImage())

let index = 0

function changeCurso(){
    if(index < - 4){ 
        index = 0
    }
    if(index > 0){
        index = 0
    }
    containerCursos.style.transform = `translateX(${index*420}px)` 
}

function goToNextImage(){
    index--
    changeCurso()
}

function goToPrevImage(){
    index++
    changeCurso()
}