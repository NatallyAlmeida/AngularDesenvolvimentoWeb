import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditarCadastrarService } from 'src/app/service/editar-cadastrar.service';

@Component({
  selector: 'app-cadastrar-editar-pessoas',
  templateUrl: './cadastrar-editar-pessoas.component.html',
  styleUrls: ['./cadastrar-editar-pessoas.component.scss']
})
export class CadastrarEditarPessoasComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {}
  editarCadastrarService= inject(EditarCadastrarService);
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}

