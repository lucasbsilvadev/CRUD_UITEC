import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transacao-list',
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit {
  @Input() transacoes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTransacoes();  // Carregar transações ao iniciar o componente
  }

  getTransacoes() {
    this.http.get<any[]>('http://localhost:80/CRUD_UITEC/backend/routes/api.php/')
      .subscribe({
        next: (data) => {
          this.transacoes = data;
        },
        error: (err) => {
          console.error('Erro ao buscar transações:', err);
        }
      });
  }

  deleteTransacao(id: number) {
    this.http.delete(`http://localhost:80/CRUD_UITEC/backend/routes/api.php/transacoes/${id}`)
      .subscribe({
        next: () => {
          this.getTransacoes(); // Atualiza a lista após excluir
        },
        error: (err) => {
          console.error('Erro ao excluir transação:', err);
        }
      });
  }

  updateTransacao(id: number, updatedData: any) {
    this.http.put(`http://localhost/CRUD_UITEC/backend/routes/api.php/transacoes/${id}`, updatedData)
      .subscribe(
        response => {
          console.log('Transação atualizada com sucesso!', response);
          // Atualize a lista ou faça qualquer outra lógica necessária
        },
        error => {
          console.error('Erro ao atualizar transação:', error);
        }
      );
  }  

  editTransacao(transacao: any) {
    // Lógica para editar a transação aqui. Pode abrir um modal ou redirecionar o usuário para um formulário de edição.
    console.log('Editar transação:', transacao);
  }
}
