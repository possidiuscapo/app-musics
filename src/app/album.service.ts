import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album, List, SortAlbumCallback } from './album';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClient } from "@angular/common/http";
// import { ALBUMS, ALBUM_LISTS } from './mock-alb';
// import { SearchComponent } from "./search/search.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  // static getAlbumList(id: any) {
  //   throw new Error('Method not implemented.');
  // }
  // subject
  private _albumsUrl: string = environment.albumUrl;
  private _albumListUrl: string = environment.albumListUrl;

  //un observable qui notifi au abonné la page actuelle
  subjectAlbum = new Subject<Album>;
  sendCurrentNumberPage = new Subject<number>()

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.sort(
          (a: Album, b: Album) => b.duration - a.duration
        )
      })
    )
  }

  /** */
  getAlbum(id: string): Observable<Album> | undefined {
    return this.http.get<Album>(this._albumsUrl  + id).pipe(
      map((album: Album) => album));
  }

  /** */
  getAlbumList(id: string): Observable<List> {
    return this.http.get<List>(this._albumListUrl + id)
  }

  count() {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => albums.length)
    )
  }

  // order(): AlbumService{
  //   this._albums.sort((a,b)=>a.duration - b.duration)
  //   return this
  // }

  /**
  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback)
    return this
  }

  limite(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end);
    return this;
  }
*/

  // paginate(start: number, end : number): Album[]{
  //   return this._albums
  //   .slice(start,end)
  //   .sort((a:Album, b: Album) =>b.duration - a.duration)
  // }
  // Recherche des albums et  afficher
  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.filter(album => {
          return album.title
            .toLowerCase()
            .includes(word.trim().toLowerCase());
        })
      })
    )
      
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
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums) => albums.sort(
          (a, b) => b.duration - a.duration
        ).slice(start, end)
      ));
  }


  shuffle(songs: string[]) {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }
  
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }
  /**
   * Méthode qui permet de cha,ger le startus d'un album a "On"
   * @param album : l'album dont le startus doit passer à "On"
   */
  switchOn(album: Album) : void {
    album.status = "on";
    this.http.put<void>(this._albumsUrl + "/" + album.id, album)
    /**return this.http.get<Album[]>(this._albumListUrl).pipe(
      map(
        (albums) => albums.forEach(a => {
          if (a.id === album.id) {
            a.status = "on"
            album.status = "on"
          } else {
            a.status = "off"
          }
        }))
   
    this.subjectAlbum.next(album)*/
  }

  /**
   * Méthode qui permet de cha,ger le startus d'un album a "Off"
   * @param album : l'album dont le startus doit passer à "Off"
   */
  switchOff(album: Album) {
    album.status= "off";
    this.http.put<void>(`${this._albumsUrl}/${album.id}`,album).subscribe(() =>{})
    /**
     * renvoi un observable; est ne s'exécute
     * donc
     */
    // this._albums.forEach(a => a.status = "off"
    //     // console.log(a.status)
    // )
 
  }
}
