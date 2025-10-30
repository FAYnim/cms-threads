document.addEventListener('DOMContentLoaded', () => {
    const apiKeyInput = document.getElementById('apiKey');
    const toggleApiKeyBtn = document.getElementById('toggleApiKey');
    const settingsForm = document.getElementById('settingsForm');

    // Pastikan elemen ada sebelum menambahkan event listener
    if (apiKeyInput && toggleApiKeyBtn) {
        toggleApiKeyBtn.addEventListener('click', () => {
            const isPassword = apiKeyInput.type === 'password';
            apiKeyInput.type = isPassword ? 'text' : 'password';
            toggleApiKeyBtn.innerHTML = isPassword ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
        });
    }

    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const apiKey = apiKeyInput.value;
            if (!apiKey) {
                alert('API Key tidak boleh kosong!');
                return;
            }
            // window.showToast() berasal dari main.js
            window.showToast('✅ API Key berhasil disimpan!');
        });
    }
});