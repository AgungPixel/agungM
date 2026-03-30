# Arsitektur & Komponen Project Portfolio

Dokumen ini memetakan struktur keseluruhan dari project SvelteKit & Tailwind CSS Anda. Karena editor Markdown Anda belum mendukung ekstensi *Mermaid* (kode yang sebelumnya Anda lihat sebagai `flowchart TB`), saya telah membuat versi teks struktur pohon (Tree Diagram) di bawah ini agar 100% terbaca dengan rapi di aplikasi apapun.

## 1. Struktur Pohon Halaman & Komponen (ASCII Diagram)

```text
SvelteKit Project (src/)
├── app.css (Global Styles & Konfigurasi Font 'Inter')
│
├── routes/ (Routing Utama)
│   ├── +layout.svelte (Root Wrapper & Header SEO Mendasar)
│   │   ├── Glow.svelte (Mouse Tracking Radial Background)
│   │   └── Starfield.svelte (Efek Bintang di Background)
│   │
│   ├── +page.svelte (Halaman Utama dengan Grid Split lg:flex)
│   │   ├── 📱 Kiri / lg:w-[48%] (Sticky Header / Identitas)
│   │   │   ├── navigation.svelte (Logic Auto-Scroll Observer)
│   │   │   └── socialMedia.svelte (Merender List Link Sosial)
│   │   │       ├── github.svelte (Icon Dinamis SVG)
│   │   │       ├── linkedin.svelte (Icon Dinamis SVG)
│   │   │       └── ... (codepen, whatsapp, instagram)
│   │   │
│   │   └── 📝 Kanan / lg:w-[52%] (Scrollable Content Section)
│   │       ├── Section: "Tentang"     --> Mengambil dari about.js
│   │       ├── Section: "Pengalaman"  --> Mengambil dari experiences.js
│   │       └── Section: "Project"     --> Mengambil dari projects.js
│   │           └── arrowIcons.svelte (Icon penanda link aktif)
│   │
│   └── showcase/ (Halaman Baru)
│       └── +page.svelte (Halaman Detail / Showcase)
│
└── lib/
    ├── components/ (Modul Reusable yang di-Import ke +page & +layout)
    │   ├── Glow.svelte, Starfield.svelte
    │   └── navigation.svelte, socialMedia.svelte
    │
    ├── data/ (Array JS untuk Data Statis agar Source Svelte Tetap Bersih)
    │   ├── site.config.js, about.js, experiences.js, projects.js
    │
    └── icons/ (Komponen SVG yang sudah dimodifikasi dengan Tailwind)
        ├── arrowIcons.svelte, github.svelte, dll.
```

## 2. Bedah Detail Arsitektur Teks

### Konfigurasi Global & Styling
* **`app.css` & `tailwind.config.js`**: TailWind dikonfigurasi tanpa ekstensi plugin yang ribet, hanya mengandalkan standar *utility class*. Font `Inter` ditegaskan sebagai standar (via properti `fontFamily` Svelte & `@font-face` di CSS). 
* **`+layout.svelte`**: Bertindak mirip seperti `<App />` di React. Ini tempat `Glow.svelte` dan `Starfield.svelte` menempel seumur hidup (*persistent*) sepanjang navigasi antar rute, yang juga berfungsi menyuntikkan _SEO Meta Tags_ (`<title>`, `og:image`, `url`).

### Halaman Utama (`routes/+page.svelte`) & Komposisi
Halaman Portofolio (`/`) menggunakan pendekatan **Split-View** responsif:
* **Pada Mobile / Tablet (Default)**: Area `Header` (nama Anda, bio) berada di atas secara vertikal, diikuti area `Content` di bawahnya.
* **Pada Desktop (Minimal Layar `lg:`)**: Kelas `lg:flex lg:justify-between lg:gap-4` dinyalakan.
  * **Kolom Kiri (`lg:w-[48%]`)**: Diberi utility `lg:sticky lg:top-0`—artinya profil, bio, sidebar *navigation*, dan *social links* akan terus menempel di layar tanpa ter-scroll.
  * **Kolom Kanan (`lg:w-[52%]`)**: Dibebaskan untuk dis-scroll ke bawah. Isi daripadanya ditarik menggunakan direktif `{#each}` dari sumber data lokal statis.

### Interaksi Cerdas & Modul Khusus
1. **`navigation.svelte`**: Menggunakan API Javascript **`IntersectionObserver`**. Saat bagian `scrollable` kanan turun ke tengah layar, script men-trigger class/state untuk menampilkan efek garis tebal aktif di navigasi kiri.
2. **`socialMedia.svelte`**: Merupakan *mapper* ikon yang hebat. Komponen `this` milik Svelte digunakan (`<svelte:component this={...}>`) untuk mengeksekusi icon sesuai data yang diterima tanpa menulis banyak code HTML yang panjang.
3. **`Glow.svelte`**: Menggunakan fungsi pintar **`requestAnimationFrame`** alih-alih merender perubahan tiap *mousemove* mentah, guna menghindari *layout lag/thrashing* saat pengguna meggeser kursor di-desktop.
