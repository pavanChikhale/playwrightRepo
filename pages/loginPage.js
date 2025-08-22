import { Page } from '@playwright/test';
import utils from '../pages/utils.js';
class LoginPage {
    // page property will be assigned in the constructor
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Email Address').first();
        this.passwordInput = page.getByPlaceholder('Password').first();
        this.loginButton = page.getByRole('button', { name: 'Login' }).first();
    }

    async goto(){
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async login(username, password){
        await utils.typeInInputField(this.usernameInput, username);
        // Wait for the password input to be visible and fill it
        await utils.typeInInputField(this.passwordInput, password);
       /* await utils.typeInInputField(this.page, this.usernameInput, username);
        await utils.typeInInputField(this.page, this.passwordInput, password);
        await utils.waitUntilDisplayed(this.page, this.loginButton);*/
        // Click the login button
        await utils.clickButton(this.page,this.loginButton);
       // await this.loginButton.click();
    }
    
}
module.exports = LoginPage;