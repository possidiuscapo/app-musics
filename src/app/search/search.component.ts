import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  albumService: any;
  constructor(
    
  ) { }
  // ngOnInit() { }
  onSubmit(form: NgForm): void {
    // récupération des données du formulaire
    console.log(this.albumService.searchV2(form.value.word));
    
  }
}
