import { Component, OnInit } from '@angular/core';
// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

// import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
  titlePage: string = "Page principale Albums Music";
  albums: Album[] | undefined = undefined;
  selectedAlbum:  Album | undefined;
  status: string | null = null;
  compt: number = 1;


  constructor(
    private albumService: AlbumService
   ) { }

  ngOnInit(): void {
    this.albumService
    .paginate(0, this.albumService.paginateNumberPage())
    .subscribe({
      next: (alb: Album[]) =>{this.albums = alb}
    })

    console.log(this.albums)
                                                //  .order((a:Album, b: Album) => a.duration - b.duration)
                                                // //  .limite(0, 10)
                                                //  .limite(0, this.albumService.count())
                                                //  .getAlbums()
  }
  onHideAlbum(){
    this.compt++
  }
  onSelect(album: Album) : void{
    this.selectedAlbum = album;
  }

  playParent($event : any){
    // console.log(typeof $event)
    this.status = $event.id;
  }
  
  search($event: Album[]){
    // console.log(`Parent sera mis à jour et affichera seulement les albums ${$event}`)
    if ($event){
      this.albums = $event
    }
  }

  resetSelectedAlbum() {
    this.selectedAlbum = undefined;
  }

  onSetPaginate($event: { start: number, end: number }) {
    // Récupérer les albums compris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
    .subscribe({
      next: (al: Album[]) => this.albums = al
    })
  }
}

