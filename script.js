// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Gallery Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        // Filter gallery items
        galleryItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-level');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target;
            const width = skillLevel.style.width;
            skillLevel.style.width = '0';
            setTimeout(() => {
                skillLevel.style.width = width;
            }, 300);
        }
    });
}, observerOptions);

skillBars.forEach(bar => observer.observe(bar));

// Dynamic Gallery Images (Add your images here)
const galleryImages = [
    {
        src: 'assets/images/formal-photo.jpg',
        category: 'profile',
        title: 'Professional Headshot',
        desc: 'Rayhan Mahmud'
    },
    {
        src: 'assets/images/484317348_122137867238402220_3998099313597209505_n.jpg',
        category: 'volunteer',
        title: 'Community Environmental Activity',
        desc: 'Collaborative fieldwork'
    },
    {
        src: 'assets/images/469608513_122124621464402220_2444493933813268427_n.jpg',
        category: 'volunteer',
        title: 'Climate Champion',
        desc: 'Be a Greener Man for the Greener Future'
    },
    {
        src: 'assets/images/WhatsApp Image 2024-10-26 at 21.56.21_2c818a5e.jpg',
        category: 'certificates',
        title: 'Certificate of Appreciation',
        desc: 'Amra Notun Network'
    },
    {
        src: 'assets/images/WhatsApp Image 2024-11-09 at 03.07.57_60845e48.jpg',
        category: 'volunteer',
        title: 'Youth Climate Action',
        desc: 'Dinajpur - Lal Shobuj Society'
    },
    {
        src: 'assets/images/IMG-20251004-WA0024.jpg',
        category: 'lab',
        title: 'Electrical Lab Equipment',
        desc: 'Voltage measurements'
    },
    {
        src: 'assets/images/20250921_125908.jpg',
        category: 'research',
        title: 'Temperature Analysis',
        desc: 'Research data collection'
    },
    {
        src: 'assets/images/20250921_135537.jpg',
        category: 'lab',
        title: 'Agricultural Engineering Lab',
        desc: 'HSTU Lab-4'
    },
    {
        src: 'assets/images/20250921_141211.jpg',
        category: 'lab',
        title: 'Equipment Barcode',
        desc: 'Lab inventory'
    },
    {
        src: 'assets/images/20250921_141529.jpg',
        category: 'lab',
        title: 'Lab Equipment',
        desc: 'Engineering tools'
    },
    {
        src: 'assets/images/20250921_141656.jpg',
        category: 'lab',
        title: 'Digital Power Supply',
        desc: 'Research equipment'
    },
    {
        src: 'assets/images/20250921_141942.jpg',
        category: 'lab',
        title: 'Lab Setup',
        desc: 'Equipment panel'
    },
    {
        src: 'assets/images/20250921_143258.jpg',
        category: 'lab',
        title: 'Lab Components',
        desc: 'Technical setup'
    }
];

// Function to populate gallery
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    galleryImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', img.category);
        
        galleryItem.innerHTML = `
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${img.title}</h4>
                <p>${img.desc}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', populateGallery);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});