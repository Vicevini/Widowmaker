import { Usuario } from './../../shared/models/Usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(Usuario: Usuario){

    if(Usuario.email === 'usuario@email.com' &&
    Usuario.senha === '123456'){
      this.usuarioAutenticado = true;


      this.router.navigate(['/dadosuser/'])
    } else{
      this.usuarioAutenticado = false;
    }
  }
}
