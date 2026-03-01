import { test, expect } from '@playwright/test';

test('SauceDemo - Login to Checkout Flow', async ({ page }) => {
  
  // a. Navigate to homepage
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Validate successful login
  await expect(page).toHaveURL(/inventory/);

  // b. Click "Add to cart" on first product
  await page.click('.inventory_item button');

  // Validate cart badge appears
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // c. Click Cart icon
  await page.click('.shopping_cart_link');

  // Validate redirect to cart page
  await expect(page).toHaveURL(/cart/);

  // d. Click Checkout button
  await page.click('#checkout');

  // Validate redirect to checkout page
  await expect(page).toHaveURL(/checkout-step-one/);
});