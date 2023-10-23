import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroImovelService {

  imoveis: any[] = [];

  constructor() { }

  cadastrarImovel(imovel: any): void {
    this.imoveis.push(imovel);
    console.log('Imóvel cadastrado:', imovel);
  }

  getImoveis(): any[] {
    return this.imoveis;
  }
}