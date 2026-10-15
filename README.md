# METEORA Website v2

Website prototipe METEORA — Portable AIoT Weather Classification System. Project ini memuat landing page, login demo, dashboard dengan animasi, peta citra satelit, live chat AI melalui server API, halaman manajemen staf, pengaturan mode terang/gelap, grafik, histori simulasi, dan ekspor CSV.

## Menjalankan di Windows

Buka terminal pada folder yang berisi `package.json`:

```powershell
npm install
npm run dev
```

Buka `http://localhost:3000`.

Jika Node.js berada di `D:\node js` dan belum dikenali PowerShell:

```powershell
$env:Path = "D:\node js;" + $env:Path
node -v
npm -v
npm install
npm run dev
```

## Halaman

- `/` — landing page
- `/login` — login demo
- `/dashboard` — dashboard, grafik, peta satelit, histori, ekspor CSV, dan chat AI
- `/dashboard/users` — kelola staf demo
- `/dashboard/settings` — profil tampilan, notifikasi demo, preferensi, mode terang/gelap
- `/api/chat` — server API untuk menghubungkan chat ke Groq API

## Chat AI sungguhan

Chat mengirim permintaan ke `/api/chat`, lalu server menghubungi Groq Chat Completions API. Agar AI benar-benar menjawab, konfigurasi secret API key yang valid:

1. Salin `.env.example` menjadi `.env.local` untuk pengembangan lokal.
2. Isi `GROQ_API_KEY` dengan API key milik Anda dan, jika perlu, ubah `OPENAI_MODEL` ke model yang tersedia pada akun Anda.
3. Restart server development.
4. Untuk Vercel, masukkan `GROQ_API_KEY` dan `OPENAI_MODEL` melalui Project Settings → Environment Variables, lalu lakukan redeploy.

Jangan commit `.env.local` atau menaruh API key pada variabel `NEXT_PUBLIC_*`. Penggunaan API dapat menimbulkan biaya sesuai akun penyedia. Tanpa key valid, chat akan menampilkan pesan konfigurasi dan bukan berpura-pura menjawab dengan AI.

## Peta satelit

Komponen peta memakai citra Esri World Imagery dan menyertakan atribusi sumber. Peta memerlukan internet; ketentuan penggunaan, ketersediaan tile, dan kebijakan penyedia harus diperiksa untuk deployment publik/produksi. Titik lokasi pada prototipe masih koordinat contoh Purwokerto, bukan pembacaan GPS perangkat.

## Status fitur dan batasan

- Animasi dashboard, grafik, layout, kontrol tema: frontend tersedia.
- Kelola pengguna: CRUD demo tersimpan di `localStorage` browser. Belum menjadi manajemen akun server dan belum mengubah hak akses autentikasi.
- Pengaturan: preferensi demo disimpan secara lokal.
- Chat AI: integrasi API server tersedia; perlu `GROQ_API_KEY` valid, akses model, internet, dan kuota agar bisa digunakan sungguhan.
- Sensor, GPS, modem LTE, backend produksi, database, dan model cuaca terlatih belum terintegrasi.
- Data sensor, klasifikasi, histori, dan prediksi dashboard masih simulasi. Jangan gunakan untuk keputusan cuaca nyata.
- Login saat ini masih autentikasi demo frontend berbasis `sessionStorage`; bukan keamanan produksi. Implementasikan auth server/provider dan role-based access sebelum dipakai publik.

## Teknologi

Next.js 14 App Router, TypeScript, Tailwind CSS v3, Recharts, React Leaflet, Leaflet, Lucide React.


## Groq AI chat
1. Copy `.env.example` menjadi `.env.local`.
2. Buat API key BARU di https://console.groq.com/keys lalu isi `GROQ_API_KEY`.
3. Restart `npm run dev`. Jangan commit `.env.local`.

## Batas prototipe
Pendaftaran, sesi login, daftar pengguna, dan pengaturan saat ini berbasis browser/localStorage, bukan autentikasi atau database produksi. Sensor, koordinat peta, cakupan lingkaran, dan histori merupakan data dummy. Lingkaran peta hanya visualisasi area, bukan hasil pengukuran jangkauan radio. Ilustrasi perangkat 3D adalah CSS konseptual, bukan model CAD.
