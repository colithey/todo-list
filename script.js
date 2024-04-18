const titleInp = document.querySelector('#title')
const descArea = document.querySelector('#desc')
const btnAdd = document.querySelector('#add')
const listDiv = document.querySelector('.list')

let taskList = JSON.parse(localStorage.getItem('toDoList')) || []

const createToDo = (title, desc) => {
    // 0 '' null undefined NaN = false
    // 'jkfs' ' ' 00000.1 [] {} () => {} = true
    if (title && desc) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const btn = document.createElement('button')

        div.className = 'todo'
        div.style.marginTop = '20px'

        h4.className = 'todo__title'
        h4.innerText = title
        h4.style.textTransform = 'capitalize'

        p.className = 'todo__desc'
        p.innerText = desc
        p.style.textTransform = 'capitalize'

        btn.innerText = '⌫'
        btn.style.textAlign = 'center'
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            listDiv.removeChild(div)
        })

        div.append(h4, p, btn)
        listDiv.append(div)

        titleInp.value = ''
        descArea.value = ''
    }
}

taskList.forEach((el) => {
    createToDo(el.title, el.desc)
})

const addToArray = () => {
    const taskObj = {
        title: titleInp.value,
        desc: descArea.value
    }
    taskList = [...taskList, taskObj]

    localStorage.setItem('toDoList', JSON.stringify(taskList))

    listDiv.innerHTML = ''
    taskList.forEach((el) => {
        createToDo(el.title, el.desc)
    })
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    addToArray()
})