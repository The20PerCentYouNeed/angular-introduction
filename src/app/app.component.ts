import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

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

  users: Person[] = [
    {
      givenName: 'John',
      surname: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jane',
      surname: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jim',
      surname: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jill',
      surname: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jake',
      surname: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Judy',
      surname: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Jack',
      surname: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Julie',
      surname: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Jerry',
      surname: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    },
    {
      givenName: 'June',
      surname: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    },
  ];
}
