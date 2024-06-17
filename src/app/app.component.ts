import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudRepository } from '@mst/srv';
import { LocationComponent } from '@mst/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationComponent, AsyncPipe, JsonPipe],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <mst-ui-location [value]="location"></mst-ui-location>
    <pre>{{ activities$ | async | json }}</pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'mst-ng-app';
  location = 'New York, NY';
  #repository = inject(CrudRepository);
  activities$ = this.#repository.getAll('activities');
}
