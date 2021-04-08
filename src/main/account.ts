export interface AccountConsole {
    printline(line: string): void
}

export class Account {
    constructor() {
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