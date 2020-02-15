import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  typingChallenge = 'Lorem ipsum dolor sit.';
  compareWord = '';
  counter = 0;

  onInputReceived(event) {
    const { data } = event;
    console.log('letter typed:', data);
    this.compareWord += data;

    if (data === ' ') {
      console.log(this.compareWord);
      // this.counter++;
      console.log(this.counter);
    }
  }

  returnSplitWord() {
    return this.typingChallenge.split(' ');
  }
}

