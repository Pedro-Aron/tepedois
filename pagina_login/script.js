let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-login");
let ranks = document.querySelector("#botao-ranking");

let contas = [];

criarconta.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 
    if(nomeinput.length < 1 || senhainput.length < 8) {
        alert("Nome/Senha Inválidos ou Não Preenchidos");
        return;
    };

    for (let item of contas) {
        if(nomeinput == item.nome) {
            alert("Nome Já Reservado");
            return;
        }
    }

    contas.push({nome: nomeinput, senha: senhainput});
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
                alert("Senha Incorreta");
                return;
            }
        }
    }

    if (count == 0) {
        alert("Conta Não Registrada");
    }
});

ranks.addEventListener("click", function() {
    location.href = "../pagina_melhores/ranking.html"
});