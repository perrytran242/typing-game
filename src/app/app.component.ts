import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit.';

  onInputReceived(event) {
    const splitTitle = this.title.split(' ');
    const { data } = event;

    console.log(data);
  }
}

