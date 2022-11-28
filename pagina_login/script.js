let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-login");
let ranks = document.querySelector("#botao-ranking");

let contas;

$.ajax({
    url: '../contas.json',
    dataType: 'json',
    success: contas => {
        JSON.parse(contas);
    }
});

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

    let contaNova = {nome: nomeinput, senha: senhainput, nVitorias: 0, nPartidas: 0, coef: 0};

    contas.push(contaNova);

    $.ajax({
        url: '../contas.json', 
        type: 'PUT',
        dataType: 'json', 
        data: JSON.stringify(contaNova)
    })

    location.href = "../pagina_jogo/jogo.html"
}); 

botao.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 

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

    alert("Conta Não Registrada");
    
});

ranks.addEventListener("click", function() {
    location.href = "../pagina_melhores/ranking.html"
});