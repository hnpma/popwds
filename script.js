const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close-button]')
// The above line points to the attribute we used in the HTML File
// for the button with class="close-button" line 24
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
 // The above line is going to get the line from HTML with the code
 // <button data-modal-target="#modal">Open Modal</button> line 15
 //which points to the modal having the text of Lorem epsum 
        
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
 // 
 //
 //   
        openModal(modal)
    })
})



function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}




















