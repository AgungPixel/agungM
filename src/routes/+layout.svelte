<script>
    import '../app.css';

	import Starfield from '$lib/components/Starfield.svelte';
    import Glow from '$lib/components/Glow.svelte';

    import { onMount } from 'svelte';

    let { children } = $props();
</script>

<svelte:head>
    <title>Agung Marwanto</title>
    <meta
        name="description"
        content="Agung Marwanto adalah freelance frontend developer yang fokus membangun website modern, cepat, dan minimalist. Berpengalaman di berbagai bidang dan terus belajar teknologi web."
    />
    <meta name="robots" content="index, follow" />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Agung Marwanto — Frontend Engineer" />
    <meta property="og:description" content="Membangun UI web yang modern, cepat, dan elegan." />
    <meta property="og:url" content="https://agungmarwanto.pages.dev" />
    <meta property="og:image" content="https://agungmarwanto.pages.dev/og-image.png" />

    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Glow />
<Starfield />
<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
    {@render children()}
</div>