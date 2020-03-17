import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-resumouser',
  templateUrl: './resumouser.component.html',
  styleUrls: ['./resumouser.component.css']
})
export class ResumouserComponent implements OnInit {

  detalhe: Array<any>;
  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.dadosService.listar().subscribe(infos => this.detalhe = infos);
  }
}
