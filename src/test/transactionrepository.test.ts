import {Transaction} from "../main/transaction";
import {TransactionRepository} from "../main/transactionRepository";
import {mock, MockProxy} from "jest-mock-extended";
import {Clock} from "../main/clock";

function transaction(number: number, date: string) {
    return new Transaction(number, date);
}

const TODAY = "10/02/2012";
describe("TransactionRepository", () => {

    it("should create and store a deposit transaction", () => {

        const clock: MockProxy<Clock> = mock<Clock>()
        clock.dateAsString.mockReturnValue(TODAY)

        const transactionRepository: TransactionRepository = new TransactionRepository(clock)
        transactionRepository.addDeposit(1000)

        const transactions: Transaction[] = transactionRepository.allTransactions()
        expect(transactions.length).toBe(1)
        expect(transactions[0]).toEqual(transaction(1000, TODAY))
    })
})