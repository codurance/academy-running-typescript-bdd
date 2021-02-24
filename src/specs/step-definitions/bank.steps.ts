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
        then("they should see", (dataTable) => {
            expect(printer.printline).toBeCalledWith("Date | Amount | Balance");
            dataTable.forEach((row: any) => {
                console.log(row.Date)
                expect(printer.printline).toBeCalledWith(`${row.Date} | ${row.Amount} | ${row.Balance}`)
            })
        })
    })
})