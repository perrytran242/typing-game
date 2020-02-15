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
    const splitWord = this.returnSplitWord();
    console.log(splitWord);
    const { data } = event;
    this.compareWord += data;

    if (data === ' ') {
      if (this.compareWord.trim() === splitWord[this.counter].word) {
        console.log('compare word:', this.compareWord);
        this.counter++;
        this.compareWord = '';
      }
    }
  }

  returnSplitWord() {
    return this.typingChallenge.split(' ').map(val => {
      return {word: val, check: false};
    });
  }
}

