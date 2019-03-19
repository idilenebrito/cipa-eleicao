import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleicaoRoutingModule } from './eleicao-routing.module';
import { CandidatoComponent } from './candidato/candidato.component';

@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    EleicaoRoutingModule
  ]
})
export class EleicaoModule { }
