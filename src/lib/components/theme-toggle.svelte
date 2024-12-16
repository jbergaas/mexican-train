<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' = 'light';

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme) {
			theme = savedTheme;
		} else if (prefersDark) {
			theme = 'dark';
		}

		document.documentElement.classList.toggle('dark', theme === 'dark');
	});
</script>

<Button variant="ghost" size="icon" on:click={toggleTheme} class="inline-flex items-center">
	{#if theme === 'light'}
		<Sun class="h-5 w-5" />
		<span class="sr-only">Switch to dark mode</span>
	{:else}
		<Moon class="h-5 w-5" />
		<span class="sr-only">Switch to light mode</span>
	{/if}
</Button>
