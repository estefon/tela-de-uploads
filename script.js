const dropArea = document.querySelector('.drag-files')


dropArea.addEventListener('dragover', () => {
    dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragover', () => {
    dropArea.classList.remove('dragover')
})