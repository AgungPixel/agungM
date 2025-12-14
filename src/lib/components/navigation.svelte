<script>
  import { onMount } from 'svelte';

  // 1. Definisikan ID section yang ada di halaman utama kamu
  const navItems = [
    { id: 'tentang', name: 'Tentang' },
    { id: 'pengalaman', name: 'Pengalaman' },
    { id: 'project', name: 'Project' }
  ];

  let activeSection = '';

  onMount(() => {
    // 2. Setup IntersectionObserver (Mata-mata Scroll)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Jika section terlihat di layar (isIntersecting), update activeSection
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, {
      // Threshold: 0.5 artinya trigger saat 50% elemen terlihat
      // rootMargin negatif bikin area deteksi lebih fokus di tengah layar
      rootMargin: "-40% 0px -40% 0px" 
    });

    // 3. Mulai observasi elemen-elemen di Halaman Utama (Main Page)
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup saat komponen di-destroy (pindah halaman lain)
    return () => observer.disconnect();
  });

  // Fungsi helper untuk scroll halus saat diklik
  function handleClick(e, id) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Set aktif manual biar instan (gak nunggu scroll)
      activeSection = id; 
      // Scroll ke elemen
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<nav class="hidden lg:block" aria-label="Halaman Yang Dituju">
  <ul class="mt-16 w-max">
    {#each navItems as item}
      <li>
        <a 
          href="#{item.id}"
          on:click={(e) => handleClick(e, item.id)}
          class="group flex items-center py-3 gap-2 rounded-sm 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50
                 transition-all duration-300"
          class:active={activeSection === item.id}
        >
          <span class="mr-4 h-px w-8 bg-zinc-600 transition-all duration-300
                       group-hover:w-16 group-hover:bg-zinc-200 
                       group-focus-visible:w-16 group-focus-visible:bg-zinc-200
                       group-[.active]:w-16 group-[.active]:bg-zinc-200
                       motion-reduce:transition-none"></span>
          
          <span class="text-xs font-bold uppercase tracking-widest 
                       text-zinc-500 transition-colors duration-300
                       group-hover:text-zinc-200 
                       group-focus-visible:text-zinc-200
                       group-[.active]:text-zinc-200">
            {item.name}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</nav>