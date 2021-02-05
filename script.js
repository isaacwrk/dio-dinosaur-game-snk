document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.fundo-tela');
    const levi = document.querySelector('.levi')
    const grid = document.querySelector('.grid')
    const body = document.querySelector('body')
    const alert = document.getElementById('alert')
    let isJumping = false
    let gravity = 0.9
    let isGameOver = false
    
    function control(e) {
      if (e.keyCode === 32) {
        if (!isJumping) {
          isJumping = true
          jump()
        }
      }
    }
    document.addEventListener('keyup', control)
    
    let position = 0
    function jump() {
      let count = 0
      let timerId = setInterval(function () {
        //move down
        if (count === 15) {
          clearInterval(timerId)
          let downTimerId = setInterval(function () {
            if (count === 0) {
              clearInterval(downTimerId)
              isJumping = false
            }
            position -= 5
            count--
            position = position * gravity
            levi.style.bottom = position + 'px'
          },20)
    
        }
        //up
        position +=30
        count++
        position = position * gravity
        levi.style.bottom = position + 'px'
      },20)
    }
    
    function createBestialTitan() {
      let randomTime = Math.random() * 8000
      let titanPosition = 1500
      const titan = document.createElement('div')
      if (!isGameOver) titan.classList.add('bestial')
      grid.appendChild(titan)
      titan.style.left = titanPosition + 'px'
    
      let timerId = setInterval(function() {
        if (titanPosition > 0 && titanPosition < 60 && position < 60) {
          clearInterval(timerId)
          alert.innerHTML = 'Game Over'
          isGameOver = true
          //remove all children
          body.removeChild(body.firstChild)
          while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
          }
          
        }
        titanPosition -=15
        titan.style.left = titanPosition + 'px'
      },20)
      if (!isGameOver) setTimeout(createBestialTitan, randomTime)
    }
    createBestialTitan()

    function createColossalTitan() {
        let randomTime = Math.random() * 12000
        let titanPosition = 1500
        const titan = document.createElement('div')
        if (!isGameOver) titan.classList.add('colossal')
        grid.appendChild(titan)
        titan.style.left = titanPosition + 'px'
      
        let timerId = setInterval(function() {
          if (titanPosition > 0 && titanPosition < 60 && position < 60) {
            clearInterval(timerId)
            alert.innerHTML = 'Game Over'
            isGameOver = true
            //remove all children
            body.removeChild(body.firstChild)
            while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
            }
            
          }
          titanPosition -=15
          titan.style.left = titanPosition + 'px'
        },20)
        if (!isGameOver) setTimeout(createColossalTitan, randomTime)
      }
      createColossalTitan()

    })