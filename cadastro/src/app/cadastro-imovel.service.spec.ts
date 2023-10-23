import { TestBed } from '@angular/core/testing';

import { CadastroImovelService } from './cadastro-imovel.service';

describe('CadastroImovelService', () => {
  let service: CadastroImovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroImovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
