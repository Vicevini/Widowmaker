import { AuthService } from './formulario/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DadosuserComponent } from './dadosuser/dadosuser.component';
import { ResumouserComponent } from './resumouser/resumouser.component';

// Importando o módulo de formulários reativos do angular
import { ReactiveFormsModule } from '@angular/forms';

import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    DadosuserComponent,
    ResumouserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    // Adicionando o módulo de formulários reativos no módulo da nossa aplicação
    ReactiveFormsModule
  ],
  providers: [ DadosService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
