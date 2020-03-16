import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosuserComponent} from 'src/app/dadosuser/dadosuser.component';
import { ResumouserComponent } from 'src/app/resumouser/resumouser.component';
import { FormularioComponent } from 'src/app/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component:FormularioComponent},
  {path:'dadosuser', component:DadosuserComponent},
  {path: 'resumouser', component:ResumouserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
