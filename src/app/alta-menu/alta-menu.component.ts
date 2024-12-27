import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComedorServicioService, MenuI } from '../comedor-servicio.service';

@Component({
  selector: 'app-alta-menu',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alta-menu.component.html',
  styleUrl: './alta-menu.component.css'
})
export class AltaMenuComponent {
  altaFormulario: FormGroup<any>;
  diasDeLaSemana : string[] = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
  menu : MenuI = {
    id: null,
    nombre: '',
    descripcion: '',
    tipo: '',
    agregados: '',
    estado: '',
    tiempoPreparacion: '',
    fechaPlatoDia: '',
    stock: 0
  };
  constructor( private menuService: ComedorServicioService){
    this.altaFormulario = new FormGroup({
      nombre: new FormControl(null),
      descripcion : new FormControl(null),
      tipo : new FormControl(null),
      agregados: new FormControl(null),
      estado: new FormControl(null),
      tiempoPreparacion: new FormControl(null),
      fechaPlatoDia: new FormControl(null),
      stock: new FormControl(null)
    });
  }

  guardarForm(){
    this.menu.nombre = this.altaFormulario.get('nombre')?.value;
    this.menu.descripcion = this.altaFormulario.get('descripcion')?.value;
    this.menu.tipo = this.altaFormulario.get('tipo')?.value;
    this.menu.agregados = this.altaFormulario.get('agregados')?.value;
    this.menu.estado = this.altaFormulario.get('estado')?.value;
    this.menu.tiempoPreparacion = this.altaFormulario.get('tiempoPreparacion')?.value;
    this.menu.fechaPlatoDia = this.altaFormulario.get('fechaPlatoDia')?.value;
    this.menu.stock = this.altaFormulario.get('stock')?.value;
    this.menuService.postMenu(this.menu).subscribe(value => {
      console.log(value)
      this.altaFormulario.reset();
    })

  }

  limpiarForm(){
    this.altaFormulario.reset();
  }

}
