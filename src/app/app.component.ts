import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../node_modules/@angular/forms';
import { Usuario } from '../shared/models/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formularioDeLogin: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormularioDeLogin();
  }

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
