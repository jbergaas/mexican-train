import { describe, it, expect } from 'vitest';
import { DominoSet } from './domino';

describe('DominoSet', () => {
	it('should create a full set of dominoes', () => {
		const dominoSet = new DominoSet();
		expect(dominoSet.pieces.length).toBe(91);
	});

	it('should have the correct number of double pieces', () => {
		const dominoSet = new DominoSet();
		const doublePieces = dominoSet.pieces.filter((piece) => piece[0] === piece[1]);
		expect(doublePieces.length).toBe(13);
	});

	it('should not have duplicate pieces', () => {
		const dominoSet = new DominoSet();
		const uniquePieces = new Set(dominoSet.pieces.map((piece) => piece.join('-')));
		expect(uniquePieces.size).toBe(dominoSet.pieces.length);
	});
});

describe('Longest train calculation', () => {
	it('should find the longest train', () => {
		const pieces = [
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6]
		];
		const centerPiece = [1, 1];

		function findLongestTrain(pieces: number[][], centerPiece: number[]): number[][] {
			let longestTrain: number[][] = [];

			function findTrain(
				currentTrain: number[][],
				availablePieces: number[][],
				currentEnd: number
			) {
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
			return longestTrain;
		}

		const longestTrain = findLongestTrain(pieces, centerPiece);
		expect(longestTrain).toEqual([
			[1, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6]
		]);
	});
});
