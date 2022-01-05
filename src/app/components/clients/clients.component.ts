import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clientes: Array<Cliente> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/authentication/backend/clients').subscribe({
        next: data => {
            this.clientes = data;
            
        },
        error: error => {
            console.log(error);
            
        }
    })
  }

}
