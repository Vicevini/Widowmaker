import { AbstractControl } from '../../../node_modules/@angular/forms';

export class Validacoes {

  static SenhasCombinam(controle: AbstractControl) {
    let senha = controle.get('senha').value;

  }
}
