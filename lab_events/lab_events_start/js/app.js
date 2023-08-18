document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form')
  form.addEventListener("submit", handleFormSubmit)

  const deleteButton = document.getElementById('delete-all')
  deleteButton.addEventListener('click', deleteAllFromDom)
})


const deleteAllFromDom = function(){
  // const getAll = document.querySelectorAll(".listed-item")
  const getAll = document.getElementById('reading-list')
  // while (getAll.firstChild){
  //   getAll.removeChild(getAll.lastChild)
  // }

  // while (getAll.firstChild){
  //   getAll.firstChild.remove()
  // }
  getAll.replaceChildren()
}


const handleFormSubmit = function(event){
  console.log(event)

  const addItemToPage = document.getElementById("reading-list")
  const newItem = document.createElement('li')
  newItem.classList.add("listed-item")

  const newTitle = document.createElement("h3")
  newTitle.classList.add('item-title')
  newTitle.textContent = event.target[0].value

  const newAuthor = document.createElement('h4')
  newAuthor.classList.add("item-author")
  newAuthor.textContent = event.target[1].value


  const newCategory = document.createElement('h5')
  newCategory.classList.add("item-category")
  newCategory.textContent=event.target[2].value



  newItem.append(newTitle,newAuthor,newCategory)
  addItemToPage.appendChild(newItem)



  event.preventDefault();
  const form = document.getElementById('new-item-form').reset()
}
