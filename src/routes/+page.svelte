<script>
  import Header from "$lib/components/header.svelte";
  import Starfield from "$lib/components/Starfield.svelte"; 
  import { onMount } from 'svelte';
  
  // Pastikan import ini benar (sesuai nama export di file masing-masing)
  import { initGlowEffect } from '$lib/utils/glowEffect.js';
  import { isIdle } from '$lib/stores/idle.js';

  let cleanupGlowEffect;

  onMount(() => {
    // --- 1. Setup Glow Effect (Dengan Pengecekan) ---
    // Cek apakah fungsi initGlowEffect ada sebelum dijalankan
    if (typeof initGlowEffect === 'function') {
        const effect = initGlowEffect();
        // Cek apakah effect mengembalikan object yang benar
        if (effect && effect.setupEffect) {
            effect.setupEffect();
            cleanupGlowEffect = effect.cleanupEffect;
        }
    } else {
        console.warn("Glow Effect tidak ditemukan atau gagal dimuat.");
    }

    // --- 2. Setup Idle Listener (Dengan Pengecekan) ---
    let cleanupIdle;
    if (isIdle && typeof isIdle.init === 'function') {
        cleanupIdle = isIdle.init();
    }

    // --- 3. Cleanup Gabungan ---
    return () => {
      // Hanya jalankan cleanup jika fungsinya ada (valid)
      if (typeof cleanupGlowEffect === 'function') cleanupGlowEffect();
      if (typeof cleanupIdle === 'function') cleanupIdle();
    };
  });
</script>

<a href="#content"
  class="absolute left-0 top-0 block rounded -translate-x-full font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Langsung
  Ke Content</a>
