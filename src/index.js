document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  //Submit task behavior
  form.addEventListener('submit', function(event){
    const tasks = document.getElementById('tasks')
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const input = document.getElementById('new-task-description')
    if (input.value !== "") {
      li.innerHTML = input.value
      tasks.appendChild(li)
    } 
    btn.innerHTML = 'X'
    li.appendChild(btn)
    event.preventDefault()

    //Delete task behavior
    btn.addEventListener('click', function(event) {
      let removeTask = document.querySelector('#tasks') 
      removeTask.remove()
    }) 
    

  })


});
