import { Component } from '@angular/core';

@Component({
  selector: 'app-primal',
  templateUrl: './primal.component.html',
  styleUrls: ['./primal.component.css']
})
export class PrimalComponent {

  public nomeFilme: string = ''
  public fotoFilme: string = ''

  exibirFoto(): void {
    // Associando os nomes dos filmes às suas respectivas fotos
    const filmesFotos: any = {
      'Aranhaverso': 'https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
      'Filme 2': 'caminho/foto2.jpg',
      'Filme 3': 'caminho/foto3.jpg',
      // Adicione mais filmes e fotos conforme necessário
    };

    this.fotoFilme = filmesFotos[this.nomeFilme];

}}
