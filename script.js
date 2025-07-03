function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("mensagemErro");
  
    if (usuario === "Admin" && senha === "123@4") {
      window.location.href = "home.html";
    } else {
      erro.textContent = "Usuário ou senha incorretos.";
      erro.style.color = "red";
    }
  }
  
  function mostrarFormulario() {
    document.getElementById("formularioAluguel").style.display = "block";
  }
  
  function finalizarAluguel() {
    const nome = document.getElementById("nomeMotorista").value;
    const cnh = document.getElementById("cnhMotorista").value;
    const msg = document.getElementById("mensagemFinalizacao");
  
    if (nome.trim() === "" || cnh.trim() === "") {
      msg.textContent = "Por favor, preencha todos os campos!";
      msg.style.color = "red";
    } else {
      msg.textContent = "✅ Aluguel efetuado com sucesso!";
      msg.style.color = "green";
    }
  }
  