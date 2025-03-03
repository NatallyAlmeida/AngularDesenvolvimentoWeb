import { Component, Input } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Listagem-de-Pessoas-Angular';

  constructor(private pessoaService: PessoaService){}

  pessoas: any[]= [];
  
    ngOnInit() {
      this.pessoas = this.pessoaService.buscarTodasPessoas();
    }

  }


