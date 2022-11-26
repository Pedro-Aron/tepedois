let nomeinput = document.querySelector("#nome").value; 
let senhainput = document.querySelector("#senha").value; 
let botao = document.querySelector("#botao-jogar");

let criarconta = document.querySelector("#botao-login");
criarconta.addEventListener("click", function(){
    
}); 






botao.addEventListener("click", function(){
    alert("on");
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 

window.localStorage.setItem("Nome", nomeinput);
window.localStorage.setItem("senha", senhainput);
});

