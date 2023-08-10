import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
// Importation du modile d'animation

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginateComponent } from './paginate/paginate.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

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
    path: 'album/:albumId',
    component: AlbumDescriptionComponent
  },
  // {
  //   path: 'openclose',
  //   component: OpenCloseComponent
  // },

  /*========= ATTENTION DANGER ==========*/
  {
    path: '**',
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
    PaginateComponent,
    FirstCompoComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    // NgModule,
    FormsModule,
    BrowserAnimationsModule,

    /**
     * Methode utilise pour  les toutes dans 
     */
    RouterModule.forRoot(albumsRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
