<script lang="ts">
	import '../app.css';
	import Navbar from '../components/partials/Navbar.svelte';

	let { children } = $props();
</script>

<main class="main-container">
	<div class="h-full w-full flex">
		<Navbar />
		<div class="content">
			{@render children()}
		</div>
	</div>
</main>

<style lang="postcss">
	.main-container {
		@apply bg-white text-zinc-800 top-0 bottom-0 left-0 right-0 h-screen w-screen;
	}
	.root-content {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
	}

	.content {
		@apply bg-zinc-100 min-h-[90dvh] max-h-fit w-full px-4 md:px-10 md:py-6 py-4;
	}
</style>
