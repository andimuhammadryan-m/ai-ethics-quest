# Panduan Pemula — Update AI Ethics Quest dengan Animasi Duo

Panduan ini dibuat untuk kamu yang **sudah mengunggah versi pertama** AI Ethics Quest ke GitHub. Kamu tidak perlu membuat repository atau link website yang baru.

## A. Apa yang berubah?

Ada **empat file lama yang diganti**:

1. `index.html` — menampilkan ikon Duo di header, memasang filter ilustrasi, dan mengganti dekorasi sidebar.
2. `styles.css` — menambah animasi Duo, ukuran karakter, tampilan mobile, dan kartu respons.
3. `app.js` — menampilkan karakter pada halaman awal, soal, feedback, serta hasil akhir.
4. `README.md` — dokumentasi dan petunjuk yang diperbarui.

Ada **satu folder baru yang perlu ditambahkan**:

`assets/` berisi gambar berikut:

- `duo-welcome.png` — karakter awal/penyambut.
- `duo-cheering.png` — karakter bersorak untuk jawaban bagus dan hasil tinggi.
- `duo-closeup.png` — ikon dan ekspresi saat berpikir/mengulang.
- `duolingo-green-logo.png` — referensi brand kecil pada halaman awal.
- `duolingo-white-logo.png` — pilihan logo alternatif.
- `duolingo-cheering-logo.png` — pilihan komposisi karakter dan logo alternatif.

File `PANDUAN_UPDATE_GITHUB.md` ini juga baru, tetapi sifatnya dokumentasi; tidak memengaruhi website.

## B. Langkah-langkah mengupdate repository yang SUDAH ada

**1. Download ZIP versi 2** dari ChatGPT, lalu ekstrak.

- Di Windows: klik kanan file ZIP → **Extract All** → **Extract**.
- Buka folder hasil ekstraksi.
- Pastikan kamu melihat `index.html`, `styles.css`, `app.js`, `README.md`, `PANDUAN_UPDATE_GITHUB.md`, dan folder `assets`.
- Jangan mengupload file `.zip` mentah ke GitHub.

**2. Buka GitHub:** masuk ke <https://github.com> dan login.

**3. Masuk ke repository lama**, misalnya `ai-ethics-quest`.

- Kamu harus berada pada halaman **Code** yang menampilkan `index.html`.
- Jangan masuk ke folder lain. Pastikan kamu sedang melihat bagian paling atas atau **root** repository.

**4. Klik `Add file` → `Upload files`.**

**5. Buka folder hasil ekstraksi di Windows File Explorer.**

- Pilih kelima file (`index.html`, `styles.css`, `app.js`, `README.md`, `PANDUAN_UPDATE_GITHUB.md`) dan folder `assets`.
- Tarik semuanya ke area upload GitHub di browser. Chrome atau Edge mendukung drag-and-drop folder pada halaman upload GitHub.
- Tunggu sampai semua file muncul di daftar upload.
- GitHub akan memperbarui empat file lama yang namanya sama dan menambahkan berkas baru.

**6. Scroll ke bawah halaman GitHub.**

- Pada bagian pesan perubahan, tulis: `Add animated Duo mascot and new visual assets`.
- Klik **Commit changes**. Jika antarmuka menampilkan **Propose changes**, ikuti alur konfirmasi yang ditampilkan GitHub.

**7. Cek hasil upload.**

Kembali ke tab **Code**. Struktur yang benar:

```text
ai-ethics-quest/                  <-- ROOT REPOSITORY
├── index.html
├── styles.css
├── app.js
├── README.md
├── PANDUAN_UPDATE_GITHUB.md
└── assets/
    ├── duo-welcome.png
    ├── duo-cheering.png
    ├── duo-closeup.png
    ├── duolingo-green-logo.png
    ├── duolingo-white-logo.png
    └── duolingo-cheering-logo.png
```

PENTING: Jangan sampai menjadi `ai-ethics-quest/ai-ethics-challenge/index.html`. Jika ada folder tambahan `ai-ethics-challenge` di tengah, GitHub Pages mungkin menampilkan error 404 atau website versi lama.

**8. Buka kembali link website yang sama**, misalnya:

`https://USERNAME.github.io/ai-ethics-quest/`

Ganti `USERNAME` dengan username GitHub kamu. Link tidak berubah meskipun file diupdate.

- GitHub Pages biasanya memperbarui website setelah commit dan proses deploy selesai.
- Jika masih melihat desain lama, tunggu sampai proses deploy selesai lalu tekan **Ctrl + F5** pada halaman website.
- Coba buka halaman dalam jendela Incognito untuk memastikan file baru sudah tampil.

## C. Jika ini justru upload PERTAMA kamu

1. Buat akun di <https://github.com>.
2. Klik **+** → **New repository**.
3. Beri nama `ai-ethics-quest`, pilih **Public**, lalu klik **Create repository**.
4. Upload seluruh isi ZIP **yang sudah diekstrak**: kelima file dan folder `assets`, langsung ke root repository.
5. Klik **Commit changes**.
6. Klik **Settings** → **Pages**.
7. Atur **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, lalu **Save**.
8. Tunggu sampai halaman **Settings → Pages** memberikan tautan website.

## D. Cara menguji game

1. Pastikan logo wajah Duo terlihat di header dan karakter menyapa di halaman awal.
2. Tekan **Start your quest**.
3. Jawab satu soal dengan pilihan bertanggung jawab → lihat animasi Duo bersorak dan XP.
4. Ulangi game dan coba pilihan berisiko → lihat ekspresi dan feedback yang berbeda.
5. Selesaikan semua level sampai halaman hasil akhir.
6. Buka lewat smartphone dan uji semua tombol.

**Jika gambar tidak muncul:** cek tab `assets` di GitHub. Nama file harus sama persis, termasuk huruf kecil, tanda hubung, dan ekstensi `.png`. Link gambar contoh: `https://USERNAME.github.io/ai-ethics-quest/assets/duo-welcome.png`.

## E. Catatan penggunaan logo

Ini adalah **prototype independen untuk case competition**, bukan produk resmi, kerja sama, atau dukungan dari Duolingo. Aset karakter/logo adalah milik pemegang merek. Gunakan pemberitahuan tidak resmi yang sudah disertakan di website, dan periksa [pedoman brand Duolingo](https://design.duolingo.com/identity/logos) sebelum membagikan atau menggunakan asetnya secara publik.
