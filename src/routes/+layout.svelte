<script lang="ts">
	import '../app.css';
	import '@fontsource/caprasimo';
	import '@fontsource-variable/outfit';

	import Navbar from '../components/partials/Navbar.svelte';

	let { children } = $props();
</script>

<main class="text-zinc-800 top-0 bottom-0 left-0 right-0 h-screen w-screen bg-zinc-950 p-2">
	<div class="h-full w-full flex flex-col gap-1">
		<Navbar />
		{@render children()}
	</div>
</main>
