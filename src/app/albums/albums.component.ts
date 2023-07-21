import { Component, OnInit } from '@angular/core';


// Importez la définition de la classe et les albums
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  titlePage: string = "Page principale Albums Music";
  albums: Album[] = ALBUMS;
  selectedAlbum!:  Album; 

  constructor( ) { }
  ngOnInit() {
  }
  onSelect(mut: Album) : void{
    this.selectedAlbum = mut;
    // console.log("un tableau albums")
  }
  
}

