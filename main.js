// Theme initialization
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = scrolled + "%";
});

// Copy Code Implementation
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const btn = e.target;
        const code = btn.closest('.code-block').querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
            const originalText = btn.innerText;
            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = originalText, 2000);
        });
    }
});

// Sidebar Search (Optional expansion)
const searchInput = document.getElementById('sidebar-search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('nav li').forEach(li => {
            li.style.display = li.innerText.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });
}
