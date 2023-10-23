import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCadastradoComponent } from './imovel-cadastrado.component';

describe('ImovelCadastradoComponent', () => {
  let component: ImovelCadastradoComponent;
  let fixture: ComponentFixture<ImovelCadastradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImovelCadastradoComponent]
    });
    fixture = TestBed.createComponent(ImovelCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
