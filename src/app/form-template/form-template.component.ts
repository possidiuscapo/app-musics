import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { Music } from '../Music';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
  animations: [fadeInAnimation]
})
export class FormTemplateComponent {
  styles = ["Zouk", "Jazz", "Rap", "Hip-Hop", "Punk", "Pop", "Classique", "Rouba",];

  musicModel = new Music('', '', this.styles[1])
  submitted: boolean = false;

  onSubmit(form: any) {
    // console.log(form)
    this.submitted = true
  }
}
