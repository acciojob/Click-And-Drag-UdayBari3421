// Your code here.
const items = document.querySelectorAll('.item')
const container = document.querySelector('.items')
items.forEach(el=>{
	// el.draggable = "true"
	el.addEventListener('mouseup',()=>{
		container.scrollLeft +=50
	})
	el.addEventListener('mousedown',()=>{
		container.scrollLeft -=50
	})
})