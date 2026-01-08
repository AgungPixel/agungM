<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
        // Target elemen background yang FIXED (Diam)
        const glowOverlay = document.getElementById('glow-overlay');

        const updateGlow = (e) => {
            if (glowOverlay) {
                // Kirim koordinat mouse ke CSS variable
                glowOverlay.style.setProperty('--x', `${e.clientX}px`);
                glowOverlay.style.setProperty('--y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', updateGlow);
        return () => window.removeEventListener('mousemove', updateGlow);
    });
</script>

<svelte:head>
	<title>Agung Marwanto</title>
	<meta
		name="description"
		content="Agung Marwanto adalah freelance frontend developer yang fokus membangun website modern, cepat, dan minimalist. Berpengalaman di berbagai bidang dan terus belajar teknologi web."
	/>

	<meta name="robots" content="index, follow" />

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

<div 
    id="glow-overlay" 
    class="fixed inset-0 z-[-1] pointer-events-none glow-container"
></div>
<div>
	<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
		{@render children()}
	</div>
</div>
