const output = document.getElementById("output") 
// Inicializar um output para colocar as informações no final

function result(){
    const nomeInput = document.getElementById("nomeheroi") // Criando e pegando um ID
    const xpInput = document.getElementById("xpheroi") // Criando e pegando um ID

    const nomeheroiValue = nomeInput.value.trim() // Validando os IDs
    const xpheroiInput = xpInput.value.trim() // Validando os IDs

    if(nomeheroiValue === "" || xpheroiInput === ""){ // Informações abaixo
        alert(" !!! Digite nos dois campos !!! ")
        nomeInput.value = ""
        xpInput.value = ""
        return
    }

    const xpheroiValue = Number(xpheroiInput) // Transformando para number

    if(xpheroiValue <= 0 ){ // Informações abaixo
        alert(" !!! Digite apenas números maiores que zero !!! ")
        nomeInput.value = ""
        xpInput.value = ""
        return
    }

    if(xpheroiValue <= 1000){ // ifs com as comparações do xp e o valor principal
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Ferro`
    }else if(xpheroiValue >= 1001 && xpheroiValue <= 2000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Bronze`
    }else if(xpheroiValue >= 2001 && xpheroiValue <= 5000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Prata`
    }else if(xpheroiValue >= 5001 && xpheroiValue <= 7000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Ouro`
    }else if(xpheroiValue >= 7001 && xpheroiValue <= 8000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Platina`
    }else if(xpheroiValue >= 8001 && xpheroiValue <= 9000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Ascendente`
    }else if(xpheroiValue >= 9001 && xpheroiValue <= 10000){
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Imortal`
    }else{
        output.innerHTML = `O Herói ${nomeheroiValue} está no nível ${xpheroiValue} = Radiante`
    }
}

/* 

if(nomeheroiValue === "" || xpheroiInput === ""){
        alert(" !!! Digite nos dois campos !!! ")
        nomeInput.value = ""
        xpInput.value = ""
        return
    }

    Neste if, estou pegando o nome e o xp do herói para verificar se os campos foram preenchidos ao pedir para o usuário. Caso um dos campos esteja vazio, ele vai mostrar um alert na tela com a mensagem dizendo para o usuário escrever em todos os campos. No final ele vai limpar os campos.

*/

/* 

if(xpheroiValue <= 0 ){
        alert(" !!! Digite apenas números maiores que zero !!! ")
        nomeInput.value = ""
        xpInput.value = ""
        return
    }

    Neste if, comparo o xp do heroi se ele é menor do que zero. Caso seja menor, ele mostra um alert pedindo para digitar um valor maior que zero e limpa os campos dos inputs.

*/