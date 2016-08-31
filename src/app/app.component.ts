import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<h1>Test Header 1</h1>
    <app-other></app-other>
`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
