<script>
    import { onMount } from 'svelte';

    let glowOverlay;

    onMount(() => {
        let frame; // Untuk menyimpan antrian frame

        const updateGlow = (e) => {
            // Cek apakah elemen sudah ter-bind
            if (!glowOverlay) return;

            // 2. OPTIMASI: Batalkan frame sebelumnya jika ada antrian
            cancelAnimationFrame(frame);

            // 3. Jadwalkan update di frame berikutnya (Sync dengan Refresh Rate Monitor)
            frame = requestAnimationFrame(() => {
                glowOverlay.style.setProperty('--x', `${e.clientX}px`);
                glowOverlay.style.setProperty('--y', `${e.clientY}px`);
            });
        };

        window.addEventListener('mousemove', updateGlow);

        return () => {
            window.removeEventListener('mousemove', updateGlow);
            cancelAnimationFrame(frame); // Bersihkan sisa frame
        };
    });
</script>
<div 
    bind:this={glowOverlay}
    class="fixed inset-0 z-[-1] pointer-events-none glow-container"
></div>