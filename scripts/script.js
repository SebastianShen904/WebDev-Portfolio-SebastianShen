
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');
    
   
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});


const musicToggleBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicToggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggleBtn.textContent = '🎵 Play Music';
    } else {
        
        bgMusic.play().then(() => {
            musicToggleBtn.textContent = '⏸ Pause Music';
        }).catch(error => {
            console.log("Audio play failed (browser might require user interaction first):", error);
        });
    }
    isPlaying = !isPlaying;
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href').substring(1);
        
        
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active');
            
        
            section.classList.remove('fade-in'); 
            void section.offsetWidth; 
            section.classList.add('fade-in'); 
        });
        
       
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});