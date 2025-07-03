function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("mensagemErro");

  if (usuario === "Admin" && senha === "123@4") {
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("telaBoasVindas").style.display = "block";
  } else {
    erro.textContent = "Usuário ou senha incorretos.";
    erro.style.color = "red";
  }
}

function mostrarVeiculos() {
  document.getElementById("telaBoasVindas").style.display = "none";
  document.getElementById("telaVeiculos").style.display = "block";
}

function mostrarFormulario(modelo) {
  document.getElementById("carroSelecionado").textContent = modelo;
  document.getElementById("formularioAluguel").style.display = "block";
  document.getElementById("mensagemFinalizacao").textContent = "";
}

function finalizarAluguel() {
  const nome = document.getElementById("nomeMotorista").value;
  const cnh = document.getElementById("cnhMotorista").value;
  const msg = document.getElementById("mensagemFinalizacao");

  if (nome.trim() === "" || cnh.trim() === "") {
    msg.textContent = "⚠️ Preencha todos os campos!";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Aluguel efetuado com sucesso!";
    msg.style.color = "green";
  }
}

// Função para deixar a primeira letra maiúscula no nome
function capitalizeFirstLetter(input) {
  let val = input.value;
  if(val.length === 0) return;
  input.value = val.charAt(0).toUpperCase() + val.slice(1);
}
