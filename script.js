const btn = document.getElementById('btn-calc');


function imc(){
  const nome = document.getElementById('name').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value; 
  const info = document.getElementById('box-info');
  
  if (nome !== '' && altura !== '' && peso !== '' ){
    
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5){
      classificacao = 'abaixo do peso.';
    }else if(valorIMC < 25){
      classificacao = 'com o peso ideal. Parabéns!';
    }else if(valorIMC < 30){
      classificacao = 'levemente acima do peso.';
    }else if(valorIMC < 35){
      classificacao = 'com obesidade grau 1';
    }else if(valorIMC < 40){
      classificacao = 'com obesidade grau 2';
    }else{
      classificacao = 'com obesidade grau 3. Cuidado!!';
    }

    info.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

  }else{
    info.textContent = 'Preencha todos os campos!!';
  }
}

btn.addEventListener('click', imc);