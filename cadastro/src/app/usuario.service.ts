import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  cadastrarUsuario(usuario: any): void {
    // Lógica para cadastrar e salvar o novo usuário
    // Por exemplo, você pode armazenar os dados em um banco de dados ou em uma API
    console.log('Usuário cadastrado:', usuario);
  }
}
