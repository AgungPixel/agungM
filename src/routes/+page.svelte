<script>
	import NavigationLinks from '$lib/components/navigation.svelte';
	import SocialLinks from '$lib/components/socialMedia.svelte';
	import Starfield from '$lib/components/Starfield.svelte';
	import ArrowIcon from '$lib/icons/arrowIcons.svelte';
	import { onMount } from 'svelte';

	// Pastikan import ini benar (sesuai nama export di file masing-masing)
	import { isIdle } from '$lib/stores/idle.js';
	// Import data yang baru dibuat
	import { aboutData } from '$lib/data/about.js';
	import { experiences } from '$lib/data/experiences';
	import { projects } from '$lib/data/projects';
	import { siteConfig } from '$lib/data/site.config'; // Kalau mau pakai link resume dari config
	import ArrowIcons from '$lib/icons/arrowIcons.svelte';
</script>

<a
	href="#content"
	class="from absolute left-0 top-0 block -translate-x-full rounded bg-lime-400 bg-gradient-to-br via-lime-500 to-lime-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
	>Langsung Ke Content</a
>
<div class="lg:flex lg:justify-between lg:gap-4">
	<div class="pointer-events-none absolute inset-0 z-0">
		<Starfield />
	</div>
	<header
	class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
>
	<div>
		<h1><a href="/">{siteConfig.author.name}</a></h1>
		<h2>{siteConfig.author.role}</h2>
		<p class="mt-2 max-w-xs leading-normal">{siteConfig.author.bio}</p>
		<NavigationLinks />
	</div>
	<SocialLinks links={siteConfig.socials} />
	</header>
	<main id="content" class="pt-24 lg:w-[52%] lg:py-24">
		<section id="tentang" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
			<div
				class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
			>
				<h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
					Tentang Saya
				</h2>
			</div>
			<div>
				{#each aboutData.paragraphs as paragraph}
					<p class="mb-4 leading-relaxed text-zinc-400">
						{@html paragraph}
					</p>
				{/each}
				<p class="leading-relaxed text-zinc-400">
					Di waktu luang saya, saya biasa untuk bermain video

					<span class="group inline-flex cursor-default font-black tracking-wide text-zinc-600">
						<span
							class="transition-all duration-200 group-hover:translate-y-1 group-hover:text-red-500"
							>G</span
						>
						<span
							class="transition-all delay-75 duration-200 group-hover:translate-y-1 group-hover:text-blue-500"
							>a</span
						>
						<span
							class="transition-all delay-100 duration-200 group-hover:translate-y-1 group-hover:text-yellow-500"
							>m</span
						>
						<span
							class="transition-all delay-150 duration-200 group-hover:translate-y-1 group-hover:text-green-500"
							>e</span
						>
						<span
							class="transition-all delay-200 duration-200 group-hover:translate-y-1 group-hover:text-purple-500"
							>s</span
						>
					</span>, menonton
					<span
						class="group relative inline-flex cursor-default overflow-hidden font-medium text-zinc-100"
					>
						<span
							class="translate-y-0 transition-transform duration-300 group-hover:-translate-y-full"
						>
							Anime
						</span>
						<span
							class="absolute inset-0 translate-y-full text-lime-300 transition-transform duration-300 group-hover:translate-y-0"
						>
							アニメ
						</span>
					</span>,

					<a
						href={aboutData.links.imdb}
						target="_blank"
						rel="noreferrer noopener"
						class="group relative inline-flex overflow-hidden font-medium text-zinc-100"
					>
						<span
							class="transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
						>
							Film <span class="font-normal text-zinc-400">dan</span> Tv-Series
						</span>
						<span
							class="absolute inset-0 flex translate-y-full items-center text-lime-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
						>
							IMDB Profile ↗
						</span>
					</a>
				</p>
			</div>
		</section>
		<section id="pengalaman" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
			<div
				class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
			>
				<h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
					Pengalaman
				</h2>
			</div>
			<div>
				<ol class="group-list">
					{#each experiences as job}
						<li class="mb-10">
							<div
								class="lg:hover:opacity-100! group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50"
							>
								<div
									class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg"
								></div>
								<header
									class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
									aria-label={job.year}
								>
									{job.year}
								</header>
								<div class="z-10 sm:col-span-6">
									<h3 class="font-medium leading-snug text-zinc-200">
										<div>
											<a
												class="group/link inline-flex items-baseline text-base font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300"
												href={job.url}
												target="_blank"
												rel="noreferrer noopener"
												aria-label="{job.company} (new tab)"
											>
												<span
													class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
												></span>

												<span>
													{job.role} · {job.company}

													<span
														class="relative ml-1 inline-block h-4 w-4 overflow-hidden align-text-bottom"
													>
														<ArrowIcon />
													</span>
												</span>
											</a>
										</div>
									</h3>
									<p class="mt-3 text-sm leading-normal">
										{job.description}
									</p>
									<ul class="mt-2 flex flex-wrap" aria-label="Kemampuan yang digunakan">
										{#each job.skills as skill}
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300"
												>
													{skill}
												</div>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</li>
					{/each}
				</ol>
				<!-- File Resume Lengkap -->
				<div class="mt-12">
					<a
						href="docs/Resume.pdf"
						target="_blank"
						class="group/link relative inline-flex items-center text-base font-semibold leading-tight text-zinc-200 transition-all duration-300 ease-in-out hover:text-lime-400 focus-visible:text-lime-400"
					>
						<span class="relative z-10 flex items-center">
							Lihat Résumé Selengkapnya
							<span class="relative ml-1 inline-block h-4 w-4 overflow-hidden align-text-bottom">
								<ArrowIcon />
							</span>
						</span>
					</a>
				</div>
			</div>
		</section>
		<section id="project" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
			<!-- Title Section -->
			<div
				class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/5 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
			>
				<h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
					Project
				</h2>
			</div>
			<!-- Main Section -->
			<div>
				<ul class="group/list">
					{#each projects as project}
						<li class="mb-12">
							<div
								class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
							>
								<div
									class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0,1)] lg:group-hover:drop-shadow-lg"
								></div>

								<img
									class="aspect-video rounded border-2 border-zinc-200/10 object-cover transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
									src={project.image}
									alt={project.title}
									loading="lazy"
									width="200"
									height="48"
									decoding="async"
								/>

								<div class="z-10 sm:col-span-6">
									<h3>
										<a
											class="group/link inline-flex items-baseline text-base font-medium leading-tight text-zinc-200 hover:text-lime-300 focus-visible:text-lime-300"
											href={project.url}
											target={project.url.startsWith('http') ? '_blank' : '_self'}
										>
											<span
												class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
											></span>

											<span>
												{project.title}
												<span
													class="relative ml-1 inline-block h-4 w-4 overflow-hidden align-text-bottom"
												>
													<ArrowIcon />
												</span>
											</span>
										</a>
									</h3>

									<p class="mt-2 text-sm leading-normal text-zinc-400">
										{project.description}
									</p>

									{#if project.technologies && project.technologies.length > 0}
										<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
											{#each project.technologies as tech}
												<li class="mr-1.5 mt-2">
													<div
														class="flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium leading-5 text-lime-300"
													>
														{tech}
													</div>
												</li>
											{/each}
										</ul>
									{/if}
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</section>
		<footer class="max-w-lg pb-16 text-sm text-zinc-500 sm:pb-0">
			<!-- Copyright!! -->
			<p class="text-center font-medium">
				Made with ❤️ and ☕ by <a href="/" class="text-zinc-200 hover:text-lime-300"
					>Agung Marwanto</a
				>
			</p>
		</footer>
	</main>
</div>
