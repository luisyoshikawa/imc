const calcularEl = document.getElementById("calcular");

calcularEl.addEventListener("click", ()=>{
    const nomeEl = document.getElementById("nome").value;
    const alturaEl = document.getElementById("altura").value;
    const pesoEl = document.getElementById("peso").value;
    const resultadoEl = document.getElementById("resultado");

    if (nomeEl!== '' && alturaEl !== '' && pesoEl !== '') {
        const imc = pesoEl / (alturaEl*alturaEl);
        let imcNivel = ""; 
    
        if (imc < 18.5) {
            imcNivel = 'abaixo do peso.';
        } else if ( imc < 25 ) {
            imcNivel = 'com peso ideal.';
        } else if ( imc < 30 ) {
            imcNivel = 'levemente acima do peso.';
        } else if ( imc < 35 ) {
            imcNivel = 'obesidade grau I.';
        } else if ( imc < 40 ) {
            imcNivel = 'obesidade grau II.';
        } else {
            imcNivel = 'obesidade grau III.'
        }

        resultadoEl.textContent = `${nomeEl} seu IMC é ${imc.toFixed(2)} e você está ${imcNivel}`;

    } else{
        resultadoEl.textContent = 'Preencha todos os campos';
    }
})
