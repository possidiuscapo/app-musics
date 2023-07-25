import { Component, OnInit } from '@angular/core';


// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  titlePage: string = "Page principale Albums Music";
  albums: Album[] | undefined = undefined;
  selectedAlbum!:  Album;
  status: string | null = null


  constructor(
    private albumService: AlbumService
   ) { }
  ngOnInit() {
    this.albums = this.albumService.getAlbums()
  }
  onSelect(album: Album) : void{
    this.selectedAlbum = album;

  }
  playParent($event : any){
    // console.log(typeof $event)
    this.status = $event.id;
  }
}

