// const foto = ['1.jpg', '2.jpg', '3.jpg']
const myFirstEvent = document.getElementById('works__right')
let s

// let i = 0
let j = 0
let k
// let l
const image = document.getElementById('works__slider')
const image1 = document.getElementById('works__slider1')
// const text = document.getElementById('text')

function next () {
//  i++
  j++

  if (j === 3) {
    j = 0
  }

  k = 800 - j * 400
  s = k + 'px'
  image.style.marginLeft = s

  if (j === 1) {
    image1.style.width = '750px'
    image1.style.height = '500px'
  } else {
    image1.style.width = '450px'
    image1.style.height = '300px'
  }

  k = 800 - j * 400
  s = k + 'px'
  image.style.marginLeft = s
}

myFirstEvent.addEventListener('click', next)

next()
