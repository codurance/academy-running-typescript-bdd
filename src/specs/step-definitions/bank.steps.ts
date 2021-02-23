import {DataTable} from '@cucumber/cucumber'
import {Account} from "../../main/account";
import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/bank.feature')

defineFeature(feature, test => {
    const mockPrintline = jest.fn()
    const printer = {
        printline: mockPrintline
    }
    let account: Account
    beforeEach(() => {
        account = new Account(printer)
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
        then("they should see", (dataTable: DataTable) => {
            expect(printer.printline).toBeCalledWith("Date | Amount | Balance");
            expect(printer.printline).toBeCalledWith("10/01/2012 | 1000 | 1000");
            expect(printer.printline).toBeCalledWith("13/01/2012 | 2000 | 3000");
            expect(printer.printline).toBeCalledWith("14/01/2012 | -500 | 2500");
        })
    })
})