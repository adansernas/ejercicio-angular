import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegimenFiscal } from '../../models/regimen-fiscal.model';
import { ProductoServicio } from '../../models/producto-servicio.model';
import { Factura } from '../../models/factura.model';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  public regimenFiscals: Array<RegimenFiscal> = [];
  public productoServicios: Array<ProductoServicio> = [];
  public factura: Factura = {

  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/authentication/backend/catalogos').subscribe({
      next: data => {
        let { regimenFiscals, productoServicios } = data;

        this.regimenFiscals = regimenFiscals;
        this.productoServicios = productoServicios;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  guardarFactura(){
    
    this.http.post<any>('http://localhost:8081/authentication/backend/facturas', this.factura).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
    
  }



}
