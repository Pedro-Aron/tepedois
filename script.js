botao = document.querySelector("#botao-jogar");
botao.addEventListener("click", function(){
    alert("on");
    let nomeinput = document.querySelector("#nome").value; 
let idadeinput = document.querySelector("#idade").value; 

window.localStorage.setItem("Nome", nomeinput);
window.localStorage.setItem("Idade", idadeinput);
});
