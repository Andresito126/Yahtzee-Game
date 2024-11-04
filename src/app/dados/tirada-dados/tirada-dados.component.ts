import { Component } from '@angular/core';

@Component({
  selector: 'app-tirada-dados',
  templateUrl: './tirada-dados.component.html',
  styleUrl: './tirada-dados.component.css'
})
export class TiradaDadosComponent {
  lanzadas: number[] = [0, 0, 0, 0, 0]; 
  bloqueados: boolean[] = [false, false, false, false, false]; 
  totales: number[] = [0, 0, 0, 0, 0];
  contadores: number[] = [0, 0, 0, 0, 0]; 
  
  tiro(index: number) {
    if (!this.bloqueados[index] && this.contadores[index] < 3) { 
      const nuevoValor = this.getDadoRandom(); 
      this.lanzadas[index] = nuevoValor; 
      this.totales[index] += nuevoValor; 
      this.contadores[index]++; 
    }
  }

  reseteoDado() {
    this.lanzadas = [0, 0, 0, 0, 0];
    this.bloqueados = [false, false, false, false, false]; 
    this.totales = [0, 0, 0, 0, 0]; 
    this.contadores = [0, 0, 0, 0, 0]; 
  }

  getDadoRandom(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  bloquearDado(index: number) {
    this.bloqueados[index] = true; 
  }
  
  desbloquearDado(index:number){
    this.bloqueados[index] = false
  }
}