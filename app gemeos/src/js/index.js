const  abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click",function () {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoes(aba)


    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
}

function mostrarInformacoes(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idElementodeInformacoesDaAba = `informacao-${aba.id}`
    
    const informacaoMostrada = document.getElementById(idElementodeInformacoesDaAba)
    informacaoMostrada.classList.add("selecionado")


}