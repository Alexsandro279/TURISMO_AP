document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    //alert("Login bem-sucedido!");

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    const usuarioValido = "usuario";
    const senhaValida = "123";



    // credeciais
    if (usuario === usuarioValido && senha === senhaValida) {
        window.location.href = "interface_inicial.html";
       
    } else {
        mensagemErro.textContent ="Credenciais inválidas. Tente novamente.";
        mensagemErro.style.display = "block";
        setTimeout(()=> {
            mensagemErro.textContent = "";
            mensagemErro.style.display = "none";
        },3000)
    }
    
});
