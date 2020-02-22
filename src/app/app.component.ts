import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  typingChallenge = 'Lorem ipsum dolor sit';
  compareWord = '';
  counter = 0;
  splitWord = this.returnSplitWord();
  enteredText = '';
  correct = 'green';
  error = 'red';

  ngOnInit() {
    // console.log('letter:', this.returnSplitWord());
  }

  onInputReceived(event) {
    console.log(event);
    const { value } = event.target;

    console.log(value);
    if (this.splitWord[this.counter].letter === value[this.counter]) {
      this.splitWord[this.counter].check = true;
    }
    this.enteredText = value;
  }

  returnSplitWord() {
    return this.typingChallenge.split('').map(val => {
      return {letter: val, check: false};
    });
  }
}
// user clicks and shows value
