    import BotaoConclui from './componentes/concluiTarefa.js'
    import BotaoDeleta  from './componentes/deletaTarefa.js'

    const criartarefa = (evento) => {
        evento.preventDefault()

        const input = document.querySelector('[data-form-input]')
        const lista = document.querySelector('[data-list]')
        const valor = input.value
       
            if(valor.length <= 1){
                alert('Preencha o campo');
            }else{
                const tarefa = document.createElement('li')
                tarefa.classList.add('task')
                
                const conteudo = `<p class="content">${valor}</p>`
        
                tarefa.innerHTML = conteudo
        
                tarefa.appendChild(BotaoConclui())
                tarefa.appendChild(BotaoDeleta())
                lista.appendChild(tarefa)
                input.value = " "
            }
        

        
    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criartarefa)

