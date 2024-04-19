<script>
	// The data from the load function in +page.js is automatically available to
	// use as the data prop. So all we need to do is export that prop
	// (so it gets passed in), and then use it!
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<link rel="stylesheet" href="/styles/prism-one-dark.css" />
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<svelte:component this={data.content} />
</article>
