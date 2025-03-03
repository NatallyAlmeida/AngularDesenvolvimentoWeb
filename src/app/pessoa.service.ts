import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas = [
    [{ id: 1, nome: 'Santos', endereco: 'Rua 1', cep: '12345-678', uf: 'SP', ativo: true }],
  [{ id: 2, nome: 'Maria', endereco: 'Rua 2', cep: '98765-432', uf: 'RJ', ativo: false }],
  [{ id: 3, nome: 'Pedro', endereco: 'Rua 3', cep: '11111-222', uf: 'MG', ativo: true }]
  ];

  url = environment

  constructor(private http: HttpClient) { }


  buscarTodasPessoas(){
    this.http.get(this.url + 'pessoas')
    return this.pessoas;
  }
}
