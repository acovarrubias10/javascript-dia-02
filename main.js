var btnSumar = document.querySelector('#btnSumar')
var inpNum1 = document.querySelector('#numero1')
var inpNum2 = document.querySelector('#numero2')
var inpResultado = document.querySelector('#resultado')
var btnRestar = document.querySelector('#btnRestar')
var btnMultiplicar = document.querySelector('#btnMultiplicar')
var btnDividir = document.querySelector('#btnDividir')
var btnBorrar = document.querySelector('#btnBorrar')
var btnProbar = document.querySelector('#btnProbar')

btnProbar.addEventListener('click', ()=> {
    let num = Number(inpNum1.value)

    if(num < 10) {
        alert('Es una unidad')
    }
    else if (num <100){
        alert('Es una decena')
    }
    else if(num <1000) {
        alert('Es una centena')
    }
    else {
        alert('Valor fuera de rango')
    }
})

btnSumar.addEventListener('click', ()=> {
    alert('Hola, mundo!')
    inpResultado.value = Number(inpNum1.value) + Number(inpNum2.value) 
})


btnRestar.addEventListener('click', ()=> {
    alert('Hola, mundo!')
    inpResultado.value = Number(inpNum1.value) - Number(inpNum2.value) 
})


btnMultiplicar.addEventListener('click', ()=> {
    alert('Hola, mundo!')
    inpResultado.value = Number(inpNum1.value) * Number(inpNum2.value) 
})


btnDividir.addEventListener('click', ()=> {
    alert('Hola, mundo!')
    inpResultado.value = Number(inpNum1.value) / Number(inpNum2.value) 
})

btnBorrar.addEventListener('click', ()=> {
    inpResultado.value = '', inpNum1.value = '', inpNum2.value = '' 
})

