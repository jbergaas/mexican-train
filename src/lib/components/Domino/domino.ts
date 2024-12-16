export class DominoSet {
	pieces: number[][];

	constructor() {
		this.pieces = [];
		for (let i = 0; i <= 12; i++) {
			for (let j = i; j <= 12; j++) {
				this.pieces.push([i, j]);
			}
		}
	}
}
