import { TestBed } from '@angular/core/testing';

import { EditarCadastrarService } from './editar-cadastrar.service';

describe('EditarCadastrarService', () => {
  let service: EditarCadastrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarCadastrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
