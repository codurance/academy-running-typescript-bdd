import {Transaction} from "./transaction";
import {Clock} from "./clock";

export class TransactionRepository {
    private clock: Clock;
    private transactions: Transaction[] = []

    constructor(clock: Clock) {
        this.clock = clock;
    }

    addWithdrawal(amount: number) {
        this.transactions.push(new Transaction(amount, this.clock.dateAsString()))
    }

    addDeposit(amount: number) {

    }

    allTransactions(): Transaction[] {
        throw new Error("Unsupported")
    }
}