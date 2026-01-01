<script>
	import GitHubIcon from '$lib/icons/github.svelte';
	import CodepenIcon from '$lib/icons/codepen.svelte';
	import InstagramIcon from '$lib/icons/instagram.svelte';
	import LinkedinIcon from '$lib/icons/linkedin.svelte';
	import WhatsappIcon from '$lib/icons/whatsapp.svelte';

	// Data social media — bisa kamu tambah atau edit
	export let links = [
		{ name: 'GitHub', url: '#', icon: 'github' },
		{ name: 'Codepen', url: '#', icon: 'codepen' },
		{ name: 'Instagram', url: '#', icon: 'instagram' },
		{ name: 'LinkedIn', url: '#', icon: 'linkedin' },
		{ name: 'WhatsApp', url: '#', icon: 'whatsapp' }
	];

	const iconMap = {
		github: GitHubIcon,
		codepen: CodepenIcon,
		instagram: InstagramIcon,
		linkedin: LinkedinIcon,
		whatsapp: WhatsappIcon
	};
</script>

<!-- Social Media Link -->
<ul class="ml-1 mt-8 flex items-center" aria-label="Social Media Links">
	{#each links as link}
		<li class="mr-3 shrink-0 text-xs">
			<a
				class="block rounded text-zinc-400 hover:text-zinc-200 focus:outline focus:outline-blue-500"
				href={link.url}
				aria-label={`Visit ${link.name} profile in a new tab`}
				title={link.name}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="sr-only">{link.name}</span>
				{#if iconMap[link.icon]}
					<svelte:component this={iconMap[link.icon]} />
				{:else}
					<span class="text-xs text-zinc-300">{link.name}</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>
