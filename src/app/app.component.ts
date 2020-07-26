import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  people = {
    name: 'Thang',
    age: 19
  }

  handler() {
    document.write(
      "Hello" + this.people.name + this.people.age + "tuoi"
    )
  }
}
