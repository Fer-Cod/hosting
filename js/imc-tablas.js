const formulario = document.getElementById("formpacientes");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(formulario)

        
    insertRowTransactionTable(transactionFormData);
    formulario.reset();

})

function calculoIMC(altura, peso){
    altura = altura/100;
    peso = peso;
    let imc = peso / (altura * altura);
    return imc.toFixed(3);
}

function colorCeldaIMC(imc){
    let color = "";
    if (imc<18){
        color="orange";
    }
    else if(imc>=18 && imc<25){
        color="green";
    }
    else if(imc>=25 && imc<27){
        color="yellow";
    }
    else if(imc>=27 && imc<30){
        color="orange";
    }
    else if(imc>=30 && imc<40){
        color="red";
    }
    else {
        color="red";	
    }
    return color;
}

function mensajeIMC(imc){
    let mensaje = "";
    if (imc<18){
        mensaje="Peso Bajo";
    }
    else if(imc>=18 && imc<25){
        mensaje="Peso Normal";
    }
    else if(imc>=25 && imc<27){
        mensaje="Sobrepeso";
    }
    else if(imc>=27 && imc<30){
        mensaje="Obesidad grado I";
    }
    else if(imc>=30 && imc<40){
        mensaje="Obesidad grado II";
    }
    else {
        mensaje="Obesidad grado III";	
    }
    return mensaje;
}

function insertRowTransactionTable(transactionFormData){
    let transactionTablaRef = document.getElementById("tablaPacientes")
    let newRowRef = transactionTablaRef.insertRow(-1);
    let imc = calculoIMC(transactionFormData.get("altura"), transactionFormData.get("peso"));
    let mensaje = mensajeIMC(imc);
    let colorCelda = colorCeldaIMC(imc);

/*     let altura = transactionFormData.get("altura")/100;
    let peso = transactionFormData.get("peso");
    let imc = peso / (altura * altura); */

    let newCellRef = newRowRef.insertCell(0);
    newCellRef.textContent = transactionFormData.get("apellido");

    newCellRef = newRowRef.insertCell(1);
    newCellRef.textContent = transactionFormData.get("nombre");

    newCellRef = newRowRef.insertCell(2);
    newCellRef.textContent = transactionFormData.get("edad");

    newCellRef = newRowRef.insertCell(3);
    newCellRef.textContent = transactionFormData.get("sexo");

    newCellRef = newRowRef.insertCell(4);
    newCellRef.textContent = transactionFormData.get("altura");

    newCellRef = newRowRef.insertCell(5);
    newCellRef.textContent = transactionFormData.get("peso");

    newCellRef = newRowRef.insertCell(6);
    newCellRef.textContent = imc;
    newCellRef.style.background = colorCelda;

    newCellRef = newRowRef.insertCell(7);
    newCellRef.textContent = mensaje;
    newCellRef.style.background = colorCelda;
}
