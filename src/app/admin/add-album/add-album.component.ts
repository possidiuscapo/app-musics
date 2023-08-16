import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  albumForm!: FormGroup;
  constructor(private fb: FormBuilder, private aS: AlbumService) { }

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      id: '',
      name: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      title: ['', [
        Validators.required
      ]],
      ref: ['', [
        Validators.required,
        // Validators.pattern('\\w{5}'),
        Validators.pattern('[a-zA-Z0-9]{5}')
      ]],
      duration: ['', [
        Validators.required,
        Validators.pattern('\\d{3}'),
        Validators.max(900),
      ]],
      description: ['', [
        Validators.required
      ]],
      tags: new FormArray([
        this.fb.control(' ')
      ]),
      status: ['off', [
        Validators.required
      ]],
    })
  }


  //Getters qui sront util
  get name() { return this.albumForm.get('name') }
  get ref() { return this.albumForm.get('ref') }
  get title() { return this.albumForm.get('title') }
  get duration() { return this.albumForm.get('duration') }
  get description() { return this.albumForm.get('description') }
  get tags() { return this.albumForm.get('tags') as FormGroup }

  onSubmit(): void {
    console.log(this.albumForm.value)
  }

  onTags(): void{
    
  }
}
