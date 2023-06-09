import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-primal></app-primal>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Projeto de Buscas';
}
