import { Component } from '@angular/core';
import { CadastroImovelService } from '../cadastro-imovel.service';

@Component({
  selector: 'app-imovel-cadastrado',
  templateUrl: './imovel-cadastrado.component.html',
  styleUrls: ['./imovel-cadastrado.component.scss']
})
export class ImovelCadastradoComponent {

  imoveis: any[] = [];

  constructor(private cadastroImovelService: CadastroImovelService) { }

  ngOnInit(): void {
    this.imoveis = this.cadastroImovelService.getImoveis();
  }
}