import {DataTable} from '@cucumber/cucumber'
import {Account, AccountConsole} from "../../main/account";
import {defineFeature, loadFeature} from "jest-cucumber";
import {mock} from "jest-mock-extended";

const feature = loadFeature('./src/specs/features/bank.feature')

defineFeature(feature, test => {
    const accountConsole = mock<AccountConsole>()
    let account: Account
    beforeEach(() => {
        account = new Account()
    })

    test("Client prints statement", ({ given, and, when, then}) => {
        given(/^Client makes a deposit of (\d+) on "(.*)"$/, (amount: number, date:string) => {
            account.deposit(amount)
        })
        and(/^Client makes a deposit of (\d+) on "(.*)"$/, (amount: number, date:string) => {
            account.deposit(amount)
        })
        and(/^Client makes a withdrawal of (\d+) on "(.*)"$/, (amount: number, date: string) => {
            account.withdraw(amount)
        })
        when("they print their bank statement", () => {
            account.printStatement()
        })
        then("they should see", (dataTable) => {
            expect(accountConsole.printline).toBeCalledWith("Date | Amount | Balance");
            dataTable.forEach((row: any) => {
                console.log(row.Date)
                expect(accountConsole.printline).toBeCalledWith(`${row.Date} | ${row.Amount} | ${row.Balance}`)
            })
        })
    })
})