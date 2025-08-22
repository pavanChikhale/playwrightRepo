import utils from '../pages/utils.js';
import { Page, expect } from '@playwright/test';
class ProductPage {
    constructor(page) {
        this.page = page;
        this.productlink = page.locator("//a[contains(text(),'Products')]");
        this.productNameInput = page.getByPlaceholder('Search Product').first();
        this.searchButton = page.locator("//button[@id='submit_search']");
        this.productDetails = page.getByRole('link', { name: 'View Product' }).first();
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' }).first();
    }
    async navigateToProduct() {
        await utils.clickButton(this.page,this.productlink);
    }
    async addProduct(name) {
        await utils.typeInInputField(this.productNameInput, name);
        await utils.clickButton(this.page,this.searchButton);
        await utils.clickButton(this.page,this.productDetails);
        await utils.clickButton(this.page,this.addToCartButton);
    }
}
module.exports = ProductPage;