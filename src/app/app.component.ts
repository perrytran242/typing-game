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
  correct = 'green';
  error = 'red';

  ngOnInit() {
    // console.log('letter:', this.returnSplitWord());
  }

  onInputReceived(event) {

    const { value } = event.target;
    if (this.splitWord[this.counter].letter === value[this.counter]) {
      this.splitWord[this.counter].check = true;
    }


    this.counter++;
    console.log(this.counter);
    console.log(this.splitWord);

  }

  returnSplitWord() {
    return this.typingChallenge.split('').map(val => {
      return {letter: val, check: false};
    });
  }
}
// user clicks and shows value
