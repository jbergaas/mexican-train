import { test, expect } from '@playwright/test';

test('play page has correct title and elements', async ({ page }) => {
	await page.goto('/play');
	await expect(page).toHaveTitle(/Mexican Train/);

	const title = page.locator('h1');
	await expect(title).toHaveText('Start Playing Mexican Train');

	const selectPiecesTitle = page.locator('h2', { hasText: 'Select Your Pieces' });
	await expect(selectPiecesTitle).toBeVisible();

	const gameSetupTitle = page.locator('h2', { hasText: 'Game Setup' });
	await expect(gameSetupTitle).toBeVisible();

	const calculateButton = page.locator('button', { hasText: 'Calculate Longest Train' });
	await expect(calculateButton).toBeVisible();
});

test('can select and deselect domino pieces', async ({ page }) => {
	await page.goto('/play');

	const firstDomino = page.locator('.grid > button').first();
	await firstDomino.click();
	await expect(firstDomino).toHaveClass(/bg-primary/);

	await firstDomino.click();
	await expect(firstDomino).not.toHaveClass(/bg-primary/);
});

test('can calculate longest train', async ({ page }) => {
	await page.goto('/play');

	// Select a few domino pieces
	await page.locator('.grid > button').nth(0).click();
	await page.locator('.grid > button').nth(1).click();
	await page.locator('.grid > button').nth(2).click();

	await page.locator('button', { hasText: 'Calculate Longest Train' }).click();

	const longestTrainSection = page.locator('h2', { hasText: 'Longest Train' });
	await expect(longestTrainSection).toBeVisible();
});
