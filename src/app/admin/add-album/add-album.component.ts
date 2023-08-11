import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  constructor (private fb: FormBuilder, private aS : AlbumService){}
}
