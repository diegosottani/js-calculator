function mount(numberPressed) {
    if(aux.value.length < 8){        
        aux.value += numberPressed       
    }
}

function calcular(typeOp) {
    let op1 = display.value
    let op2 = aux.value
    if(op1 !== "" && op2 !== ""){
        let res = Number(op1) + Number(op2)
        display.value = res     
    }else if(op1 !== "" && op2 === ""){
        aux.display = display.value 
    }
    else{
        display.value = aux.value        
    }
    aux.value = ""
}

function equals() {
   let a = display.value
   let b = aux.value 
   let res = Number(a) + Number(b)
   display.value = res
   aux.value = ""
}