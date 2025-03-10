import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';

const routes: Routes = [
  {
    path: 'cadastrar-pessoa', component: CadastrarEditarPessoasComponent
  },
  {
    path: 'editar-pessoa/:id', component: CadastrarEditarPessoasComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
