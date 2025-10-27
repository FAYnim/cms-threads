# 📱 Threads CMS Dashboard

Dashboard CMS sederhana untuk manajemen konten Threads dengan tema gelap, modern, dan responsive (mobile-first).

## 📁 Struktur File

```
threads-cms/
├── index.html              # Halaman Dashboard (statistik & konten terbaru)
├── content-list.html       # Halaman List Konten (CRUD)
├── content-editor.html     # Halaman Editor Konten (Form)
├── styles/
│   └── global.css          # Style global untuk semua halaman
├── scripts/
│   └── main.js             # JavaScript utama (sidebar, navigation)
└── README.md               # Dokumentasi project
```

## ✨ Fitur

### 1. Dashboard (`index.html`)
- ✅ Statistik konten yang dipublikasi (24 konten)
- ✅ Statistik konten dalam draft (8 konten)
- ✅ Daftar konten terbaru
- ✅ Card dengan icon dan perubahan persentase

### 2. List Konten (`content-list.html`)
- ✅ Daftar lengkap semua konten
- ✅ Filter berdasarkan status (All, Published, Draft)
- ✅ Search box untuk mencari konten
- ✅ Badge status (Published/Draft)
- ✅ Metadata (tanggal, jumlah views)
- ✅ Tombol Edit & Delete yang fungsional
- ✅ Konfirmasi sebelum delete
- ✅ Animasi smooth saat delete

### 3. Editor Konten (`content-editor.html`)
- ✅ Form lengkap untuk membuat/edit konten
- ✅ Input: Judul (max 100 karakter)
- ✅ Textarea: Konten (max 500 karakter)
- ✅ Input: Tags (pisah dengan koma)
- ✅ Select: Status publikasi (Draft/Published)
- ✅ Toggle: Izinkan komentar
- ✅ Character counter dengan warning
- ✅ Preview mode
- ✅ Auto-update preview
- ✅ Validasi form
- ✅ Konfirmasi sebelum keluar

### 4. Sidebar Navigation
- ✅ Logo dengan gradient
- ✅ 3 Menu navigasi (Dashboard, Konten, Buat Konten)
- ✅ Active state pada menu
- ✅ Hamburger menu (mobile)
- ✅ Sidebar slide animation
- ✅ Overlay untuk menutup sidebar
- ✅ Auto-close setelah navigasi (mobile)

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` (Hitam gelap)
- **Card/Panel**: `#18181b` (Abu gelap)
- **Border**: `#27272a`, `#3f3f46`
- **Text Primary**: `#e4e4e7`
- **Text Secondary**: `#a1a1aa`, `#71717a`
- **Primary Purple**: `#8b5cf6`
- **Success Green**: `#10b981`
- **Warning Yellow**: `#fbbf24`
- **Danger Red**: `#ef4444`

### Typography
- **Font**: System font stack (SF Pro, Segoe UI, Roboto)
- **Title**: `2rem` (32px), Bold
- **Subtitle**: `0.875rem` (14px), Regular
- **Body**: `0.875rem` (14px), Regular

### Spacing
- **Padding Card**: `1.5rem` (24px)
- **Gap Grid**: `1.5rem` (24px)
- **Border Radius**: `8px`, `12px`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Sidebar visible)
- **Mobile**: ≤ 768px (Sidebar hidden, toggle dengan hamburger)

## 🚀 Cara Menggunakan

1. **Download semua file** sesuai struktur folder di atas
2. **Buka `index.html`** di browser
3. **Navigasi** menggunakan sidebar atau hamburger menu (mobile)

### File CSS
Simpan `global.css` di folder `styles/`:
- Path: `styles/global.css`

### File JavaScript
Simpan `main.js` di folder `scripts/`:
- Path: `scripts/main.js`

## 🔧 Fungsi JavaScript

### `main.js` - JavaScript Global
- Toggle sidebar (hamburger menu)
- Close sidebar (overlay click)
- Handle window resize
- Set active navigation
- Keyboard shortcuts (ESC, Ctrl+K)
- Toast notification system
- Page transition effect

### JavaScript Internal per Halaman

**content-list.html**:
- Filter konten (All/Published/Draft)
- Search konten
- Delete konten dengan konfirmasi
- Edit redirect ke editor

**content-editor.html**:
- Character counter dengan warning
- Preview mode toggle
- Auto-update preview
- Form validation
- Save draft
- Publish konten
- Konfirmasi sebelum keluar

## 🎯 Fitur Interaktif

### Sidebar
- Click hamburger → Toggle sidebar
- Click overlay → Close sidebar
- Click nav link → Navigate & close (mobile)
- Press ESC → Close sidebar
- Press Ctrl+K → Toggle sidebar

### Content List
- Click filter button → Filter konten
- Type in search → Search konten
- Click edit button → Navigate to editor
- Click delete button → Show confirmation → Delete

### Content Editor
- Type in inputs → Update character count
- Click preview → Show/hide preview
- Type in inputs → Auto-update preview
- Click save draft → Save as draft
- Click publish → Show confirmation → Publish
- Click cancel → Show confirmation (if changed)

## 🎨 Customization

### Mengubah Warna Primary
Edit di `global.css`:
```css
/* Ganti #8b5cf6 dengan warna pilihan Anda */
.btn-primary { background: #8b5cf6; }
.nav-link.active { background: #8b5cf6; }
```

### Mengubah Logo
Edit di HTML (semua file):
```html
<div class="logo-icon">📱</div> <!-- Ganti emoji -->
<span>Threads CMS</span> <!-- Ganti text -->
```

### Menambah Menu Sidebar
Tambahkan di HTML (semua file):
```html
<li class="nav-item">
    <a href="page.html" class="nav-link">
        <span class="nav-icon">🔥</span>
        <span>Menu Baru</span>
    </a>
</li>
```

## 📝 Catatan Pengembangan

### Untuk Integrasi Backend
1. Ganti `alert()` dengan API calls
2. Simpan data ke database
3. Load data dari API
4. Tambahkan authentication
5. Tambahkan pagination
6. Tambahkan image upload

### Untuk Production
1. Minify CSS & JavaScript
2. Optimize images
3. Add loading states
4. Add error handling
5. Add form validation yang lebih robust
6. Add SEO meta tags

## 🐛 Known Issues

- Preview tidak menyimpan state setelah refresh (by design)
- Delete hanya menghapus dari DOM (perlu backend)
- Form tidak submit ke server (perlu backend API)

## 📄 License

Free to use untuk project personal dan komersial.

## 👨‍💻 Support

Jika ada pertanyaan atau butuh bantuan, silakan buka issue atau contact developer.

---

**Built with ❤️ for Content Creators**
