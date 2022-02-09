const input = document.querySelector('#task'),
        btn = document.querySelector('#taskAdd'),
        container = document.querySelector('.List--wrapper'),
        task = document.querySelector('.Task--wrapper'),
        edit = document.querySelector('.edit'),
        remove = document.querySelector('.delete');

btn.addEventListener('click', () => {
    if(input.value != '') {
        container.style.overflowY = 'scroll'
        task.innerHTML += `
            <div class="Task--single">
                <span class="Task--title">${input.value}</span>
                <div class="Buttons--group">
                    <button class="btn edit" onClick="editTask()">Editar</button>
                    <button class="btn delete" onClick="removeTask()">Excluir</button>
                </div>
            </div>
        `
    } else {
        alert('Insira uma tarefa no input')
    }
})

function removeTask() {
    let single = document.querySelector('.Task--single')
    task.removeChild(single)
}

