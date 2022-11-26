let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-login");
let ranks = document.querySelector("#botao-ranking");

let contas = [];

criarconta.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 
    if(nomeinput.length < 1 || senhainput.length < 8) {
        alert("nome/senha inválidos");
        return;
    };

    for (let item of contas) {
        if(nomeinput == item.nome) {
            alert("nome já reservado");
            return;
        }
    }

    contas.push({nome: nomeinput, senha: senhainput});
    location.href = "../pagina_jogo/jogo.html"
}); 

botao.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 
    let count = 0;

    for (let item of contas) {
        if(nomeinput == item.nome) {
            count ++;
            if (senhainput == item.senha) {
                location.href = "../pagina_jogo/jogo.html"
            }
            else {
                alert("senha incorreta");
                return;
            }
        }
    }

    if (count == 0) {
        alert("conta não registrada");
    }
});

ranks.addEventListener("click", function() {
    location.href = "../pagina_melhores/ranking.html"
});