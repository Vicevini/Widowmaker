import { Component, OnInit } from '@angular/core';
import { DetalhesUsuario } from '../../shared/models/detalhesusuario';

@Component({
  selector: 'app-dadosuser',
  templateUrl: './dadosuser.component.html',
  styleUrls: ['./dadosuser.component.css']
})
export class DadosuserComponent implements OnInit {

  detalhe:DetalhesUsuario[];
  constructor() { }

  ngOnInit() {
    this.getDetalhesUsuario();
  }

  getDetalhesUsuario(){
    this.detalhe=[{
      name : 'Augusto',
      sobrenome : 'Limeira',
      cpf : '49878532649',
      rg : '987373548',
      email : 'limeiraaugusto@live.com',
      celular : '11968594132',
      idade : '20',
      cargo : 'gerente',
      temposervico : '2'
    },
    ]
  }
}
