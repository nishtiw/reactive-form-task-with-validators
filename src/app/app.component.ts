import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-directive-practice';

  // isFirstName = false;

  make = "Maruti Suzuki";

  getKia() {
    return "Kia";
  }

  // cars = ["Hyundai", "Kia", "Tata", "Maruti Suzuki"];
}
