import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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
