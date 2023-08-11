import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
// Importation du modile d'animation
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AdminModule } from './admin/admin.module';
import { ShareModule } from './share.module';
import { AlbumComponent } from './admin/album/album.component';
import { Routes } from '@angular/router';

const albumsRoutes: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'album/:albumId', component: AlbumDescriptionComponent},
  {path: 'admin/album', component: AlbumComponent},


  /*========= ATTENTION DANGER ==========*/
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumsComponent,
    AlbumDescriptionComponent,
    AppComponent,
    SearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    AudioPlayerComponent
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
