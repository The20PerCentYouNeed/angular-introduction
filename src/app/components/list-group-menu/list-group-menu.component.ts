import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input Example', routerLink: 'component-input-example'},
    {text: '@for Directive Example', routerLink: 'for-directive-example'},
    {text: 'Event Bind Example', routerLink: 'event-bind-example'}
  ];
}
