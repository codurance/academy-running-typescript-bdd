var {Then} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Given} = require('@cucumber/cucumber');

Given('Client makes a deposit of {int} on {string}', function (int, string) {
    // Given('Client makes a deposit of {float} on {string}', function (float, string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("hello ", int, string)
    return 'pending';
});


Given('Client makes a withdrawal of {int} on {string}', function (int, string) {
    console.log("hello ", int, string)
    return 'pending'
});
When(/^they print their bank statement$/, function () {

});
Then(/^they should see$/, function () {

});