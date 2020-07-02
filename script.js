// não é um array, é um nodeList
const operator = document.querySelectorAll(".operator") 
const numeric = document.querySelectorAll(".numeric")
const action = document.querySelectorAll("action")

// transforma em array
const arr1 = Array.from(operator)
const arr2 = Array.from(numeric)
const arr3 = Array.from(action)

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
        operation.value = element.id 
        
        // Avalia qual campo está vazio, para gravar um valor e preparar para a operação
        if(display.value != ""){
            if(aux1.value == ""){
                aux1.value = display.placeholder = display.value
                display.value = ""
            }else{
                result()
            }    
        }else{

        }
    }
})

function result() {  
    let num1 = 0
    let num2 = 0
    let calc = 0
    // Operação inicial com numero oculto. Ex: aperta 1 + e ele complementa com outro 1 no placeholder
    if(display.value == "" && aux1.value != "" && aux2.value == ""){alert("if1")
        num1 = Number(aux1.value)
        num2 = Number(display.placeholder) 
        calc = calculation(num1, num2)
        display.placeholder = aux2.value = calc 
        cleanOp(aux1)            
    }
    // Operação normal com 2 valores apenas. Ex: num1 + num2 = res
    else if(display.value != "" && aux1.value != "" && aux2.value == ""){alert("if2")
        num1 = Number(aux1.value)
        num2 = Number(display.value) 
        calc = calculation(num1, num2)
        aux2.value = display.placeholder = calc
        display.value = ""
        cleanOp(aux1)
    }
    //else if(display.value != "" && aux1.value == "" && aux2.value != ""){alert("haha")}

    // Operação normal após resultado. Ex: fez uma op normal (num1 + num2 = res) então realiza outra ação com o resultado
    else if(display.value != "" && aux1.value == "" && aux2.value != ""){alert("if3")
        num1 = Number(aux2.value)
        num2 = Number(display.value)
        calc = calculation(num1, num2)
        aux1.value = display.placeholder = calc
        display.value = ""
        cleanOp(aux2)
    }  
}

function cleanOp(field){
    field.value = ""   
    operation.value = ""
}

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
        default:
            break;
    }
    return res    
}