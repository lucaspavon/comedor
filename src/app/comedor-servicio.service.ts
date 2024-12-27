import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComedorServicioService {
  urlRequest : string = 'http://localhost:8080/microservicio-comedor/api/v1';
  constructor(private http : HttpClient) { }

  getListadoMenu() : Observable<any>{
    return this.http.get(this.urlRequest + '/menu/listar')
  }

  postMenu(menu : MenuI) : Observable<any>{
    return this.http.post(this.urlRequest + '/menu/alta', menu)
  }

}

export interface MenuI{
  id : number | null;
	nombre: string;
	descripcion : string;
	tipo : string;
	agregados: string;
	estado: string;
	tiempoPreparacion: string;
	fechaPlatoDia: string;
	stock: number;
}
