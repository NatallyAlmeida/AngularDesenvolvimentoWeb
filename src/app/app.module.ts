import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';
import { HttpClientModule} from '@angular/common/http';
import { PessoaService } from './pessoa.service';
import { EditarCadastrarService } from './service/editar-cadastrar.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    CadastrarEditarPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PessoaService,EditarCadastrarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
