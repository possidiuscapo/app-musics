import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes =[
  {path : 'admin/add', component: AddAlbumComponent}
]

@NgModule({
  declarations: [
    AlbumComponent,
    AddAlbumComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ShareModule,
    // ReactiveFormsModule
  ],
  exports: [AlbumComponent, ]
})
export class AdminModule { }
