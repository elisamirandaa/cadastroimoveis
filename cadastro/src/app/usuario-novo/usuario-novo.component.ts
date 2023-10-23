import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.scss']
})
export class UsuarioNovoComponent {

  formUsuarioNovo: FormGroup;
  usuarioNovo: string="";
  senha: string="";
  mensagemUsuarioNovo: string="";


constructor(private usuarioService: UsuarioService, private router: Router, private formBuilder: FormBuilder) {
  this.formUsuarioNovo = this.formBuilder.group({
    usuarioNovo: ['', Validators.required],
    senha: ['', Validators.required],
  });
}


  btnUsuarioNovo():void{
    // Criar um objeto com as informações do novo usuário
    const novoUsuario = {
      nome: this.usuarioNovo,
      senha: this.senha
    };

    // Chamar o método cadastrarUsuario do serviço UsuarioService
    this.usuarioService.cadastrarUsuario(novoUsuario);

    // Limpar os campos após o cadastro
    this.usuarioNovo = "";
    this.senha = "";

    // Exibir mensagem de sucesso    
    alert('Usuário cadastrado com sucesso!');
    this.router.navigate(["login"])
  }
}