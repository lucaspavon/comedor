import { Component } from '@angular/core';
import { ComedorServicioService, MenuI } from '../comedor-servicio.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-menu',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listado-menu.component.html',
  styleUrl: './listado-menu.component.css'
})
export class ListadoMenuComponent {
  horarioActual : number = 0;
  horarioLimite : number = 18;
  horarioInicial : number = 8;
  diasDeLaSemana : string[] = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
  numeroDeDiaDeLaSemana : number = 0;
  diaActual : string = '';

  menu : MenuI[] = []
  formularioFiltros: FormGroup<any>;

  constructor(private comedorService: ComedorServicioService){
    this.formularioFiltros = new FormGroup({
      tipo: new FormControl('')
    });
    this.horarioActual = new Date().getHours();
    this.diaActual = this.diasDeLaSemana[new Date().getDay()];
  }
  
  consultarMenu(){
    this.comedorService.getListadoMenu().subscribe(value =>{
      this.menu = value
    });
  }

  filtrarPorTipo(){
    this.comedorService.getListadoMenu().subscribe(value =>{
      this.menu = value
      if(this.formularioFiltros.get('tipo')?.value !== ''){
        this.menu = this.menu.filter( menu => menu.tipo === this.formularioFiltros.get('tipo')?.value.trim());
      }
    });
  }
}
