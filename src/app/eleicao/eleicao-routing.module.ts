import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidato/candidato.component';

const routes: Routes = [
  {path: '', component:CandidatoComponent},
  {path: '/voto', component: null},
  {path: '/cadastro', component: null},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleicaoRoutingModule { }
