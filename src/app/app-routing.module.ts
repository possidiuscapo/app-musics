import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './admin/album/album.component';

const albumsRoutes: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'album/:albumId', component: AlbumDescriptionComponent},
  {path: 'admin', component: AlbumComponent},

  /*========= ATTENTION DANGER ==========*/
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(albumsRoutes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
