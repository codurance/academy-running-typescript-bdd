export interface Printer {
    printline(line: string): void
}

export class Account {
    private printer: Printer;
    constructor(printer: Printer) {
        this.printer = printer;
    }

    deposit(amount: number): void {
        //throw new Error("Not implemented yet")
    }
    withdraw(amount: number): void {
        //throw new Error("Not implemented yet")
    }
    printStatement(): void {
        //throw new Error("Not implemented yet")
    }



}