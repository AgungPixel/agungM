<script>
    import SocialLinks from '$lib/components/socialMedia.svelte';
    import NavigationLinks from '$lib/components/navigation.svelte';
</script>

<header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
  <div>
    <h1><a href="/">Agung Marwanto</a></h1>
    <h2>Freelancer</h2>
    <p class="mt-2 max-w-xs leading-normal">Saya membuat UI/UX minimalist untuk web.</p>
    <NavigationLinks />
  </div>
  <SocialLinks links={[
    { name: "GitHub", url: "https://github.com/AgungPixel", icon: "github" },
    { name: "Codepen", url: "https://codepen.io/Agung-Marwanto-the-builder", icon: "codepen" },
    { name: "Instagram", url: "https://www.instagram.com/__agungm/", icon: "instagram" },
    { name: "LinkedIn", url: "https://linkedin.com/in/agung", icon: "linkedin" },
    { name: "WhatsApp", url: "https://wa.me/6289605905457", icon: "whatsapp" }
  ]}/>
</header>