import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumComponent } from './admin/album/album.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * L'ensemble des routes de notre application
 */
const albumsRoutes: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'album/:albumId', component: AlbumDescriptionComponent},
  {path: 'admin/album', component: AlbumComponent},
  {path: 'template', component: FormTemplateComponent},
  {path: 'reactive', component: FormReactiveComponent},


  /*========= ATTENTION DANGER ==========*/
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(albumsRoutes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
