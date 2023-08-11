import { Component } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums!: Album[] ;
  constructor(private aS: AlbumService) {}
  ngOnInit(): void {
    this.aS.getAlbums().subscribe({
      next: (alb: Album[]) => {this.albums = alb}
    })
}
}
