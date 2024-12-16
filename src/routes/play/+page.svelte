<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import Domino from '$lib/components/Domino/Domino.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { DominoSet } from '$lib/components/Domino/domino';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	const dominoSet = new DominoSet();
	const selectedPieces = writable<number[][]>([]);
	let centerPiece: number[] = [12, 12];
	let longestTrain: number[][] = [];

	function togglePiece(piece: number[]) {
		selectedPieces.update((pieces) => {
			const index = pieces.findIndex((p) => p[0] === piece[0] && p[1] === piece[1]);
			if (index === -1) {
				pieces.push(piece);
			} else {
				pieces.splice(index, 1);
			}
			return pieces;
		});
	}

	function setCenterPiece(value: string) {
		const [left, right] = value.split('-').map(Number);
		if (!isNaN(left) && !isNaN(right) && left >= 0 && left <= 12 && right >= 0 && right <= 12) {
			centerPiece = [left, right];
		}
	}

	function calculateLongestTrain() {
		const pieces = $selectedPieces;
		longestTrain = [];

		function findTrain(currentTrain: number[][], availablePieces: number[][], currentEnd: number) {
			if (currentTrain.length > longestTrain.length) {
				longestTrain = [...currentTrain];
			}

			for (const piece of availablePieces) {
				if (piece[0] === currentEnd || piece[1] === currentEnd) {
					const nextEnd = piece[0] === currentEnd ? piece[1] : piece[0];
					const remainingPieces = availablePieces.filter((p) => p !== piece);
					findTrain([...currentTrain, piece], remainingPieces, nextEnd);
				}
			}
		}

		findTrain([centerPiece], pieces, centerPiece[1]);
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold">Start Playing Mexican Train</h1>

	<div class="grid gap-8 lg:grid-cols-2">
		<Card>
			<CardHeader>
				<CardTitle>Select Your Pieces</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-3 gap-2 md:grid-cols-7">
					{#each dominoSet.pieces as piece (piece.join('-'))}
						<div animate:flip={{ duration: 300 }}>
							<Domino
								values={piece}
								selected={$selectedPieces.some((p) => p[0] === piece[0] && p[1] === piece[1])}
								onClick={() => togglePiece(piece)}
							/>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Game Setup</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<div>
						<Label for="centerPiece">Center Piece</Label>
						<Input
							id="centerPiece"
							type="text"
							placeholder="e.g., 12-12"
							value={`${centerPiece[0]}-${centerPiece[1]}`}
							on:input={(e) => setCenterPiece(e.currentTarget.value)}
						/>
					</div>
					<Button on:click={calculateLongestTrain}>Calculate Longest Train</Button>
				</div>

				<Separator class="my-6" />

				<h3 class="mb-4 text-xl font-semibold">Selected Pieces</h3>
				<div class="grid grid-cols-4 gap-2">
					{#each $selectedPieces as piece (piece.join('-'))}
						<div
							in:fade={{ duration: 300 }}
							out:fade={{ duration: 300 }}
							animate:flip={{ duration: 300 }}
						>
							<Domino values={piece} selected={true} onClick={() => togglePiece(piece)} />
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>
	</div>

	{#if longestTrain.length > 0}
		<Card class="mt-8">
			<div transition:fly={{ y: 50, duration: 500 }}>
				<CardHeader>
					<CardTitle>Longest Train</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap gap-2">
						{#each longestTrain as piece, index (index)}
							<div in:fade={{ delay: index * 100, duration: 300 }}>
								<Domino values={piece} selected={true} />
							</div>
						{/each}
					</div>
				</CardContent>
			</div>
		</Card>
	{/if}
</div>
