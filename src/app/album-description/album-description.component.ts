import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations:[fadeInAnimation]
})

export class AlbumDescriptionComponent implements OnInit {
  album: Album | undefined;
  constructor(
    private route: ActivatedRoute, // récupérez le service route
    private aS: AlbumService // récupérez le service
  ) { }
  ngOnInit() {
    // permet de récupérer l'identifiant
    const id = this.route.snapshot.params['albumId'];

    this.album = this.aS.getAlbum(id)
    console.log(this.album)
    // TODO récupérez le détail d'un album
  }
}
