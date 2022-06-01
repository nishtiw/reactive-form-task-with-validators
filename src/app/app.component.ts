import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Register';
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    course: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]{1,}')])),
  })

  user2 = new FormControl('',Validators.required);

  objects: any = [];

  loginUser() {
    if(this.loginForm.controls['user'].valid) {
      (document.getElementById('n') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('n') as HTMLFormElement).style.color = "red";
      return false;
    }

    if(this.loginForm.controls['course'].valid) {
      (document.getElementById('c') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('c') as HTMLFormElement).style.color = "red";
      return false;
    }

    if (this.loginForm.status == 'INVALID') {
      return false;
    }
    else {
      this.objects.push(this.loginForm.value);
      console.warn(this.loginForm.value);
      console.log(this.objects);
      return true;
    }
  }


}
