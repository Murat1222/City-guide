const modalElement = document.getElementById('my-modal');

document.getElementById('open-modal-btn').addEventListener("click", function () {
  modalElement.classList.add('open')
})

document.getElementById('close-my-modal-btn').addEventListener("click", function () {
  modalElement.classList.remove('open')
})
