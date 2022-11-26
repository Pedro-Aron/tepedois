let botao = document.querySelector("#botao-jogar");

let contas = [];

let criarconta = document.querySelector("#botao-login");
criarconta.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 
    if(nomeinput.length < 1 || senhainput.length < 8) {
        alert("nome/senha inválidos");
        return;
    };

    for (let item of contas) {
        if(nomeinput == item.nome) {
            return;
        }
    }

    contas.push({nome: nomeinput, senha: senhainput});

    console.log(contas);

}); 

botao.addEventListener("click", function(){
    alert("on");
    window.localStorage.setItem("Nome", nomeinput);
    window.localStorage.setItem("senha", senhainput);
});