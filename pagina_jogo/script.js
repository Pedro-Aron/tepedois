let posEl = document.querySelectorAll(".pos");
let textoVitoriaEl = document.querySelector("#texto-vitoria");
let btnVitoriaEL = document.querySelector("#btn-vitoria");
let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-criar");
let ranks = document.querySelector("#botao-ranking");

let count = 0;

let seqVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 4, 8],
    [6, 4, 2],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

let contas = [{
    nome: "teste1",
    senha: "teste1",
    nVitorias: 0, 
    nPartidas: 0
},
{
    nome: "teste2",
    senha: "teste2",
    nVitorias: 0, 
    nPartidas: 0
}]

for (let item of posEl) {
    item.addEventListener("click", function() {
         if (getComputedStyle(item).cursor != "not-allowed") {
            if (count % 2 == 0)     item.classList.add("x");
            else                    item.classList.add("o");

            count++;

            (count) % 2 ? checkVitoria("x") : checkVitoria("o");
         }
    });
}

function checkVitoria(jogador) {
    let vitoria = seqVitoria.some((sequencia) => {
        return sequencia.every((indice) => {
            return posEl[indice].classList.contains(jogador);
        })
    })

    if (vitoria) {
        count = 0;
        document.getElementById("vitoria").style.display = "flex";
        textoVitoriaEl.innerHTML = `${jogador.toUpperCase()} venceu!`;
    }

    if (count == 9 && !vitoria) {
        count = 0;
        document.getElementById("vitoria").style.display = "flex";
        textoVitoriaEl.innerHTML = `Empate!`;
    }

    return;
}

btnVitoriaEL.addEventListener("click", function() {
    for (let item of posEl) {
        item.classList.remove("x");
        item.classList.remove("o");
    }

    document.getElementById("vitoria").style.display = "none";
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

    let contaNova = {nome: nomeinput, senha: senhainput, nVitorias: 0, nPartidas: 0};

    contas.push(contaNova);

    alert("Conta registrada com sucesso!");
}); 

botao.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 

    let count = 0;

    for (let item of contas) {
        if(nomeinput == item.nome) {
            count++;
            if (senhainput == item.senha) {
                document.getElementById("login-aparece").style.display = "none";                
            }
            else {
                alert("Senha Incorreta");
                return;
            }
        }
    }

    if(count==0)    alert("Conta Não Registrada");
    
});

ranks.addEventListener("click", function() {
    location.href = "../pagina_creditos/creditos.html"
});
