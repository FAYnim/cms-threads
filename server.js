// Import Express
const express = require('express');
const app = express();

// Tentukan port server
const PORT = 3000;

// Buat folder 'public' bisa diakses secara langsung oleh user
app.use(express.static('public'));

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
