<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex-1">
	<section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
		<div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
			<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
				Find Your Perfect
				<span
					class="text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
				>
					Domino Path
				</span>
			</h1>
			<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
				Discover the optimal moves in Mexican Train. Select your starting pieces and let our
				algorithm find the longest possible train you can build.
			</p>
			<div class="space-x-4">
				<Button size="lg" variant="default" href="/play">Start Playing</Button>
				<Button size="lg" variant="outline" href="/rules">Learn Rules</Button>
			</div>
		</div>
	</section>

	<section class="container space-y-6 py-8 md:py-12 lg:py-24">
		<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
			<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">How It Works</h2>
			<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
				Select your domino pieces, set the center tile, and we'll calculate all possible
				combinations to help you make the best move.
			</p>
		</div>
		<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
			<div class="relative overflow-hidden rounded-lg border bg-background p-2">
				<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
					<div class="space-y-2">
						<h3 class="font-bold">1. Select Your Pieces</h3>
						<p class="text-sm text-muted-foreground">
							Choose the domino pieces you currently have in your hand.
						</p>
					</div>
				</div>
			</div>
			<div class="relative overflow-hidden rounded-lg border bg-background p-2">
				<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
					<div class="space-y-2">
						<h3 class="font-bold">2. Set Center Piece</h3>
						<p class="text-sm text-muted-foreground">
							Input the center domino piece that starts the game.
						</p>
					</div>
				</div>
			</div>
			<div class="relative overflow-hidden rounded-lg border bg-background p-2">
				<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
					<div class="space-y-2">
						<h3 class="font-bold">3. Get Results</h3>
						<p class="text-sm text-muted-foreground">
							View the optimal path and all possible combinations for your pieces.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
