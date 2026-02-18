// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Form Handling (Mock)
function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = "TRANSMITTING...";
    btn.style.backgroundColor = "#ccc";

    setTimeout(() => {
        // Using a custom visual cue instead of alert
        const messageBox = document.createElement('div');
        messageBox.style.position = 'fixed';
        messageBox.style.top = '50%';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translate(-50%, -50%)';
        messageBox.style.background = '#fff';
        messageBox.style.border = '4px solid #000';
        messageBox.style.padding = '40px';
        messageBox.style.boxShadow = '10px 10px 0 #000';
        messageBox.style.zIndex = '9999';
        messageBox.style.textAlign = 'center';

        messageBox.innerHTML = `
                    <h2 style="font-family:'Syne'; font-size: 2rem; margin-bottom: 10px;">MESSAGE RECEIVED</h2>
                    <p style="font-family:'Space Grotesk'; margin-bottom: 20px;">I'll get back to you sooner or later.</p>
                    <button class="btn brutal-box" onclick="this.parentElement.remove()">CLOSE</button>
                `;

        document.body.appendChild(messageBox);

        // Reset form
        e.target.reset();
        btn.innerText = "MESSAGE SENT";
        btn.style.backgroundColor = "#00ff9d";
        btn.style.color = "black";

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; // revert to CSS
            btn.style.color = "";
        }, 3000);
    }, 1000);
}

// Add random slight rotation to project cards for messy feel
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        // Rotate between -1deg and 1deg
        const rotate = Math.random() * 2 - 1;
        card.style.transform = `rotate(${rotate}deg)`;
    });
});