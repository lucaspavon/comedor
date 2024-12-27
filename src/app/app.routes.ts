import { Routes } from '@angular/router';
import { ListadoMenuComponent } from './listado-menu/listado-menu.component';
import { AltaMenuComponent } from './alta-menu/alta-menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ListadoMenuComponent},
    { path: 'altaMenu', component : AltaMenuComponent}
];
