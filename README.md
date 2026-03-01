# HashMicro Technical Test

Proyek automated testing menggunakan Playwright untuk menguji alur e-commerce pada website SauceDemo.

## 📋 Deskripsi

Proyek ini berisi automated test cases yang menguji alur lengkap dari login hingga checkout pada website SauceDemo. Test ini dibuat sebagai bagian dari technical test untuk posisi QA Engineer di HashMicro.

## 🚀 Fitur

- **E2E Testing**: Menguji alur lengkap dari login hingga checkout
- **Multi-browser Support**: Test dapat dijalankan pada Chromium, Firefox, dan WebKit
- **HTML Report**: Generate laporan test dalam format HTML
- **Parallel Execution**: Test dapat dijalankan secara parallel untuk efisiensi waktu

## 📦 Prerequisites

Sebelum menjalankan project ini, pastikan Anda telah menginstall:

- **Node.js** (versi 14 atau lebih tinggi)
- **npm** (biasanya sudah termasuk dengan Node.js)

## 🔧 Installation

1. Clone repository ini atau extract file project
2. Install dependencies dengan menjalankan:

```bash
npm install
```

3. Install Playwright browsers (jika belum terinstall):

```bash
npx playwright install
```

## 🧪 Menjalankan Test

### Menjalankan semua test

```bash
npx playwright test
```

### Menjalankan test pada browser tertentu

```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit (Safari)
npx playwright test --project=webkit
```

### Menjalankan test dengan mode UI (interaktif)

```bash
npx playwright test --ui
```

### Menjalankan test dengan mode headed (menampilkan browser)

```bash
npx playwright test --headed
```

### Menjalankan test tertentu

```bash
npx playwright test tests/saucedemo.spec.js
```

## 📊 Melihat Test Report

Setelah test selesai dijalankan, Anda dapat melihat HTML report dengan:

```bash
npx playwright show-report
```

Report akan otomatis terbuka di browser default Anda.

## 📁 Struktur Project

```
HashMicro Technical Test/
├── tests/
│   └── saucedemo.spec.js    # Test file untuk SauceDemo
├── playwright.config.js      # Konfigurasi Playwright
├── package.json              # Dependencies dan project info
├── .gitignore               # Git ignore file
└── README.md                # Dokumentasi project
```

## 🧩 Test Cases

### SauceDemo - Login to Checkout Flow

Test ini menguji alur:

1. **Login**: Navigasi ke homepage dan login dengan kredensial valid
2. **Add to Cart**: Menambahkan produk pertama ke cart
3. **Cart Validation**: Memvalidasi bahwa cart badge menampilkan jumlah item yang benar
4. **Navigate to Cart**: Klik icon cart dan validasi redirect ke halaman cart
5. **Checkout**: Klik tombol checkout dan validasi redirect ke halaman checkout

## ⚙️ Konfigurasi

Konfigurasi Playwright dapat diubah di file `playwright.config.js`. Beberapa pengaturan utama:

- **testDir**: Direktori tempat test files berada (`./tests`)
- **fullyParallel**: Menjalankan test secara parallel
- **retries**: Jumlah retry jika test gagal (2 kali di CI, 0 kali di local)
- **reporter**: Format report yang digunakan (`html`)
- **projects**: Browser yang akan digunakan untuk testing

## 🔍 Debugging

### Debug mode

Jalankan test dalam debug mode:

```bash
npx playwright test --debug
```

### Trace viewer

Playwright otomatis mengumpulkan trace ketika test retry. Untuk melihat trace:

```bash
npx playwright show-trace trace.zip
```

## 📝 Catatan

- Test menggunakan website SauceDemo yang merupakan demo e-commerce
- Kredensial yang digunakan: `standard_user` / `secret_sauce`
- Test dijalankan pada 3 browser: Chromium, Firefox, dan WebKit
- Report HTML akan tersimpan di folder `playwright-report/`

## 🛠️ Dependencies

- `@playwright/test`: ^1.58.2 - Framework testing Playwright
- `@types/node`: ^25.3.3 - Type definitions untuk Node.js


**Note**: Pastikan koneksi internet stabil saat menjalankan test karena test mengakses website SauceDemo secara langsung.

