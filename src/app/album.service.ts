import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, map, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Album, List, SortAlbumCallback } from './album';
import { AlbumsComponent } from './albums/albums.component';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
// import { SearchComponent } from "./search/search.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  subjectAlbum = new Subject<Album>();

  private _albumsUrl: string = environment.albumUrl;
  private _albumListUrl: string = environment.albumListUrl;

  //un observable qui notifi au abonné la page actuelle
  sendCurrentNumberPage = new Subject<number>()

  constructor(private https: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.https.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.sort(
          (a: Album, b: Album) => b.duration - a.duration
        );
      })
    );
  }

  getAlbum(id: string): Observable<Album> | undefined {
    return this.https.get<Album>(this._albumsUrl + '/' + id)
      .pipe(
        map((album: Album) => album)
      );
  }

  getAlbumList(id: string): Observable<List> {
    return this.https.get<List>(this._albumListUrl + '/' + id)
  }

  count(): Observable<number> {
    return this.https.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => albums.length)
    );
  }

  // order(): AlbumService{
  //   this._albums.sort((a,b)=>a.duration - b.duration)
  //   return this
  // }
  // order(callback: SortAlbumCallback): AlbumService {
  //   this._albums.sort(callback)
  //   return this
  // }

  // limite(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end);
  //   return this;
  // }


  // paginate(start: number, end : number): Album[]{
  //   return this._albums
  //   .slice(start,end)
  //   .sort((a:Album, b: Album) =>b.duration - a.duration)
  // }
  // Recherche des albums et  afficher


  search(word: string): Observable<Album[]> {
    return this.https.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.filter(album => {
          return album.title
            .toLowerCase()
            .includes(word.trim().toLowerCase());
        })
      }))
  }
  // serchV2(word: string): Album[]{
  //    let re = new RegExp(word.trim(),"g");
  //   return this._albums.filter(album => album.title.match(re))
  // }

  // searchAlbum(word:string) : Album[]{
  //   return this._albums.filter(album => album)
  // }

  paginateNumberPage(): number {
    return environment.numberPage;
  }
  paginate(start: number, end: number): Observable<Album[]> {
    return this.https.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        const res = _.values(albums)
        console.log("sans lodash", albums)
        console.log("avec lodash", res)

        return res;
      }),
      map((albums: Album[]) => albums.sort(
        (a, b) => b.duration - a.duration
      ).slice(start, end))
    );
  }

  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }
  /**
   * Méthode qui permet de changer le status d'un album à "on"
   * @param album : l'album dont le status doit passer à "on"
  */

  shuffle(songs: string[]) {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }

  switchOn(album: Album): void {
    album.status = "on";
    // le code ci-dessous s'exécute car on y souscrit
    this.https.put<void>(this._albumsUrl + '/' + album.id, album)
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.warn(err),
        complete: () => this.subjectAlbum.next(album)
      })
  }

  /**
    * Méthode qui permet de changer le status d'un album à "off"
    * @param album : l'album dont le status doit passer à "off"
    */
  switchOff(album: Album): void {
    album.status = "off";
    /**
     * renvoi un observable, est ne s'exécute
     * donc qu'à la souscription. Du coup,
     * il faut il souscrire, pour l'exécuter
     */
    this.https.put<void>(`${this._albumsUrl}/${album.id}`, album)
      .subscribe(() => { });
  }
}
