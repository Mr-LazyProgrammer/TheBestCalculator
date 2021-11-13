let ac = document.querySelector('#ac')
let c = document.querySelector('#c')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')
let dot = document.querySelector('#dot')
let equal = document.querySelector('#equal')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let div = document.querySelector('#div')
let mul = document.querySelector('#mul')

let input = ""
let op = ""
let temp = ""
let result = 0

let current = document.querySelector('.current')
let previous = document.querySelector('.previous')

document.addEventListener('click', function( event ) {
  if (ac == event.target && ac.contains(event.target)) {    
    input = ""
    temp = ""
  }

  if (c == event.target && c.contains(event.target)) {    
    input = input.slice(0, input.length -1)
  }

  if (one == event.target && one.contains(event.target)) {
    input += "1"
  }

  if (two == event.target && two.contains(event.target)) {    
    input += "2"
  }

  if (three == event.target && three.contains(event.target)) {    
    input += "3"
  }

  if (four == event.target && four.contains(event.target)) {    
    input += "4"
  }

  if (five == event.target && five.contains(event.target)) {    
    input += "5"
  }

  if (six == event.target && six.contains(event.target)) {    
    input += "6"
  }

  if (seven == event.target && seven.contains(event.target)) {    
    input += "7"
  }

  if (eight == event.target && eight.contains(event.target)) {    
    input += "8"
  }

  if (nine == event.target && nine.contains(event.target)) {    
    input += "9"
  }

  if (zero == event.target && zero.contains(event.target)) {    
    input += "0"
  }

  if (dot == event.target && dot.contains(event.target)) {    
    input += "."
  }

  if (plus == event.target && plus.contains(event.target)) {    
    op = "+"
    temp = input
    input = ""
  }

  if (minus == event.target && minus.contains(event.target)) {    
    op = "-"
    temp = input
    input = ""
  }

  if (equal == event.target && equal.contains(event.target)) {    
    temp = eval(temp + op + input)
    input = ""
    op = ""
  }

  if (mul == event.target && mul.contains(event.target)) {    
    op = "*"
    temp = input
    input = ""
  }

  if (div == event.target && div.contains(event.target)) {    
    op = "/"
    temp = input
    input = ""
  }

    previous.innerHTML = temp + op
    current.innerHTML = input
});

