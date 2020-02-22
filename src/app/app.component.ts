import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  typingChallenge = 'Lorem ipsum dolor sit';
  enteredText = '';
  correct = 'green';
  error = 'red';

  ngOnInit() {
  }

  onInputReceived(event) {
    const { value } = event.target;
    this.enteredText = value;
  }

  returnSplitWord() {
    return this.typingChallenge.split('').map(val => {
      return {letter: val, check: false};
    });
  }
}
// user clicks and shows value
