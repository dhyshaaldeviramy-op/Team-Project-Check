import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddExpense } from "./add-expense/add-expense";
import { ExpenseList } from "./expense-list/expense-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddExpense, ExpenseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expenseUI');
}
