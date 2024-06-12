import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationComponent } from '@mst/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <mst-ui-location [value]="location"></mst-ui-location>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'mst-ng-app';
  location = 'New York, NY';
}
