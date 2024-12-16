<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<svelte:head>
	<title>Mexican Train - Longest Path</title>
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<Background />
	<nav class="border-b border-border/40">
		<div class="container flex h-16 items-center px-4">
			<div class="mr-4 text-xl font-bold">
				<a href="/"> Mexican Train </a>
			</div>
			<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
				<div class="w-full flex-1 md:w-auto md:flex-none">
					<nav class="hidden gap-6 md:flex">
						<a href="/play" class="text-sm font-medium transition-colors hover:text-primary">
							Play
						</a>
						<a
							href="/rules"
							class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
						>
							Rules
						</a>
						<a
							href="/history"
							class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
						>
							History
						</a>
					</nav>
				</div>
				<ThemeToggle />
			</div>
		</div>
	</nav>
	<slot />
</div>
