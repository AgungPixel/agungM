<script>
  import { onMount } from 'svelte';
  
  /* ====================================================================
  BAGIAN 1: IMPORT KOMPONEN ASLI ANDA DISINI
  ==================================================================== */

  import Navigations from '$lib/components/navigation.svelte';
	import SocialLinks from '$lib/components/socialMedia.svelte';
  
  // import Hero from '$lib/components/Hero.svelte';
  // import ProjectCard from '$lib/components/ProjectCard.svelte';
  
  // Jika belum ada komponen, biarkan variabel ini null\
  const ProjectCard = null;

  /* ====================================================================
     BAGIAN 2: DATA KOMPONEN (REGISTRY)
     ====================================================================
  */
  const components = [
    {
      id: 'typography',
      name: 'Global Typography',
      icon: 'Aa',
      type: 'system', // Tipe khusus untuk cek font global
      description: 'Cek ukuran font (H1-P) dari global CSS Anda'
    },
    {
      id: 'skills',             // ID unik (huruf kecil, tanpa spasi)
      name: 'Navigations Section',    // Nama yang muncul di Sidebar
      icon: '⚡',               // Ikon pemanis
      component: Navigations,        // Variabel import dari langkah no. 2
      isDemo: false,            // Set false karena ini komponen asli
      description: 'Daftar keahlian teknis',
      
      // 👇 Masukkan props default sesuai komponen Skills.svelte kamu
      props: {
        title: "My Tech Stack",
        items: ["Svelte", "HTML", "CSS", "Javascript"] 
      }
    },
    {
      id: 'project-card',
      name: 'Project Card',
      icon: '🃏',
      component: SocialLinks,
      isDemo: false, // Ubah ke false jika sudah pakai komponen asli
      description: 'Card untuk menampilkan portfolio',
      props: {
        title: "E-Commerce Dashboard",
        tags: ["Svelte", "Tailwind", "TypeScript"],
        image: "https://placehold.co/600x400/1a1a1a/FFF"
      }
    }
  ];

  /* ====================================================================
     BAGIAN 3: LOGIC UTAMA (JANGAN DIUBAH)
     ====================================================================
  */
  let selectedId = $state('typography');
  let sidebarHidden = $state(false);
  let viewport = $state('desktop'); 
  
  // State untuk menyimpan nilai props yang sedang diedit
  let propValues = $state({});

  // Cari item yang sedang dipilih
  let activeItem = $derived(components.find(c => c.id === selectedId));

  // Reset props setiap kali ganti komponen
  $effect(() => {
    if (activeItem && activeItem.props) {
      // Deep copy agar tidak merusak data asli
      propValues = JSON.parse(JSON.stringify(activeItem.props));
    } else {
      propValues = {};
    }
  });

  function resetProps() {
    if (activeItem?.props) {
      propValues = JSON.parse(JSON.stringify(activeItem.props));
    }
  }
</script>

