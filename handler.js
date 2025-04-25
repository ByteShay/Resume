 // Initialize Feather Icons
    feather.replace();
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.innerHTML = feather.icons['sun'].toSvg();
    } else {
      body.classList.remove('dark-mode');
      themeToggle.innerHTML = feather.icons['moon'].toSvg();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // Update icon and save preference
      if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = feather.icons['sun'].toSvg();
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggle.innerHTML = feather.icons['moon'].toSvg();
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Typing animation
    const typingText = document.getElementById('typingText');
    const professions = ['Senior Software Developer', 'Full-Stack Engineer', 'Cloud Specialist', 'RPAS Pilot'];
    let currentProfession = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
      const currentText = professions[currentProfession];
      
      if (!isDeleting && charIndex < currentText.length) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex > 0) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentProfession = (currentProfession + 1) % professions.length;
        }
        setTimeout(typeWriter, isDeleting ? 1500 : 500);
      }
    }
    
    // Start the typing effect
    setTimeout(typeWriter, 1000);