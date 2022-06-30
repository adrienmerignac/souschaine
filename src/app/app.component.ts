import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* la chaîne de caractère */
  maChaine = '';
  /* la longueur souhaitée */
  longueur = '';
  /* les différents resultats en fonction de la chaîne de caractère et de la longueur */
  resultats: number[] = [];
  erreur = '';


  calculerLesPlusGrandsNombres() {
    console.log('1');
    const maChaineEntier = parseInt(this.maChaine);
    const maLongueurEntier = parseInt(this.longueur);
    if(this.maChaine && this.longueur && !isNaN(maChaineEntier) && !isNaN(maLongueurEntier)) {

      if (maLongueurEntier > maChaineEntier) {
        this.erreur = 'Merci de saisir une longueur inférieur à la chaîne de caractères.';
      }
      else {
        const itérations = maChaineEntier - maLongueurEntier;
        for (let i = 0; i < itérations; i++) {
          this.resultats = [...this.resultats, this.multiplierChaine(this.maChaine.slice(i, maLongueurEntier))]
        }
        console.log(this.resultats);
        this.erreur = '';
        // On procède au calcul et affiche le résultat de la plus grande multiplication
        const plusGrandNombre = Math.max(...this.resultats);
        console.log(plusGrandNombre);
      }
    }
    else {
      this.erreur = 'Merci de saisir des nombres entiers.';
    }
  }

  multiplierChaine(value: string) {
    return value.split('').reduce((acc, currentValue) => {
      if(!acc) {
        acc = parseInt(currentValue);
        return acc;
      }
      acc *= parseInt(currentValue);
      return acc;
    }, 0)
  }

}
