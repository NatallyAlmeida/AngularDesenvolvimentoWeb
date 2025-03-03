import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarCadastrarService {

  editarPessoas: any[] = [];
  constructor() { }

    editarPessoa(pessoas: any) {
        this.editarPessoas.push(pessoas);
        console.log('Pessoa Editada', pessoas);
    }
  }

