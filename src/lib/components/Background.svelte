<script lang="ts">
	import { onMount } from 'svelte';

	let width: number;
	let height: number;
	let paths: string[] = [];

	function generatePaths() {
		const paths: string[] = [];
		const numPaths = 15;

		for (let i = 0; i < numPaths; i++) {
			const startX = Math.random() * width;
			const startY = Math.random() * height;
			const endX = Math.random() * width;
			const endY = Math.random() * height;
			const controlX1 = Math.random() * width;
			const controlY1 = Math.random() * height;
			const controlX2 = Math.random() * width;
			const controlY2 = Math.random() * height;

			paths.push(
				`M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`
			);
		}

		return paths;
	}

	onMount(() => {
		const updateSize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			paths = generatePaths();
		};

		updateSize();
		window.addEventListener('resize', updateSize);

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	});
</script>

<div class="pointer-events-none fixed inset-0 overflow-hidden">
	<svg {width} {height}>
		{#each paths as path}
			<path
				d={path}
				fill="none"
				stroke="hsl(var(--primary))"
				stroke-width="0.5"
				stroke-opacity="0.1"
			/>
		{/each}
	</svg>
</div>
