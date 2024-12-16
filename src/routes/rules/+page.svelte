<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-4xl font-bold">Rules of Mexican Train</h1>

	<div class="space-y-6">
		<Card>
			<CardHeader>
				<CardTitle>Objective</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					The goal of Mexican Train is to be the first player to play all of your dominoes and/or
					have the lowest score at the end of the game.
				</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Setup</CardTitle>
			</CardHeader>
			<CardContent>
				<ol class="list-inside list-decimal space-y-2">
					<li>Use a set of double-12 dominoes (91 tiles).</li>
					<li>Shuffle the dominoes face down.</li>
					<li>
						Each player draws dominoes based on the number of players:
						<ul class="ml-4 list-inside list-disc">
							<li>2-4 players: 15 dominoes each</li>
							<li>5-6 players: 12 dominoes each</li>
							<li>7-8 players: 10 dominoes each</li>
						</ul>
					</li>
					<li>The highest double is placed in the center to start the game.</li>
				</ol>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Gameplay</CardTitle>
			</CardHeader>
			<CardContent>
				<ol class="list-inside list-decimal space-y-2">
					<li>
						Players take turns clockwise, starting with the player to the left of the one who placed
						the first double.
					</li>
					<li>
						On your turn, you must play a domino matching the open end of your personal train, the
						Mexican Train, or any other player's train that has a marker on it.
					</li>
					<li>
						If you can't play, draw one domino. If you can play it, do so; otherwise, place a marker
						on your train.
					</li>
					<li>Doubles are played perpendicular to the train and require an additional play.</li>
					<li>
						The game ends when a player uses all their dominoes or when the game is blocked (no one
						can play).
					</li>
				</ol>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Scoring</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					At the end of each round, players count the pips on their remaining dominoes. The player
					with the lowest score after an agreed-upon number of rounds wins the game.
				</p>
			</CardContent>
		</Card>
	</div>
</div>
