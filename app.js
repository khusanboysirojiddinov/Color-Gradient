const randomBtn = document.querySelector('.random')
const musicBtn = document.querySelector('.music')
const linearText = document.querySelector('.linear')
const icon = document.querySelector('i')

randomBtn.addEventListener('click' , ()=>{
    getColor()
})

function getColor (){
    const values = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        '0',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ]


    const mixer = () => {
        let adder = ''
        for(let i=0; i < 6; i++){
            let random = Math.floor(Math.random() *15) +1
            let randomValues = values[random]
            adder += randomValues
        }
        return adder
    }

    const mixer1 = mixer()
    const mixer2 = mixer()
    const randomDeg = Math.floor(Math.random() *361)
    const linearGrad = `linear-gradient( ${randomDeg}deg, #${mixer1}, #${mixer2})`
    linearText.innerText = linearGrad
    document.body.style.background = linearGrad 
}

let play = false

let audio = new Audio('Sen Gelmez Oldun.mp3')
musicBtn.addEventListener('click', ()=>{
    if (!play) {
        audio.play()
            icon.classList.remove('fa-play-circle')
            icon.classList.add('fa-pause-circle')
      } else if (play) {
        audio.pause()
        icon.classList.remove('fa-pause-circle')
        icon.classList.add('fa-play-circle')
      }
    
      play = !play
})


getColor()  
