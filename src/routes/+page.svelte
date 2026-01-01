<script>
  import Header from "$lib/components/header.svelte";
  import Starfield from "$lib/components/Starfield.svelte"; 
  import { onMount } from 'svelte';
  
  // Pastikan import ini benar (sesuai nama export di file masing-masing)
  import { initGlowEffect } from '$lib/utils/glowEffect.js';
  import { isIdle } from '$lib/stores/idle.js';
  // Import data yang baru dibuat
  import { aboutData } from '$lib/data/about.js';
  import { experiences } from '$lib/data/experiences';
  import { projects } from '$lib/data/projects';
  import { siteConfig } from '$lib/data/site.config'; // Kalau mau pakai link resume dari config

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

<a href="#content" class="absolute left-0 top-0 block rounded -translate-x-full bg-gradient-to-br from bg-lime-400 via-lime-500 to-lime-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Langsung Ke Content</a>
<div class="lg:flex lg:justify-between lg:gap-4">
  <div class="absolute inset-0 z-0 pointer-events-none">
    <Starfield />
  </div>
  <Header />
  <main id="content" class="pt-24 lg:w-[52%] lg:py-24">
    <section id="tentang" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Tentang Saya</h2>
      </div>
      <div>
        {#each aboutData.paragraphs as paragraph}
          <p class="mb-4 leading-relaxed text-zinc-400">
            {@html paragraph}
          </p>
        {/each}
        <p class="leading-relaxed text-zinc-400">
          Di waktu luang saya, saya biasa untuk bermain video
      
          <span class="group inline-flex cursor-default font-black tracking-wide text-zinc-600">
            <span class="transition-all duration-200 group-hover:text-red-500 group-hover:translate-y-1">G</span>
            <span class="transition-all duration-200 delay-75 group-hover:text-blue-500 group-hover:translate-y-1">a</span>
            <span class="transition-all duration-200 delay-100 group-hover:text-yellow-500 group-hover:translate-y-1">m</span>
            <span class="transition-all duration-200 delay-150 group-hover:text-green-500 group-hover:translate-y-1">e</span>
            <span class="transition-all duration-200 delay-200 group-hover:text-purple-500 group-hover:translate-y-1">s</span>
          </span>, 
      
          menonton
          <span class="group relative inline-flex overflow-hidden font-medium text-zinc-100 cursor-default">
            <span class="translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
              Anime
            </span>
            <span class="absolute inset-0 translate-y-full text-lime-300 transition-transform duration-300 group-hover:translate-y-0">
              アニメ
            </span>
          </span>, 

          <a href={aboutData.links.imdb} target="_blank" rel="noreferrer noopener" class="group relative inline-flex overflow-hidden font-medium text-zinc-100">
            <span class="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Film <span class="font-normal text-zinc-400">dan</span> Tv-Series
            </span>
            <span class="absolute inset-0 flex items-center translate-y-full text-lime-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
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
          {#each experiences as job}
            <li class="mb-10">
              <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg"></div>
                <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2" aria-label={job.year}>
                  {job.year}
                </header>
                <div class="z-10 sm:col-span-6">
                  <h3 class="font-medium leading-snug text-zinc-200">
                    <div>
                      <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300 group/link text-base"
                        href={job.url} target="_blank" rel="noreferrer noopener" aria-label="{job.company} (new tab)">
                    
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    
                        <span>
                          {job.role} · {job.company}
                      
                          <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>

                      </a>
                    </div>
                  </h3>
                  <p class="mt-3 text-sm leading-normal">
                    {job.description}
                  </p>
                  <ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
                    {#each job.skills as skill}
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300">
                          {skill}
                        </div>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </li>
          {/each}
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
          {#each projects as project}
            <li class="mb-12">
              <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg"></div>

                <img
                  class="aspect-video object-cover rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy" 
                  width="200" 
                  height="48"
                      decoding="async">

                <div class="z-10 sm:col-span-6">
                  <h3>
                    <a class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300 group/link text-base"
                      href={project.url} target={project.url.startsWith('http') ? '_blank' : '_self'}> 
                      <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  
                      <span>
                        {project.title}
                        <span class="relative inline-block h-4 w-4 overflow-hidden ml-1 align-text-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/link:translate-x-full">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                      </span>

                    </a>
                  </h3>
              
                  <p class="mt-2 text-sm leading-normal text-zinc-400">
                    {project.description}
                  </p>

                  {#if project.technologies && project.technologies.length > 0}
                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                      {#each project.technologies as tech}
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300 ">
                            {tech}
                          </div>
                        </li>
                      {/each}
                    </ul>
                  {/if}

                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </section>
    <footer class="max-w-lg pb-16 text-sm text-zinc-500 sm:pb-0">
      <!-- Copyright!! -->
      <p class="font-medium text-center">Made with ❤️ and ☕ by <a href="/" class="text-zinc-200 hover:text-lime-300">Agung Marwanto</a></p>
    </footer>
  </main>
</div>