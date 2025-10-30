// Character counter
const titleInput = document.getElementById('contentTitle');
const bodyInput = document.getElementById('contentBody');
const titleCount = document.getElementById('titleCount');
const bodyCount = document.getElementById('bodyCount');

function updateCharCount(input, counter, max) {
    const length = input.value.length;
    counter.textContent = `${length} / ${max} karakter`;
    
    // Add warning/danger classes
    counter.classList.remove('warning', 'danger');
    if (length > max * 0.9) { // More common to show danger at 90-100%
        counter.classList.add('danger');
    } else if (length > max * 0.75) { // Warning from 75%
        counter.classList.add('warning');
    }
}

if (titleInput && bodyInput) {
    titleInput.addEventListener('input', () => updateCharCount(titleInput, titleCount, 100));
    bodyInput.addEventListener('input', () => updateCharCount(bodyInput, bodyCount, 500));
}

// Preview functionality
const previewBtn = document.getElementById('previewBtn');
const previewSection = document.getElementById('previewSection');
const previewTitle = document.getElementById('previewTitle');
const previewBody = document.getElementById('previewBody');
const previewTags = document.getElementById('previewTags');
const contentTagsInput = document.getElementById('contentTags');

function updatePreview() {
    if (!previewSection) return;

    const title = titleInput.value || 'Judul akan muncul di sini';
    const body = bodyInput.value || 'Konten akan muncul di sini...';
    const tags = contentTagsInput.value;

    previewTitle.textContent = title;
    previewBody.textContent = body;

    // Handle tags
    previewTags.innerHTML = '';
    if (tags.trim()) {
        const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        tagArray.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'preview-tag';
            tagEl.innerHTML = `<i class="fa-solid fa-hashtag"></i> ${tag}`; // Added space for readability
            previewTags.appendChild(tagEl);
        });
    }
}

if (previewBtn) {
    previewBtn.addEventListener('click', () => {
        const isHidden = previewSection.style.display === 'none' || previewSection.style.display === '';
        if (isHidden) {
            updatePreview();
            previewSection.style.display = 'block';
            previewBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Edit';
        } else {
            previewSection.style.display = 'none';
            previewBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Preview';
        }
    });
}

// Auto-update preview on input
if (titleInput && bodyInput && contentTagsInput) {
    titleInput.addEventListener('input', updatePreview);
    bodyInput.addEventListener('input', updatePreview);
    contentTagsInput.addEventListener('input', updatePreview);
}

// Save draft
const saveDraftBtn = document.getElementById('saveDraftBtn');
if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
        if (!titleInput.value || !bodyInput.value) {
            alert('Judul dan konten harus diisi!');
            return;
        }
        alert('✅ Draft berhasil disimpan!');
    });
}

// Form submission
const contentForm = document.getElementById('contentForm');
if (contentForm) {
    contentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = titleInput.value;
        const body = bodyInput.value;
        const status = document.getElementById('contentStatus').value;

        if (!title || !body) {
            alert('❌ Judul dan konten harus diisi!');
            return;
        }

        if (status === 'published') {
            if (confirm('🚀 Publikasikan konten ini sekarang?')) {
                alert('✅ Konten berhasil dipublikasikan!');
                setTimeout(() => {
                    window.location.href = 'content-list.html';
                }, 1000);
            }
        } else {
            alert('✅ Draft berhasil disimpan!');
            setTimeout(() => {
                window.location.href = 'content-list.html';
            }, 1000);
        }
    });
}

// Cancel button confirmation
const cancelButton = document.querySelector('.form-actions a.btn-secondary');
if (cancelButton) {
    cancelButton.addEventListener('click', (e) => {
        if (titleInput.value || bodyInput.value) {
            if (!confirm('Ada perubahan yang belum disimpan. Yakin ingin keluar?')) {
                e.preventDefault();
            }
        }
    });
}

// Editor mode switcher
const standardEditorCard = document.getElementById('standardEditorCard');
const remakeEditorCard = document.getElementById('remakeEditorCard');
const remakeContentForm = document.getElementById('remakeContentForm');

if (standardEditorCard && remakeEditorCard && contentForm && remakeContentForm) {
    standardEditorCard.addEventListener('click', () => {
        standardEditorCard.classList.add('active');
        remakeEditorCard.classList.remove('active');

        contentForm.style.display = 'block';
        remakeContentForm.style.display = 'none';
        if (previewBtn) previewBtn.style.display = 'inline-flex'; // Show preview button
    });

    remakeEditorCard.addEventListener('click', () => {
        remakeEditorCard.classList.add('active');
        standardEditorCard.classList.remove('active');

        remakeContentForm.style.display = 'block';
        contentForm.style.display = 'none';
        if (previewBtn) previewBtn.style.display = 'none'; // Hide preview button
        if (previewSection.style.display !== 'none') {
            previewSection.style.display = 'none';
        }
    });
}