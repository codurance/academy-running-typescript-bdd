import {DataTable, Given, Then, When} from '@cucumber/cucumber'
import {Account} from "../../main/account";

const account = new Account();

Given('Client makes a deposit of {int} on {string}', function (amount:number, string: string) {
    account.deposit(amount)
});

Given('Client makes a withdrawal of {int} on {string}', function (amount: number, string: string) {
    account.withdraw(amount)
});

When('they print their bank statement', function () {
    account.printStatement()
});
Then('they should see', function (dataTable: DataTable) {
    return 'pending'
});