{#snippet DemoHero(p)}
  <section class="flex flex-col justify-center items-start py-20 px-8 bg-neutral-900 h-full border border-dashed border-neutral-700 m-4 rounded-lg relative">
    <div class="absolute top-2 right-2 text-xs text-neutral-500 font-mono">DEMO PREVIEW</div>
    {#if p.available}
      <span class="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-green-500/20">
        Available for work
      </span>
    {/if}
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">{p.title}</h1>
    <p class="text-xl text-neutral-400 max-w-2xl">{p.subtitle}</p>
    <div class="mt-8 flex gap-4">
      <button class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition">Contact Me</button>
    </div>
  </section>
{/snippet}

{#snippet DemoCard(p)}
  <div class="p-10 flex items-center justify-center h-full">
    <div class="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition relative">
       <div class="absolute top-2 right-2 text-xs text-neutral-500 font-mono bg-black/50 px-2 rounded">DEMO</div>
      <div class="h-48 overflow-hidden bg-neutral-800">
        <img src={p.image} alt={p.title} class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-2">{p.title}</h3>
        <div class="flex flex-wrap gap-2 mt-4">
          {#each p.tags as tag}
            <span class="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded border border-neutral-700">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/snippet}

{#snippet TypographySystem()}
  <div class="space-y-12 max-w-4xl mx-auto py-12 px-8 text-neutral-200">
    <div class="pb-8 border-b border-neutral-800">
      <span class="text-xs font-mono text-neutral-500 mb-6 block uppercase tracking-wider">Headings Check</span>
      <h1 class="text-6xl font-bold mb-8">Heading 1</h1>
      <h2 class="text-5xl font-bold mb-6">Heading 2</h2>
      <h3 class="text-4xl font-bold mb-4">Heading 3</h3>
      <h4 class="text-3xl font-bold mb-4">Heading 4</h4>
      <p class="mt-4 text-neutral-500">Jika font tidak berubah, cek import font di app.html / global.css</p>
    </div>
    <div>
      <span class="text-xs font-mono text-neutral-500 mb-4 block uppercase tracking-wider">Body Text</span>
      <p class="text-lg text-neutral-300 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gunakan halaman ini untuk memastikan typography website Anda mudah dibaca di berbagai ukuran layar.
      </p>
    </div>
  </div>
{/snippet}

<div class="flex h-screen bg-black text-white font-sans overflow-hidden">
  
  <aside class="w-72 bg-neutral-900 border-r border-neutral-800 flex flex-col z-20 transition-all duration-300 {sidebarHidden ? '-ml-72' : ''}">
    <div class="p-5 border-b border-neutral-800">
      <h1 class="font-bold text-lg tracking-tight text-white">AgungM<span class="text-blue-500">.builder</span></h1>
      <p class="text-xs text-neutral-500 mt-1">Component Showcase</p>
    </div>

    <nav class="flex-1 overflow-y-auto p-3 space-y-1">
      {#each components as item}
        <button 
          onclick={() => selectedId = item.id}
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
          {selectedId === item.id 
            ? 'bg-blue-600/10 text-blue-500 ring-1 ring-blue-500/20' 
            : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'}"
        >
          <span class="text-base w-6 text-center">{item.icon}</span>
          {item.name}
        </button>
      {/each}
    </nav>
  </aside>

  <main class="flex-1 flex flex-col min-w-0 bg-neutral-950 relative">
    
    <header class="h-14 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur flex items-center justify-between px-4 z-10">
      <div class="flex items-center gap-4">
        <button onclick={() => sidebarHidden = !sidebarHidden} class="p-2 hover:bg-neutral-800 rounded text-neutral-400">
          {sidebarHidden ? '☰' : '◀'}
        </button>
        <span class="font-medium text-sm text-neutral-300 border-l border-neutral-700 pl-4">{activeItem?.name}</span>
      </div>

      <div class="flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
          {#each [
            { id: 'mobile', icon: '📱', width: '375px' },
            { id: 'tablet', icon: '📟', width: '768px' },
            { id: 'desktop', icon: '💻', width: 'Full' }
          ] as mode}
            <button 
              onclick={() => viewport = mode.id}
              class="px-3 py-1.5 rounded-md text-sm transition-all flex items-center gap-2
              {viewport === mode.id ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}"
              title={mode.width}
            >
              <span>{mode.icon}</span>
              <span class="hidden sm:inline text-xs capitalize">{mode.id}</span>
            </button>
          {/each}
      </div>
    </header>

    <div class="flex-1 overflow-auto flex justify-center p-8 relative">
      <div class="absolute inset-0 pointer-events-none opacity-20" 
           style="background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px;">
      </div>

      <div 
        class="bg-black shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] relative
        {viewport === 'mobile' ? 'w-[375px] min-h-[667px] rounded-[2rem] border-[8px] border-neutral-800' : ''}
        {viewport === 'tablet' ? 'w-[768px] min-h-[1024px] rounded-[1.5rem] border-[8px] border-neutral-800' : ''}
        {viewport === 'desktop' ? 'w-full h-full rounded-none border-0' : ''}"
      >
        <div class="h-full w-full overflow-y-auto {viewport !== 'desktop' ? 'rounded-[1.2rem]' : ''} bg-black text-left">
           {#if activeItem}
              
              {#if activeItem.type === 'system'}
                {@render TypographySystem()}
              
              {:else if activeItem.isDemo}
                {#if activeItem.id === 'hero'}
                   {@render DemoHero(propValues)}
                {:else if activeItem.id === 'project-card'}
                   {@render DemoCard(propValues)}
                {/if}

              {:else if activeItem.component}
                {@const ActiveComponent = activeItem.component}
                <ActiveComponent {...propValues} />
              
              {:else}
                <div class="flex h-full flex-col items-center justify-center text-neutral-500 gap-3 p-8 text-center">
                   <div class="text-4xl">⚠️</div>
                   <h3 class="text-lg font-medium text-white">Komponen belum di-import</h3>
                   <p class="text-sm max-w-xs">
                     Variabel <code>component</code> untuk <strong>{activeItem.name}</strong> masih bernilai <code>null</code>.
                   </p>
                   <div class="text-xs bg-neutral-900 p-3 rounded border border-neutral-800 mt-2 font-mono text-blue-400">
                     import {activeItem.name.replace(/\s/g,'')} from '$lib/...';
                   </div>
                </div>
              {/if}
              
           {/if}
        </div>
      </div>
    </div>
  </main>

  {#if activeItem && activeItem.type !== 'system'}
    <aside class="w-80 bg-neutral-900 border-l border-neutral-800 flex flex-col z-20">
      <div class="p-4 border-b border-neutral-800 flex justify-between items-center">
        <h3 class="font-bold text-xs uppercase text-neutral-500 tracking-wider">Properties</h3>
        <button onclick={resetProps} class="text-xs text-blue-500 hover:text-blue-400">Reset Default</button>
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-6">
        {#each Object.entries(propValues) as [key, value]}
          <div class="group">
            <label for={key} class="block text-xs font-medium text-neutral-400 mb-2 capitalize group-hover:text-white transition">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            
            {#if typeof value === 'boolean'}
              <button 
                onclick={() => propValues[key] = !value}
                class="w-full flex items-center justify-between px-3 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
              >
                <span class="text-sm {value ? 'text-green-400' : 'text-neutral-500'}">{value ? 'True' : 'False'}</span>
                <div class="w-9 h-5 bg-neutral-800 rounded-full relative transition-colors {value ? '!bg-green-600' : ''}">
                  <div class="absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform {value ? 'translate-x-4' : ''}"></div>
                </div>
              </button>

            {:else if Array.isArray(value)}
               <input 
                type="text" 
                value={value.join(', ')}
                oninput={(e) => propValues[key] = e.target.value.split(',').map(s => s.trim())}
                class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition font-mono"
              />
              <p class="text-[10px] text-neutral-600 mt-1">Pisahkan item dengan koma</p>

            {:else}
              <input 
                type="text" 
                bind:value={propValues[key]}
                class="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition"
              />
            {/if}
          </div>
        {/each}
        
        {#if Object.keys(propValues).length === 0}
          <div class="text-center py-8 text-neutral-600 text-sm">
            Tidak ada props yang tersedia untuk komponen ini.
          </div>
        {/if}
      </div>
    </aside>
  {/if}
</div>