import { CepService } from './../cep.service';
import { CadastroImovelService } from './../cadastro-imovel.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent {

  selected = '';
  fotosSelecionadas: File[] = [];
  fotosPreview: string[] = [];


  constructor(
    private formBuilder: FormBuilder, 
    private cadastroImovelService: CadastroImovelService,
    private CepService: CepService, 
    private router: Router) {
      
    // this.formImovel = this.formBuilder.group({
    //   informacoes: ['', Validators.required],
    //   valor: ['', Validators.required],
    //   telefone: ['', Validators.required],
    //   cep: new FormControl (null, Validators.required),
    //   logradouro: ['', Validators.required],
    //   numero: ['', Validators.required],
    //   bairro: ['', Validators.required], 
    //   localidade: ['', Validators.required],
    //   uf: ['', Validators.required],
    //   tipo: [''],
    // });
  }

  formImovel = new FormGroup({
    informacoes: new FormControl(null, Validators.required),
    valor: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, [Validators.required]),
    logradouro: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    localidade: new FormControl(null, Validators.required),
    uf: new FormControl(null, Validators.required),
    tipo: new FormControl('', Validators.required),
  })
  
  
  getCep() {
    if (this.formImovel.controls.cep.valid) {
      this.CepService.getCep(this.formImovel.controls.cep.value)
        .pipe(take(1))
        .subscribe((res: any) => {
          this.formImovel.patchValue({
            logradouro: res.logradouro,
            bairro: res.bairro,
            localidade: res.localidade,
            uf: res.uf
          });
        });
    }
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

  onSubmit(): void {
    if (this.formImovel.valid) {
      const novoImovel = this.formImovel.value;
      this.cadastroImovelService.cadastrarImovel(novoImovel);
      alert('Imovel cadastrado com sucesso!');
      this.formImovel.reset();      
      this.router.navigate(["home"])
    }
  }
}