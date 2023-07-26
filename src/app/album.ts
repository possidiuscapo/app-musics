export interface Album {
        "id": string;
        "ref": string;
        "name": string;
        "title": string;
        "description": string;
        "duration": number;
        "status": string;
        "url"?: string;
        "tags"?: Array<string>;
        "like"?: string;
        "note"?: Array<number>;

}

export interface List {
    "id" : string;
    "list": string[];
  // static id: string;
}

export interface SortAlbumCallback{
  (a:Album, b: Album):number
}