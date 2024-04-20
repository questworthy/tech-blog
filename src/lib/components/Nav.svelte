<script>
	import logo from '$lib/assets/logo.png';

	// get current page url
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname.split('/').pop() || $page.url.pathname;

	// nav bar
	let links = ['home', 'blog', 'projects'];
	const style =
		'inline m-2 border-b-2 p-2  uppercase no-underline font-contrail text-dark transition-all duration-200 ease-in';
</script>

<div class="flex justify-between items-center h-16 my-8">
	<img loading="lazy" src={logo} alt="Quest Alliance Logo" class="h-16" />
	<nav class="flex justify-center m-0">
		{#each links as link}
			{#if link === 'home'}
				<a
					class={`${style} ${
						currentURL === '/'
							? 'text-light border-light'
							: 'hover:text-light hover:border-light border-darkest'
					}`}
					href={`/`}
				>
					{link}
				</a>
			{:else if link === currentURL}
				<a
					class={`${style} ${link === currentURL && 'text-light border-light '}`}
					href={link === 'home' ? '/' : `/${link}`}
				>
					{link}
				</a>
			{:else}
				<a
					class={`${style} border-darkest hover:text-light hover:border-light`}
					href={link === 'home' ? '/' : `/${link}`}
				>
					{link}
				</a>
			{/if}
		{/each}
	</nav>
</div>
