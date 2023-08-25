import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
   /**Une variable permettant d'afficher ou non, le composant audio-player */
  showplayer: boolean = false

  /** Une variable représentant l'album joué */
  playerAlbum!: Album;

  /** Une variable représentant le nombre total de sons dans l'album */
  total: number = 1;

  /**Une variable représentant le numéro du son joué actuellement (1/4) */
  currentSongNumber: number = 1;

  /**Une variable permet de donner le pourcentarge de son joué (25% pour 1/4, 50% pour 2/4) */
  ratio: number = 0;


  constructor(
    private albumService: AlbumService
  ) { }


  ngOnInit() {
    // souscrire au sujet "subjectAlbum" pour recevoir
    this.albumService.subjectAlbum.subscribe({
      next: (a: Album) => {
        this.playerAlbum = a;
        // console.log('album reçu',a);
        // desormais c'est afficher le composant
        this.showplayer = true
        // le son joué en 1er est le n°1
        this.currentSongNumber = 1
        let duration: number = this.playerAlbum.duration
        this.total = Math.floor(duration / 120)
        this.ratio = (100 / this.total)
        /** le pourcentarge  ajourter après */
        let step = this.ratio; // il faut à chaque 
        /** augmenter le niveau de la barre  de progression chaque 2min (et don chqeu 120 * 1000 millisecond) */
        const intervalId = setInterval(()=> {
          this.currentSongNumber++
          this.ratio += step;
          if (this.ratio > 100){
            clearInterval(intervalId)
            this.showplayer = false;
            this.albumService.switchOff(this.playerAlbum)
          }
        },1000)
      }
    })
  }
}
