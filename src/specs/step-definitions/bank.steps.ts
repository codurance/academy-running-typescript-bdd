import {Account} from "../../main/account";
import {defineFeature, loadFeature} from "jest-cucumber";
import {TransactionRepository} from "../../main/transactionRepository";
import {mock, MockProxy} from "jest-mock-extended";
import {StatementPrinter} from "../../main/statementPrinter";
import {Clock} from "../../main/clock";

const feature = loadFeature('./src/specs/features/bank.feature')

defineFeature(feature, test => {
    const mockPrintline = jest.fn()
    const printer = {
        printline: mockPrintline
    }
    let account: Account
    beforeEach(() => {
        const clock: MockProxy<Clock> = mock<Clock>()
        const transactionRepository: TransactionRepository = new TransactionRepository(clock)
        const statementPrinter: StatementPrinter = new StatementPrinter()
        account = new Account(transactionRepository, statementPrinter)
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