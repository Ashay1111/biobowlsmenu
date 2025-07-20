// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add to cart functionality
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c42)';
        btn.textContent = 'Added! ✓';
        btn.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            btn.style.background = 'linear-gradient(135deg, var(--bright), #5a9b47)';
            btn.textContent = 'Add to Cart';
            btn.style.transform = 'scale(1)';
        }, 2000);
    });
});

// Card flip functionality for salads
document.querySelectorAll('.menu-item[data-type="salad"]').forEach(item => {
    item.addEventListener('click', (e) => {
        // Don't flip if clicking on buttons
        if (e.target.classList.contains('add-btn') || e.target.classList.contains('flip-back-btn')) {
            return;
        }
        
        item.classList.toggle('flipped');
    });
});

// Flip back button functionality
document.querySelectorAll('.flip-back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItem = btn.closest('.menu-item');
        menuItem.classList.remove('flipped');
    });
});

// Menu item hover effects (for non-salad items)
document.querySelectorAll('.menu-item:not([data-type="salad"])').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'translateY(-15px) scale(1.05)';
        setTimeout(() => {
            item.style.transform = 'translateY(-15px)';
        }, 200);
    });
});

// Dynamic sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 3000);
