import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transacao-item',
  templateUrl: './transacao-item.component.html',
  styleUrls: ['./transacao-item.component.css']
})
export class TransacaoItemComponent {
  @Input() transacao: any;
  @Output() delete = new EventEmitter<number>();  // Evento para deletar
  @Output() edit = new EventEmitter<any>();      // Evento para editar

  deleteTransacao(id: number) {
    this.delete.emit(id);  // Emitir o evento para o pai com o ID da transação
  }

  editTransacao(transacao: any) {
    this.edit.emit(transacao);  // Emitir o evento para o pai com a transação
  }
}
