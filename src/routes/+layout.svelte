<script>
	import '../app.css';

	// Supports weights 100-900
	import '@fontsource-variable/inter';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<Nav />
<!--
A #key block takes an expression, and automatically re-renders its contents
whenever that expression changes.
-->
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}
<Footer />
