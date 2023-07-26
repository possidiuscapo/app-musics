import { Injectable } from '@angular/core';
import { Album, List, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';
// import { SearchComponent } from "./search/search.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  static getAlbumList(id: any) {
    throw new Error('Method not implemented.');
  }

  private _albums: Album[] = ALBUMS;
  private _albumsList: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[] {
    return this._albums
  }
  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id)
  }
  getAlbumList(id: string): List | undefined {
    return this._albumsList.find(list => list.id === id)
  }

  count() {
    return this._albums.length
  }

  // order(): AlbumService{
  //   this._albums.sort((a,b)=>a.duration - b.duration)
  //   return this
  // }
  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback)
    return this
  }

  limite(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end);
    return this;
  }


  // paginate(start: number, end : number): Album[]{
  //   return this._albums
  //   .slice(start,end)
  //   .sort((a:Album, b: Album) =>b.duration - a.duration)
  // }
// Recherche des albums et  afficher
  search(word: string): Album[] {
    return this._albums
      .filter(album => {
        return album.title
          .toLowerCase()
          .includes(word.trim().toLowerCase());
      })
  }
  // serchV2(word: string): Album[]{
  //    let re = new RegExp(word.trim(),"g");
  //   return this._albums.filter(album => album.title.match(re))
  // }

  // searchAlbum(word:string) : Album[]{
  //   return this._albums.filter(album => album)
  // }
}
