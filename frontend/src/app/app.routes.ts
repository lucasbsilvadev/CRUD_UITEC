import { Routes } from '@angular/router';

//importação de rotas dos componentes
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';
import { TransacaoListComponent } from './components/transacao-list/transacao-list.component';

export const routes: Routes = [
  { path: 'transacao-form', component: TransacaoFormComponent },
  { path: 'transacao-list', component: TransacaoListComponent },
  { path: '', redirectTo: '/transacao-list', pathMatch: 'full' } // Redireciona para a lista de transações ao acessar a raiz
];
