let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-login");

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
                //entrar na pagina do jogo
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