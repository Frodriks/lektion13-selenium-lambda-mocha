const { Builder, By, Key } = require('selenium-webdriver');

// Different asserts
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;

// Mocha
describe('Add a todo LambdaTest sample app', () => {
    it('Successfully add a todo', async () => {
        //Start webbdriver and go to page
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        // Find the field to add an tast, write something in the field and add it to the list
        // await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.ENTER); // This works aswell, instead of botch rows below
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
        await driver.findElement(By.css('#addbutton')).click();

        // Find what we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();

        // Find a specific item in the list. In this example we want to find the third item [2]
        let items = await driver.findElements(By.css('li'));
        let thirdItemText = await items [2].getText();
        thirdItemText.should.equal('Third Item');
    
        // Asserts
        assert.equal(todoText, 'Learn Selenium');    // Builtin Node
        expect(todoText).to.equal('Learn Selenium'); // Chai expect
        todoText.should.equal('Learn Selenium');     // Chai should

        // Close browser and exit Selenium
        await driver.quit();
    });
    it('This test should be pending');
});