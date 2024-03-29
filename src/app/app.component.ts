import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Christodoulos';

  person0 = {
    givenName: 'Christodoulos',
    surname: 'Fragkoudakis',
    age: 0x37,
    email: 'chfrag@aueb.gr',
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: 'Christodoulos',
    surname: 'Fragkoudakis',
    age: 0x37,
    email: 'chfrag@aueb.gr',
    address: 'New York, Greece'
  };
}
