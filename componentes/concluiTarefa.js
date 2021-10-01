const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')       //cria um elemento(botão) e armazena em variavel
    botaoConclui.classList.add('check-button')                  //adiciona classe
    botaoConclui.innerText = 'concluir'                         //adiciona texto
    botaoConclui.addEventListener('click', concluirTarefa)      //monitora ação de click
    return botaoConclui                                         //retorna o componente
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target                          //verifica quem sofreu a ação
    const tarefaCompleta = botaoConclui.parentElement           //pega o elemento paai de quem sofreu a ação
    tarefaCompleta.classList.toggle('done')                     //adiciona ou remove a classe 'done' ao elemento
}

export default BotaoConclui                                     //exporta para ser importado em outra parte do projeto