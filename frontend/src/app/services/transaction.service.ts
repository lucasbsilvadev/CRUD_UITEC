import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // Corrija a URL para usar o localhost, apontando para o backend
  private apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  // GET: Obter todas as transações
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}`);
  }

  // POST: Criar uma nova transação
  createTransaction(transaction: Transaction): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(transaction); 
    return this.http.post(`${this.apiUrl}create`, body, { headers }); 
  }

  // PUT: Atualizar uma transação existente
  updateTransaction(id: number, transaction: Transaction): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(transaction); 
    return this.http.put(`${this.apiUrl}update?id=${id}`, body, { headers });
  }

  // DELETE: Deletar uma transação
  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete?id=${id}`);
  }
}
