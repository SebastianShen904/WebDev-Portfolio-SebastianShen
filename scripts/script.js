document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        alert('Thank you for reaching out! This feature is coming soon.');
    });
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                this.textContent = 'Hide Details';
            } else {
                details.classList.add('hidden');
                this.textContent = 'View Details';
            }
        });
    });
});
