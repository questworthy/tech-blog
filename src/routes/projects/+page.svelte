<script>
	const intro = 'FOSS products out of Quest Alliance.';

	const projects = [
		{
			name: 'dots',
			desc: 'Content delivery platform ~ WIP.',
			repo: 'dots',
			demo: 'dots',
			youtube: 'dQw4w9WgXcQ'
		},
		{
			name: 'website',
			desc: 'Source of this website.',
			repo: 'qa-tech',
			demo: '',
			youtube: ''
		}
	];

	const style =
		'rounded-xl m-2 border-2 border-darkest hover:border-dark px-4 py-1 font-plex_sans no-underline bg-darkest transition-all duration-300 delay-100 ease-in-out';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<p class="px-4">{intro}</p>
<main class="grid grid-cols-1 lg:grid-cols-2">
	{#each projects as project}
		<section
			class="m-2 rounded-xl p-4 bg-zinc-900 transition-all duration-200 ease-in border-2 border-darker hover:border-lighter"
		>
			<ul class="p-0 list-inside list-none">
				<li class="font-bold font-plex_serif text-light">
					{project.name}
				</li>
				<li class="font-plex_sans text-dark">
					{project.desc}
				</li>

				<div class="flex flex-wrap">
					<a class={style} href={`https://github.com/questworthy/${project.repo}`}>source</a>

					{#if project.demo != ''}
						<a class={style} href={`https://${project.demo}.questalliance.tech`}>demo</a>
					{/if}

					{#if project.youtube != ''}
						<a class={style} href={`https:/www.youtube.com/watch?v=${project.youtube}`}>youtube</a>
					{/if}
				</div>
			</ul>
		</section>
	{/each}
</main>
