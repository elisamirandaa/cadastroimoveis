import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { ImovelCadastradoComponent } from './imovel-cadastrado/imovel-cadastrado.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cadastro-imovel', component: CadastroImovelComponent},
  { path: 'imovel-cadastrado', component: ImovelCadastradoComponent},
  { path: 'usuario-novo', component: UsuarioNovoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
