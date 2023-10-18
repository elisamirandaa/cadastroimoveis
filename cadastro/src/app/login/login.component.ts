import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario:string="";
  senha:string="";
  mensagemLogin:string="";

constructor(private router:Router){

}

  btnLogin():void{
    
    if(this.usuario=="teste" && this.senha=="teste"){
      this.mensagemLogin="Login efetuado com sucesso";
      this.router.navigate(["home"])
    }
    else{
      this.mensagemLogin="Login inválido";
    }
  }
}
