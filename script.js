// não é um array, é um nodeList
const operator = document.querySelectorAll(".operator") 
const numeric = document.querySelectorAll(".numeric")

// transforma em array
const arr1 = Array.from(operator)
const arr2 = Array.from(numeric)

// Ao clicar em um número
arr2.map( (element) => {
    element.onclick = () => {
        if(display.value.length < 8){            
            display.value += element.value            
        }
    }
})

// Ao clicar em uma operação
arr1.map( (element) => {
    element.onclick = () => { 
        // Lembra o tipo de operação selecionada (+ - etc)
        //operation.value = element.id

        if(aux1.value == ""){
            if(display.value){
                aux1.value = display.placeholder = display.value
                display.value = ""
            }
        }else{
            if(display.value){                
                let calc = calculation(Number(aux1.value), Number(display.value))
                display.value = ""
                display.placeholder = aux1.value = calc    
            }           
        } 
        operation.value = element.id
    }
})

// Limpa todos os campos
limparTudo.onclick = () => {
    display.value = ""
    display.placeholder = 0
    aux1.value = ""
    operation.value = ""
}

// Limpa o último numero digitado
limpar.onclick = () => {
    display.value = ""
    display.placeholder = 0
}    

// Ao clicar no botão igual =
equal.onclick = () => {
    if(aux1.value){
        if(display.value){
            let calc = calculation(Number(aux1.value), Number(display.value))
            display.value = ""
            display.placeholder = aux1.value = calc
        }
    }    
}

// Faz o cálculo dos params da função result() soma, mult, etc
function calculation(n1,n2) {
    let res = 0   
    let op = operation.value
    switch (op) {
        case "sum":
            res = n1 + n2            
            break;
        case "minus":
            res = n1 - n2            
            break;
        case "mult":
            res = n1 * n2            
            break;
        case "divide":
            res = n1 / n2            
            break;            
        default:
            break;
    }
    return res    
}