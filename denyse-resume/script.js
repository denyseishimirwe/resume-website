document.addEventListener('DOMContentLoaded', function () {
    // 🌟 Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Stop default jump
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ✉️ Form Validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function showError(input, message) {
        clearError(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.85em';
        errorDiv.textContent = message;
        input.style.borderColor = 'red';
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        const error = input.parentNode.querySelector('.error');
        if (error) error.remove();
        input.style.borderColor = '#ccc';
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);

        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Name must be at least 2 characters.');
            valid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email.');
            valid = false;
        }

        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Message must be at least 10 characters.');
            valid = false;
        }

        if (valid) {
            alert('🎉 Thank you! Your message was sent successfully.');
            form.reset();
        }
    });

    // ⬆️ Scroll-To-Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #7e57c2;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        font-size: 20px;
        z-index: 1000;
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

