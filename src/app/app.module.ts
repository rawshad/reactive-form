import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//form modules
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './components/my-form/my-form.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileBuilderComponent } from './components/profile-builder/profile-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ProfileEditorComponent,
    ProfileBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