<div class="lg:flex lg:justify-between lg:gap-4">
  <div class="absolute inset-0 z-0 pointer-events-none">
    <Starfield />
  </div>
  <Header />
  <main id="content" class="pt-24 lg:w-[52%] lg:py-24 scroll-smooth">
    <section id="tentang" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Tentang Saya</h2>
      </div>
      <div>
        <!-- Tentang Saya -->
        <p class="mb-4">Halo, saya seorang pribadi dengan latar belakang di
          bidang marketing
          dan pengalaman kerja yang luas di berbagai sektor, termasuk operasional, pengiriman,
          serta
          layanan
          khusus di industri laundry dan outdoor. Lulusan Yayasan SMK Ekawijaya pada tahun 2015,
          saya
          sedang
          mengembangkan keahlian di bidang teknologi dan sangat antusias dalam belajar hal-hal
          baru,
          terutama
          di bidang pengembangan web dan aplikasi.</p>
        <p class="mb-4">Sekarang, saya sedang bekerja sebagai part-time di <a
            class="text-zinc-100 font-medium hover:text-lime-300" href="https://www.map.co.id/id/" target="_blank"
            rel="noreferrer noopener">Mitra
            Adiperkasa</a>, di
          bagian delivery dan
          staff. perusahaan ritel terkemuka di Indonesia yang mengelola berbagai merek
          internasional di bidang fashion, olahraga, makanan dan minuman, serta produk gaya hidup
          lainnya.</p>
        <p class="mb-4">Di pengalaman terakhir saya, saya bekerja sebagai content creator, sebagai
          inventory daily worker di lazada serta pernah bekerja sebagai
          operator di
          SPBU selama 3 tahun.</p>
        <p>Di waktu luang saya, saya biasa untuk bermain video
          <span class="group inline-flex cursor-default font-black tracking-wide text-zinc-600">
            <span class="transition-all duration-200 group-hover:text-red-500 group-hover:translate-y-1">G</span>
            <span
              class="transition-all duration-200 delay-75 group-hover:text-blue-500 group-hover:translate-y-1">a</span>
            <span
              class="transition-all duration-200 delay-100 group-hover:text-yellow-500 group-hover:translate-y-1">m</span>
            <span
              class="transition-all duration-200 delay-150 group-hover:text-green-500 group-hover:translate-y-1">e</span>
            <span
              class="transition-all duration-200 delay-200 group-hover:text-purple-500 group-hover:translate-y-1">s</span>
          </span>, menonton
          <span class="group relative inline-flex overflow-hidden font-medium text-zinc-100 cursor-default">
            <span class="translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
              Anime
            </span>

            <span
              class="absolute inset-0 translate-y-full text-lime-300 transition-transform duration-300 group-hover:translate-y-0">
              アニメ
            </span>
          </span>, <a href="https://www.imdb.com/user/ur69491471" target="_blank"
            rel="noreferrer noopener" class="group relative inline-flex overflow-hidden font-medium text-zinc-100">

            <span class="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Film <span class="font-normal text-zinc-400">dan</span> Tv-Series
            </span>

            <span
              class="absolute inset-0 flex items-center translate-y-full text-lime-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              IMDB Profile ↗
            </span>
          </a>
        </p>
      </div>
    </section>
    <section id="pengalaman" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Pengalaman</h2>
      </div>
      <div>
        <ol class="group-list">
          <li class="mb-10">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Tahun Bekerja -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label="Mar sampai Agustus 2024">2025 ─ 2026</header>
              <!-- Desc&Title -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-zinc-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300  group/link text-base"
                      href="https://www.map.co.id/id/" target="_blank" rel="noreferrer noopener"
                      aria-label="Website Mitra Adiperkasa ( new tab )">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Delivery · Domino's Pizza
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out
        group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out
        group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-3 text-sm leading-normal">Bertanggung jawab dalam melayani
                  pelanggan, menyiapkan pesanan, serta mendukung kelancaran operasional
                  harian di Domino’s Pizza.</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Cashier</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Makeline</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Janitor</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Delivery</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mb-10">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Tahun Bekerja -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label="Mar sampai Agustus 2024">Mar ─ Aug 2024</header>
              <!-- Desc&Title -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-zinc-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300  group/link text-base"
                      href="https://lessworry.id/" target="_blank" rel="noreferrer noopener"
                      aria-label="Website LessWorry ( new tab )">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Operator · Less Worry
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out
        group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out
        group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-3 text-sm leading-normal">Mengerjakan Spotting, mencuci,
                  mengeringkan, menyetrika, dan mengemas pakaian
                  dari
                  konsumen.</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Spotting</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Wash</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Dryer</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Iron/Fold</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Packing</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mb-10">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Tahun Bekerja -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label="Daily Worker Sampai 2024">2023 ─ 2024</header>
              <!-- Desc&Title -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-zinc-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300  group/link text-base"
                      href="https://iaj.co.id/" target="_blank" rel="noreferrer noopener"
                      aria-label="Website Internusa Abadi Jaya ( new tab )">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Inventory · Internusa
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out
        group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out
        group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-3 text-sm leading-normal">Mengatur item yang berada di gudang.
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Inventory Control</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Stock Opname</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      WMS Scanner</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Inbound</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Outbound</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Putaway</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Picking</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Accuracy Check</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mb-10">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Tahun Bekerja -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                2022 ─ 2023</header>
              <!-- Desc&Title -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-zinc-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300  group/link text-base"
                      href="https://www.wahana.com/" target="_blank" rel="noreferrer noopener"
                      aria-label="Website Wahana Express ( new tab )">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Kurir · Wahana Prestasi Logistik
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out
        group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out
        group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-3 text-sm leading-normal">Mengirim paket dari gudang
                  penyimpanan ke rumah pelanggan yang di tuju.</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Pickup</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Drop-off</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Routing</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      COD Handling</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Customer Service</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Parcel Scanning</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mb-10">
            <div
              class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Tahun Bekerja -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                JAN ─ MAR 2021</header>
              <!-- Desc&Title -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-zinc-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300  group/link text-base"
                      href="https://id.jobstreet.com/id/companies/global-packaging-system-168558673626327"
                      target="_blank" rel="noreferrer noopener"
                      aria-label="PT. Global Packaging Stystem Jobstreet profile ( new tab )">
                      <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Helper · Global Packaging System
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out
        group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out
        group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"></path>
                          </svg>

                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-3 text-sm leading-normal">Membantu membentuk dan membersihkan
                  kardus/karton yang akan di distribusikan.
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Loading</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Unloading</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Sorting</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Packing</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Palletizing</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Moving Goods</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                      Basic QC</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
        <!-- File Resume Lengkap -->
        <div class="mt-12">
          <a href="docs/Resume.pdf" target="_blank"
            class="group/link relative inline-flex items-center leading-tight text-zinc-200 font-semibold text-base transition-all duration-300 ease-in-out hover:text-lime-400 focus-visible:text-lime-400">
            <span class="relative z-10 flex items-center">
              Lihat Résumé Selengkapnya
              <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                  <path fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                  <path fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
    <section id="project" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <!-- Title Section -->
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Project</h2>
      </div>
      <!-- Main Section -->
      <div>
        <ul class="group/list">
          <!-- Resume Project -->
          <li class="mb-12">
            <div
              class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <!-- Hover Effect Project -->
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Picture Project -->
              <img
                class="aspect-video object-cover rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="images/Resume-thumbnail.png" alt="Resume Agung Marwanto" loading="lazy" width="200" height="48"
                decoding="async">
              <!-- Desc&Title Project -->
              <div class="z-10 sm:col-span-6">
                <h3>
                  <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300 group/link text-base"
                    href="/">
                    <span
                      class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>My Resume
                      <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                          <path fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                          <path fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>
                <p>
                  A Resume for a Web Development Project: Progress in Motion!
                </p>
              </div>
            </div>
          </li>
          <!-- Garlid Project -->
          <li class="mb-12">
            <div
              class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <!-- Hover Effect Project -->
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg">
              </div>
              <!-- Picture Project -->
              <img
                class="aspect-video object-cover rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="images/Garlid-thumbnail.png" alt="Website Garlid Adventure" loading="lazy" width="200" height="48"
                decoding="async">
              <!-- Desc&Title Project -->
              <div class="z-10 sm:col-span-6">
                <h3>
                  <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300 group/link text-base"
                    href="https://garlidadventure.com/" target="_blank">
                    <span
                      class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>Garlid Adventure
                      <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                          <path fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                          <path fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>
                <p>
                  A WordPress Landing Page with WooCommerce for Rental, Laundry, and Repair Services!
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                  <li class="mr-1.5 mt-2">
                    <div
                      class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300 ">
                      WooCommerce
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer class="max-w-lg pb-16 text-sm text-zinc-500 sm:pb-0">
      <!-- Copyright!! -->
      <p class="font-medium text-center">Made with ❤️ and ☕ by <a href="/" class="text-zinc-200 hover:text-lime-300">Agung Marwanto</a></p>
    </footer>
  </main>
</div>