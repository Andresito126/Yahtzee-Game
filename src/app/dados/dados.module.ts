import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPageComponent } from './dados-page/dados-page.component';
import { TiradaDadosComponent } from './tirada-dados/tirada-dados.component';



@NgModule({
  declarations: [
    DadosPageComponent,
    TiradaDadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DadosModule { }
