module.exports = {
  'Default Test': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)

      // Shows info notifictions by default
      .assert.containsText('.notification.is-info', 'Select a person in the list in order to see more details.')

      // Shows all categories in the panel
      .assert.containsText('.categories.panel', 'All')
      .assert.containsText('.categories.panel', 'Marketing')
      .assert.containsText('.categories.panel', 'Finance')
      .assert.containsText('.categories.panel', 'IT')

      // Show persons panel with 5 persons
      .assert.elementCount('.persons.panel a.panel-block', 5)

      // Shows person details when clicked
      .getText('.persons.panel a.panel-block:first-child', function (result) {
        this.click('.persons.panel a.panel-block:first-child');
        this.waitForElementVisible('.person-detail', 300);
        this.assert.containsText('.person-detail h2', result.value);
      })

      // etc. etc. etc.

      .end();
  },
};
