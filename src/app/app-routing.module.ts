import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { FacturaComponent } from './components/factura/factura.component';

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "facturas", component: FacturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
