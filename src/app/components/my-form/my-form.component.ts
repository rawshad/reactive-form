import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }
  
}
