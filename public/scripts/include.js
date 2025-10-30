document.addEventListener('DOMContentLoaded', function() {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');

    if (sidebarPlaceholder) {
        fetch('../sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                sidebarPlaceholder.innerHTML = data;
                // After sidebar is loaded, set the active navigation link
                setActiveNav();
            })
            .catch(error => {
                console.error('Error fetching sidebar:', error);
                sidebarPlaceholder.innerHTML = '<p style="color: red; padding: 1rem;">Gagal memuat sidebar.</p>';
            });
    }

    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.sidebar .nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
});