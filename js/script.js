const input = document.querySelector('#task'),
        taskList = document.querySelector('.Task--wrapper'),
        taskSingle = document.getElementsByClassName('Task--single'),
        taskTitle = document.getElementsByClassName('Task--title');

addEventListener('keypress', e => {
    (e.keyCode == 13)? newTask() : false
})

function newTask() {
    if(!input.value.trim()) {
        alert('Insira uma tarefa no campo!');
        return;
    }
    const div = document.createElement('div'),
        span = document.createElement('span'),
        btnGroup = document.createElement('div'),
        btnEdit = document.createElement('button'),
        editTask = document.createElement('input'),
        btnSave = document.createElement('button'),
        btnDelete = document.createElement('button');
    
    span.textContent = input.value;
    btnEdit.textContent = 'Editar';
    btnDelete.textContent = 'Deletar';
    btnSave.textContent = 'Salvar';

    div.classList.add('Task--single');
    span.classList.add('Task--title');
    btnGroup.classList.add('Buttons--group');
    btnEdit.classList.add('btn');
    btnDelete.classList.add('btn');
    btnSave.classList.add('btn');
    btnEdit.classList.add('edit');
    btnDelete.classList.add('delete');
    btnSave.classList.add('Save--task');
    editTask.classList.add('Edit--task');

    editTask.setAttribute('type', 'text')
    
    editTask.value = span.textContent
    btnEdit.addEventListener('click', () => {
        div.removeChild(btnGroup)
        div.removeChild(span)
        div.appendChild(editTask)
        div.appendChild(btnSave)
        input.autofocus = false;
        editTask.autofocus = true;
        btnSave.addEventListener('click', () => {
            span.textContent = editTask.value

            div.removeChild(editTask);
            div.removeChild(btnSave);
            div.appendChild(span);
            div.appendChild(btnGroup);
            btnGroup.appendChild(btnEdit);
            btnGroup.appendChild(btnDelete);
        })
    })

    btnDelete.addEventListener('click', () => {
        div.remove()
    })

    div.appendChild(span);
    div.appendChild(btnGroup);
    btnGroup.appendChild(btnEdit);
    btnGroup.appendChild(btnDelete);
    taskList.append(div);

    input.value = '';
};