# Panduan Update AI Ethics Quest versi 3

Panduan ini untuk kamu yang **sudah punya website AI Ethics Quest di GitHub Pages**. Kamu tidak perlu membuat repository baru. Link website juga tetap sama.

## 1. Download dan ekstrak file

1. Download `ai-ethics-quest-v3-clean-ui.zip` dari ChatGPT.
2. Klik kanan ZIP di laptop Windows, pilih **Extract All**, lalu **Extract**.
3. Buka folder hasil ekstraksi. Kamu akan melihat `index.html`, `styles.css`, `app.js`, dan folder `assets`.
4. **Jangan upload ZIP mentah** ke GitHub. Yang diupload adalah file di dalamnya.

## 2. Upload dua gambar transparan ke folder `assets`

Langkah ini tidak perlu upload folder sekaligus.

1. Login di [GitHub](https://github.com).
2. Buka repository yang berisi website kamu. Contohnya `ai-ethics-quest`.
3. Klik folder **assets** yang sudah ada di repository.
4. Klik **Add file → Upload files**.
5. Di File Explorer, buka folder hasil ekstrak ZIP, lalu masuk ke folder **assets**.
6. Pilih **dua file ini saja** dengan menahan tombol `Ctrl` saat mengklik nama file:
   - `duo-welcome-clean.png`
   - `duo-cheering-clean.png`
7. Klik **Open**, tunggu kedua file muncul di halaman GitHub.
8. Klik **Commit changes** untuk menyimpan.

**Cek:** GitHub harus menampilkan `assets/duo-welcome-clean.png` dan `assets/duo-cheering-clean.png`. File PNG lama **tidak perlu dihapus**.

## 3. Ganti kode website

Ada **tiga file wajib** yang diperbarui: `index.html`, `styles.css`, dan `app.js`.

Cara paling mudah jika tidak bisa upload folder:

1. Kembali ke halaman awal repository (**Code**).
2. Klik **Add file → Upload files**.
3. Dari folder hasil ekstrak di laptop, pilih tiga file berikut sekaligus:
   - `index.html`
   - `styles.css`
   - `app.js`
4. Tarik tiga file tersebut ke kotak upload GitHub atau gunakan **choose your files**.
5. Periksa nama file dan klik **Commit changes**.

Jika GitHub tidak mau mengganti file lama melalui Upload files, lakukan satu per satu:

1. Klik `index.html` di GitHub, kemudian klik ikon **pensil** (Edit this file).
2. Di laptop, buka `index.html` baru dengan Notepad. Tekan `Ctrl + A` lalu `Ctrl + C` untuk menyalin seluruh kode.
3. Di editor GitHub, tekan `Ctrl + A`, kemudian `Ctrl + V` untuk mengganti seluruh kode lama.
4. Klik **Commit changes**.
5. Lakukan hal yang sama untuk `styles.css` dan `app.js`.

**Penting:** nama file harus sama persis. `index.html` harus berada di halaman utama repository, bukan di dalam `assets`.

## 4. Tunggu GitHub Pages memperbarui website

1. Buka tab **Actions** di repository untuk melihat proses deployment jika tersedia.
2. Setelah deployment selesai, buka lagi link website lama kamu.
3. Tekan `Ctrl + F5` di Chrome atau Edge supaya browser mengambil versi terbaru.
4. Jika masih terlihat versi lama, coba **Incognito**.

Sekarang Duo seharusnya tampak menyatu dengan latar hijau tanpa kotak putih. Di feedback, Duo tampil kecil di samping judul jawaban tanpa sudut hitam.

## 5. Coba seluruh game

- Halaman awal: klik **Let's play**.
- Soal: pilih salah satu jawaban, lalu lihat penjelasan dan XP.
- Pilih **Continue** untuk melanjutkan cerita.
- Selesaikan tiga topik sampai halaman skor.
- Coba juga opsi **Campus** dan **Workplace**, lalu cek tampilan di HP.

## Kalau gambar belum tampil

- Pastikan dua file baru ada di folder `assets` GitHub.
- Periksa ejaan nama file, termasuk `-clean.png`.
- Pastikan `app.js` dan `index.html` sudah diperbarui. Jika kode lama masih aktif, browser akan mengambil PNG lama.
- Periksa lagi website setelah deployment selesai dan tekan `Ctrl + F5`.

## Catatan

Ini prototype mahasiswa untuk case competition dan bukan produk resmi Duolingo. Materi game juga bukan sertifikasi kompetensi AI.
