// JavaScript Utama untuk Dasbor Threads CMS
// Menangani toggle sidebar dan fungsionalitas umum di semua halaman

document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');

    // Fungsi ini akan dipanggil setelah sidebar dimuat
    function initializeSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) {
            console.error("Sidebar element not found after loading.");
            return;
        }

        /* ======
        Toggle visibilitas sidebar
        ====== */
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        }

        /* ======
        Tutup sidebar
        ====== */
        function closeSidebar() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        /* ======
        Tangani perubahan ukuran jendela
        ====== */
        function handleResize() {
            if (window.innerWidth > 768) {
                closeSidebar();
            }
        }

        // Event Listener
        if (hamburger) hamburger.addEventListener('click', toggleSidebar);
        if (overlay) overlay.addEventListener('click', closeSidebar);
        window.addEventListener('resize', handleResize);

        // Tutup sidebar saat mengklik tautan nav (seluler)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeSidebar();
                }
            });
        });

        /* ======
        Pintasan keyboard
        ====== */
        document.addEventListener('keydown', (e) => {
            // ESC untuk menutup sidebar
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeSidebar();
            }

            // Ctrl/Cmd + K untuk toggle sidebar
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSidebar();
            }
        });

        /* ======
        Mencegah scroll body saat sidebar terbuka di seluler
        ====== */
        const bodyScrollObserver = new MutationObserver(() => {
            if (sidebar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        bodyScrollObserver.observe(sidebar, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // Gunakan MutationObserver untuk mendeteksi kapan sidebar ditambahkan ke DOM
    if (sidebarPlaceholder) {
        const observer = new MutationObserver((mutationsList, obs) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const sidebarEl = document.getElementById('sidebar');
                    if (sidebarEl) {
                        initializeSidebar();
                        obs.disconnect(); // Berhenti mengamati setelah sidebar ditemukan
                        return;
                    }
                }
            }
        });

        observer.observe(sidebarPlaceholder, {
            childList: true,
            subtree: true
        });
    }
});

/* ======
Gulir mulus ke atas saat navigasi
====== */
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

/* ======
Sistem notifikasi toast (opsional, dapat digunakan untuk pesan sukses/error)
====== */
window.showToast = function(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

/* ======
Tambahkan animasi CSS untuk toast
====== */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
        .toast {
            left: 1rem !important;
            right: 1rem !important;
            bottom: 1rem !important;
        }
    }
`;
document.head.appendChild(style);

/* ======
Inisialisasi halaman
====== */
console.log('🚀 Threads CMS Dashboard loaded successfully');

// Tambahkan efek transisi halaman
document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
}, 10);
