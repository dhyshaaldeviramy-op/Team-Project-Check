import { Component } from '@angular/core';
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-expense',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
expense = {
  title: '',
  amount: 0,
  category: '',
  date: ''
};

constructor(private api: Api) {}

add() {
  this.api.addExpense(this.expense).subscribe(res => {
    alert("Added");
  });
}
}
