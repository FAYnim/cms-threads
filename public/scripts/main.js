// Main JavaScript for Threads CMS Dashboard
// Handles sidebar toggle and common functionality across all pages

(function() {
    'use strict';

    // Elements
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');

    // Check if elements exist before adding event listeners
    if (!hamburger || !sidebar || !overlay) {
        console.warn('Some required elements are missing');
        return;
    }

    /**
     * Toggle sidebar visibility
     */
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close sidebar
     */
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Handle window resize
     */
    function handleResize() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    }

    // Event Listeners
    hamburger.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);
    window.addEventListener('resize', handleResize);

    // Close sidebar when clicking on nav links (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    /**
     * Smooth scroll to top when navigating
     */
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

    /**
     * Toast notification system (optional, can be used for success/error messages)
     */
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

    /**
     * Add CSS animations for toast
     */
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

    /**
     * Keyboard shortcuts
     */
    document.addEventListener('keydown', (e) => {
        // ESC to close sidebar
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }

        // Ctrl/Cmd + K to toggle sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSidebar();
        }
    });

    /**
     * Prevent body scroll when sidebar is open on mobile
     */
    const observer = new MutationObserver(() => {
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ['class']
    });

    /**
     * Initialize page
     */
    console.log('🚀 Threads CMS Dashboard loaded successfully');

    // Add page transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 10);

})();
