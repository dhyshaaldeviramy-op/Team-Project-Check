import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Api {
   baseUrl = 'https://localhost:7248/api/Expenses';

  constructor(private http: HttpClient) {}

  getExpenses() {
    return this.http.get(this.baseUrl);
  }

  addExpense(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  deleteExpense(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTotal() {
    return this.http.get(`${this.baseUrl}/total`);
  }
}
