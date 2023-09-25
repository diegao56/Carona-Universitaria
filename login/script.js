// Função para verificar o cadastro do
var listaUser = JSON.parse(localStorage.getItem("usuarios"));

function logar() {
  var email = document.getElementById("inputEmail");
  var senha = document.getElementById("inputPassword");
  var encontrado = "Nao";
  for (let i = 0; i < listaUser.length; i++) {
    const usuario = listaUser[i];
    if (
      email.value === listaUser[i].emailUsuario &&
      senha.value === listaUser[i].senhaUsuario
    ) {
      alert("Usuario Autenticado");
      encontrado = "Sim";
      var codUsuario = listaUser[i].codigoUsuario;
      window.location.href = "/codigo/tela principal-2/index.html#" + codUsuario;
    } else if (
      email.value === listaUser[i].emailUsuario &&
      senha.value != listaUser[i].senhaUsuario
    ) {
      alert("Email ou senha invalidos");
      encontrado = "Indefinido";
    }
  }
  if (encontrado === "Nao") {
    alert("Email ou senha invalidos!");
  }
}
/*  msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de logar!</strong>";
        msgError.style.color = "#ac0808";
        msgError.style.padding = "1em";
        msgError.style.border = "1px solid #e40000";
        msgError.style.margin.bottom = "1em";
        msgError.style.background = "#ffd8d8"; 
        
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none"); */
