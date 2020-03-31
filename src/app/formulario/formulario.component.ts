import { Usuario } from './../../shared/models/Usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

/*
  private Usuario: Usuario = new Usuario();

*/
  formularioDeLogin: FormGroup;

  constructor(private fb: FormBuilder) {}

  // , private AuthService: AuthService


  ngOnInit(): void {
    this.criarFormularioDeLogin();
  }

  /*fazerLogin(){
    console.log(this.Usuario);
    this.AuthService.fazerLogin(this.Usuario);
  }
*/

  enviarDados() {
    const dadosFormulario = this.formularioDeLogin.value;
  }

  criarFormularioDeLogin() {
    this.formularioDeLogin = this.fb.group({

      email: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
    },
    );
  }

  get email() {
    return this.formularioDeLogin.get('email');
  }
  get password() {
    return this.formularioDeLogin.get('password');
  }
}
