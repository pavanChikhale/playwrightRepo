const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage.js');
const loginData = require('../testdata/login.json');
const ProductPage = require('../pages/product.js');

test('User can login successfully', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);

    try {
        await loginPage.goto();
        await loginPage.login(loginData.user, loginData.password);

        // Example assertion after login
        await expect(page).toHaveTitle(/Automation Exercise/);
    } catch (error) {
        await page.screenshot({ path: `screenshots/login-failure-${Date.now()}.png`, fullPage: true });
        throw error;
    }
});

// test to add product to cart
test('Add product to cart', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);

    try {
        await loginPage.goto();
        await loginPage.login(loginData.user, loginData.password);
        const productPage = new ProductPage(page);
        // Navigate to the product page
        await productPage.navigateToProduct();

        // Add a product to the cart
        await productPage.addProduct('shirt');
    } catch (error) {
        await page.screenshot({ path: `screenshots/add-product-failure-${Date.now()}.png`, fullPage: true });
        throw error;
    }
});