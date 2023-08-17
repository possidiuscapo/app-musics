import { Component } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums!: Album[];
  constructor(private aS: AlbumService, public albumService: AlbumService) { }
  ngOnInit(): void {
    this.aS.getAlbums().subscribe({
      next: (alb: Album[]) => { this.albums = alb }
    });
    this.albumService
      .paginate(0, this.albumService.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => { this.albums = alb }
      })
  }
  onSetPaginate($event: { start: number, end: number }) {
    // Récupérer les albums compris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
    .subscribe({
      next: (al: Album[]) => this.albums = al
    })
  }
}
