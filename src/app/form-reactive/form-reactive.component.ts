import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
  animations: [fadeInAnimation]
})
export class FormReactiveComponent {
  styles: string[] = ["Zouk", "Jazz", "Rap", "Hip-Hop", "Punk", "Pop", "Classique", "Rouba",];
  constructor(private fb: FormBuilder) { }
  musicForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    //
    auteur: ['', [Validators.required, Validators.minLength(5)]],
    style: [''],
  })


  get name() { return this.musicForm.get('name') }
  get auteur() { return this.musicForm.get('auteur') }
  get style() { return this.musicForm.get('style') }



  /**
   * musicForm = new FormGroup({
        name: new FormControl(''),
        auteur: new FormControl(''),
        style: new FormControl(this.styles[0]),
  })
  search = new FormControl('')
*/

  onSubmit() {
    console.warn(this.musicForm.value)
  }
}
