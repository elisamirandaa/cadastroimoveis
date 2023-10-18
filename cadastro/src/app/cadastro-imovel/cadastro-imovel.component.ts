import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent {

  formImovel: FormGroup;
  fotosSelecionadas: File[] = [];
  fotosPreview: string[] = [];


  constructor(private formBuilder: FormBuilder) {
    this.formImovel = this.formBuilder.group({
      informacoes: ['', Validators.required],
      valor: ['', Validators.required],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      tipo: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }

   onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.fotosSelecionadas.push(file);

      // Cria uma pré-visualização da foto
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fotosPreview.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // lógica para enviar o formulário
  }
}