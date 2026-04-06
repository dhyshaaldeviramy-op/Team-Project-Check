import { Component } from '@angular/core';
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-expense-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
expenses: any[] = [];

constructor(private api: Api) {}

ngOnInit() {
  this.load();
}

load() {
  this.api.getExpenses().subscribe((res: any) => {
    this.expenses = res;
  });
}

delete(id: number) {
  this.api.deleteExpense(id).subscribe(() => {
    this.load();
  });
}
}
