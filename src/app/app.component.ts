import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Register';
  loginForm = new FormGroup({
    user: new FormControl(''), 
    course: new FormControl(''),
  })

  objects: any = [];
  
  loginUser()
  {
    this.objects.push(this.loginForm.value);
    console.warn(this.loginForm.value);
    console.log(this.objects);
  }
 

}
