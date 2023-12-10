//=========== calling====================//

let firstText = document.querySelector('#firstText')
let secondText = document.querySelector('#secondText')
let selectOptions = document.querySelector('.selectOptions')
let firstInput = document.querySelector('.firstinput')
let secondInput = document.querySelector('.secondinput')
//========temperature start  here//
function toCelsius(Fahrenheit){
    return 5/9 * (Fahrenheit - 32)
}
function toFahrenheit(celsius){
    return  ( celsius * 5/9) + 32
}
//========temperature ends here//

//========area start  here//
function toSquareMeter(squarekilometer){
    return  ( 1*squarekilometer + 6)
}
function toSquareKilometer(SquareMeter){
    return  ( 1*SquareMeter - 6)
}
// ======area ends here=====//

// ======volume start here=====//
function toLiter(MiliLiter){
    return  ( MiliLiter * 1000) 
}
function toMiliLiter(Liter){
    return  ( Liter / 1000) 
}
// ======volume ends here=====//

// ======time start here=====//
function toSeconds(Minutes){
    return  ( Minutes / 60) 
}
function toMinutes(Seconds){
    return  ( Seconds * 60) 
}
// ======time ends here=====//

// ======length start here=====//
function toCentiMeter(Meter){
    return  ( Meter * 100) 
}
function toMeter(CentiMeter){
    return  (CentiMeter / 100) 
}
// ======length ends here=====//

selectOptions.addEventListener('change',function(){
    if(selectOptions.value === 'Temperature'){
        firstText.value = "DegreeCelcius"
        secondText.value = "Fahrenheit"
        firstInput.addEventListener('keyup',function(){
            secondInput.value = toCelsius(firstInput.value)
            
        })
        secondInput.addEventListener('keyup',function(){
            firstInput.value = toFahrenheit(secondInput.value)
        })
    }
    else if(selectOptions.value === 'Area'){
        firstText.value = "SquareMeter"
        secondText.value = "SquareKilometer"
        firstInput.addEventListener('keyup',function(){
            secondInput.value = toSquareMeter(firstInput.value)
            
        })
        secondInput.addEventListener('keyup',function(){
            firstInput.value = toSquareKilometer(secondInput.value)
        })
    }
    else if(selectOptions.value === 'Volume'){
        firstText.value = "Liter"
        secondText.value = "MiliLiter"
        firstInput.addEventListener('keyup',function(){
            secondInput.value = toLiter(firstInput.value)
            
        })
        secondInput.addEventListener('keyup',function(){
            firstInput.value = toMiliLiter(secondInput.value)
        })
    }
    else if(selectOptions.value === 'Time'){
        firstText.value = "Seconds"
        secondText.value = "Minutes"
        firstInput.addEventListener('keyup',function(){
            secondInput.value = toSeconds(firstInput.value)
            
        })
        secondInput.addEventListener('keyup',function(){
            firstInput.value = toMinutes(secondInput.value)
        })
    }
    else if(selectOptions.value === 'length'){
        firstText.value = "CentiMeter"
        secondText.value = "Meter"
        firstInput.addEventListener('keyup',function(){
            secondInput.value = toCentiMeter(firstInput.value)
            
        })
        secondInput.addEventListener('keyup',function(){
            firstInput.value = toMeter(secondInput.value)
        })
    } 
})

