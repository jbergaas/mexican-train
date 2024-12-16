<script lang="ts">
	import { spring } from 'svelte/motion';

	export let values: number[];
	export let selected: boolean = false;
	export let onClick: (() => void) | undefined = undefined;

	$: [left, right] = values;

	const scale = spring(1, {
		stiffness: 0.2,
		damping: 0.4
	});

	$: {
		scale.set(selected ? 1.1 : 1);
	}
</script>

<button
	class="flex h-8 w-16 items-center justify-center rounded border-2 text-sm font-bold transition-colors duration-300
         {selected ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}
         hover:bg-primary/90 hover:text-primary-foreground"
	on:click={onClick}
	style="transform: scale({$scale})"
>
	{left}-{right}
</button>
