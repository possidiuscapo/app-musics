// Component enfant
// la classe Input est nécessaire

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
// import { ALBUM_LISTS } from "../mock-albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [
  fadeInAnimation
  ]
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album | undefined;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  tabDeList!: string[] | undefined;
  albumLists: List[] = [];


  constructor(
    private albumService : AlbumService
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    /* if(this.album !== undefined){
     ALBUM_LISTS.forEach((albumList) => {
       if ( albumList.id === this.album.id) {
         this.tabDeList = albumList.list;
       }
     });
   }*/

    if (this.album) {
      this.tabDeList = this.albumService.getAlbumList(this.album.id)?.list;
    }
  }
  
  play(album: Album) {
    this.onPlay.emit(album)
    console.log("Joueur l'album " + album.name)
  }
}