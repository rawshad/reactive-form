import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-builder',
  templateUrl: './profile-builder.component.html',
  styleUrls: ['./profile-builder.component.scss']
})
export class ProfileBuilderComponent {
      profileBuilder = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
        aliases: this.fb.array([this.fb.control('')])
      });

      constructor(private fb: FormBuilder) {}

      get aliases() {
        return this.profileBuilder.get('aliases') as FormArray;
      }

      addAlias() {
        this.aliases.push(this.fb.control(''));
      }

      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileBuilder.value);
      }
}
