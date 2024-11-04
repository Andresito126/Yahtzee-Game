import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPageComponent } from './dados/dados-page/dados-page.component';

const routes: Routes = [
  { path: '', component: DadosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
