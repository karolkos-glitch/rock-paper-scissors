import { test, expect } from '@playwright/test';
import visitMainPage from '../utils/visitMainPage';

test.describe('RPS', () => {

  test.beforeEach(async ({ page }) => {
    await visitMainPage(page);
  })

  test.describe('Title of the page', () => {
    test('get title', async ({ page }) => {
    
      await expect(page).toHaveTitle(/Rock Paper Scissors/);
    });
  });

  test.describe('Game Header', () => {
    test('get header elements', async ({ page }) => {
    
      const header = page.getByTestId('game-header');
    
      await expect(header).toContainText(/SCORE/);
    
      await expect(header.getByAltText('Rock Paper Scissors')).toBeVisible();
    });
  })

  test.describe('Playground', () => {
    test('get three options: Rock, Paper, and Scissors', async ({ page }) => {

      const playground = page.getByTestId('playground');

      await expect(playground.getByAltText(/Option - ROCK/)).toBeVisible();

      await expect(playground.getByAltText(/Option - PAPER/)).toBeVisible();

      await expect(playground.getByAltText(/Option - SCISSORS/)).toBeVisible();
    })
  })
  
});