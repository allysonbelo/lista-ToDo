const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()
}

const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')           //cria um elemento(botão) e armazena em variavel
    botaoConclui.classList.add('check-button')                      //adiciona classe
    botaoConclui.innerText = 'concluir'                             //adiciona texto
    botaoConclui.addEventListener('click', () =>                    //monitora ação de click
        concluirTarefa(atualiza, id))                           
        
        return botaoConclui                                         //retorna o componente
}


export default BotaoConclui //exporta para ser importado em outra parte do projeto