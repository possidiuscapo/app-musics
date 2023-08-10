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
// à chaque "HOOK" son interface
export class AlbumDetailsComponent implements OnInit, OnChanges {
  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album | undefined; //propriété liée  qui sera passé par le parent
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() onHide: EventEmitter<Album> = new EventEmitter()

  /** tableau qui stock la liste des chansons de l'album */
  tabDeList: string[] | undefined;

  albumLists: List[] = [];


  constructor(
    private albumService: AlbumService
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
      this.albumService.getAlbumList(this.album.id).subscribe(
        (albumL) =>{ this.tabDeList = albumL.list}
      );
    }
  }

  play(songs: Album) {
    this.onPlay.emit(songs)
    this.albumService.switchOn(songs)
    // console.log("Joueur l'album " + this.album.name)
  }

  shuffleAlbum(songs: string[]){
    this.tabDeList = this.albumService.shuffle(songs)
  }
  hide(album: Album) {
    this.onHide.emit(album);
  }  
}