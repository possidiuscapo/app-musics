// Component enfant
// la classe Input est nécessaire

import { Component, OnInit, Input } from '@angular/core';
import { Album, List } from '../album';
import { ALBUM_LISTS } from "../mock-albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album;
  tabDeList!: string[] | undefined;

  constructor() { }

  ngOnInit() {
    console.log(this.album); // pour l'instant c'est undefined ... C'est normal
  }

  ngOnChanges() {
    if(this.album !== undefined){
      ALBUM_LISTS.forEach((albumList) => {
        if ( albumList.id === this.album.id) {
          this.tabDeList = albumList.list;
        }
      });
    }
  }

}