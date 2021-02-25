import {TransactionRepository} from "./transactionRepository";
import {StatementPrinter} from "./statementPrinter";

export class Account {
    private transactionRepository: TransactionRepository;
    private statementPrinter: StatementPrinter;

    constructor(transactionRepository: TransactionRepository, statementPrinter: StatementPrinter) {
        this.transactionRepository = transactionRepository;
        this.statementPrinter = statementPrinter;
    }

    deposit(amount: number): void {
        throw new Error("Not implemented yet")
    }
    withdraw(amount: number): void {
        throw new Error("Not implemented yet")
    }
    printStatement(): void {
        throw new Error("Not implemented yet")
    }



}