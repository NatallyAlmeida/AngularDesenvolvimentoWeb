import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EditarCadastrarService } from 'src/app/service/editar-cadastrar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() pessoas: any = [];

  editarCadastrarService= inject(EditarCadastrarService);

  editarPessoas() {
    this.editarCadastrarService.editarPessoa(this.pessoas);
  }
  }



