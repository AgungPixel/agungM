<script>
	/* INI ADALAH TAILWINDCSS */
	import '../app.css';
	/* children tidak bisa di ubah !!! hanya rename saja */
	let { children } = $props();
</script>

<!-- Ini untuk menambah elemen HTML <head> -->
<svelte:head>
	<title>Agung Marwanto</title>
</svelte:head>
<!-- Main container global -->

<div class="relative">
	<div class="glow-effect" id="glowEffect"></div>
	<div class="mx-auto min-h-screen max-w-7xl p-5 md:px-10 md:py-20 lg:py-0 lg:w-[70%]">
		{@render children()}
	</div>
</div>
<!-- LAYOUT ITU TAMPIL DI SEMUA HALAMAN ! TARUH HEADER DAN FOOTERNYA DISINI -->