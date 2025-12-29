<script>
	/* INI ADALAH TAILWINDCSS */
	import '../app.css';
	/* children tidak bisa di ubah !!! hanya rename saja */
	let { children } = $props();
</script>

<!-- Ini untuk menambah elemen HTML <head> -->
<svelte:head>
	<title>Agung Marwanto</title>
	<meta name="description" content="Agung Marwanto adalah freelance frontend developer yang fokus membangun website modern, cepat, dan minimalist. Berpengalaman di berbagai bidang dan terus belajar teknologi web." />

  	<meta name="robots" content="index, follow" />

  	<!-- Canonical -->
  	<link rel="canonical" href="https://agungmarwanto.pages.dev" />

	<!-- Open Graph -->
  	<meta property="og:type" content="website" />
 	<meta property="og:title" content="Agung Marwanto — Frontend Engineer" />
  	<meta property="og:description" content="Membangun UI web yang modern, cepat, dan elegan." />
  	<meta property="og:url" content="https://agungmarwanto.pages.dev" />
  	<meta property="og:image" content="https://agungmarwanto.pages.dev/og-image.png" />

  	<!-- Twitter -->
  	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<!-- Main container global -->

<div class="relative">
	<div class="glow-effect" id="glowEffect"></div>
	<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
		{@render children()}
	</div>
</div>
<!-- LAYOUT ITU TAMPIL DI SEMUA HALAMAN ! TARUH HEADER DAN FOOTERNYA DISINI -->