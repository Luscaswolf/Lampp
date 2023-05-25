import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {
  dataList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any[]>('https://my-json-server.typicode.com/esley/demo/clientes').subscribe(
      (response) => {
        this.dataList = response;
      },
      (error) => {
        console.error('Erro ao obter os dados:', error);
      }
    );
  }
}

