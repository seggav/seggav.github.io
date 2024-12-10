document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        targetDiv.classList.toggle('hidden');
    });
});
