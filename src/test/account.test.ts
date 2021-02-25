import {Account} from "../main/account";
import {TransactionRepository} from "../main/transactionRepository";
import {mock, MockProxy} from "jest-mock-extended";
import {StatementPrinter} from "../main/statementPrinter";
import {Transaction} from "../main/transaction";

describe("Account", () => {

    const transactionRepository = mock<TransactionRepository>()
    const statementPrinter = mock<StatementPrinter>()
    let account: Account;

    beforeEach(() => {
        account = new Account(transactionRepository, statementPrinter)
    })

    it("should store a transaction when depositing an amount", () => {
        account.deposit(1000)
        expect(transactionRepository.addDeposit).toBeCalledWith(1000)
    })
    it("should store a transaction when withdrawing an amount", () => {
        account.withdraw(1000)
        expect(transactionRepository.addWithdrawal).toBeCalledWith(1000)
    })
    it("should print a statemeent from a list of transactions", () => {

        let transactions: Transaction[] = [ new Transaction(100, "") ];
        transactionRepository.allTransactions.mockReturnValue(transactions)

        account.printStatement()

        expect(statementPrinter.print).toHaveBeenCalledWith(transactions)
    })

})