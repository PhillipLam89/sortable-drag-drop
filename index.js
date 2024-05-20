const allItems = document.querySelectorAll('p')
const allBoxes = document.querySelectorAll('.box')
let currentDragItem = null
let closestNextElement = null

allItems.forEach(item => {
  item.ondragstart = function() {
    currentDragItem = this
    setTimeout(() => this.style.display = 'none')
  }
  item.ondragend = function() {
    setTimeout(() => this.style.display = 'block')
    setTimeout(() => this.style.border = '2px solid red', 600)
    currentDragItem = null
  }
})

allBoxes.forEach(box => {
  box.ondragover = (e) => e.preventDefault()
  box.ondrop = function(e) {
    const notDraggedItems = [...box.children]
    .filter(item => item.innerText !== currentDragItem.innerText)


    const closestNextElement = notDraggedItems
        .find(item => e.clientY <= item.offsetTop + item.offsetHeight / 2 )
      box.insertBefore(currentDragItem, closestNextElement)
      currentDragItem.style.border = '2px solid green'
  }
})