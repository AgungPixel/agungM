<script>
    import SocialLinks from '$lib/components/socialMedia.svelte';
    import NavigationLinks from '$lib/components/navigation.svelte';
    import { siteConfig } from '$lib/site.config';
</script>

<header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
  <div>
    <h1><a href="/">{siteConfig.author.name}</a></h1>
    <h2>{siteConfig.author.role}</h2>
    <p class="mt-2 max-w-xs leading-normal">{siteConfig.author.bio}</p>
    <NavigationLinks />
  </div>
  <SocialLinks links={siteConfig.socials}/>
</header>