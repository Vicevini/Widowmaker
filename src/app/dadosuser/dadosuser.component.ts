import { Component, OnInit } from '@angular/core';
import { DetalhesUsuario } from '../../shared/models/detalhesusuario';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-dadosuser',
  templateUrl: './dadosuser.component.html',
  styleUrls: ['./dadosuser.component.css']
})
export class DadosuserComponent implements OnInit {

  detalhe: Array<any>;


  constructor(private dadosService: DadosService) { }


  ngOnInit() {
    this.listar();
  }



  listar() {
    this.dadosService.listar().subscribe(infos => this.detalhe = infos);
  }
}
