import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService  {
  static getAlbumList(id: any) {
    throw new Error('Method not implemented.');
  }

  private _albums: Album[] = ALBUMS;
  private _albumsList: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[]{
    return this._albums.sort((a:Album, b:Album)=> b.duration- a.duration)
  }
  getAlbum(id: string): Album | undefined{
    return this._albums.find(album => album.id === id)
  }
  getAlbumList(id: string) : List | undefined{
    return this._albumsList.find(list => list.id === id)
  }
}
