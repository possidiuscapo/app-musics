import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// Importation du modile d'animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';


const albumsRoutes: Routes = [
  {
    //quel route appelé pour afficher
    path: 'albums',
    // Quel component a utilisé
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:id',
    component: AlbumDescriptionComponent
  },
  {
    path: 'openclose',
    component: OpenCloseComponent
  },

  {
    path: '***',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    OpenCloseComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // NgModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(albumsRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
