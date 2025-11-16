import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer-cube',
  imports: [],
  templateUrl: './timer-cube.component.html',
  styleUrl: './timer-cube.component.css',
})
export class TimerCubeComponent implements OnInit {
  time = 0;
  private interval: any;
  scramble: string[] = [];

  ngOnInit(): void {
    this.generateScramble();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.code == 'Space') {
      event.preventDefault();
      if (this.time == 0) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  };

  handleKeyUp = (event: KeyboardEvent) => {
    if (event.code == 'Backspace') {
      event.preventDefault();
      this.resetTimer();
    }
  };

  startTimer() {
    if (this.time > 0) {
      return;
    }
    const startTime = Date.now() - this.time;

    this.interval = setInterval(() => {
      this.time = Date.now() - startTime;
    }, 10);
  }

  stopTimer() {
    if (this.time == 0) {
      return;
    }
    clearInterval(this.interval);
  }

  resetTimer() {
    this.scramble = [];
    this.generateScramble();
    this.stopTimer();
    this.time = 0;
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    } else {
      if (minutes > 0) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds
          .toString()
          .padStart(2, '0')}`;
      } else {
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds
          .toString()
          .padStart(2, '0')}`;
      }
    }
  }

  generateScramble(length: number = 20): string {
    const moves = [' U', ' D', ' L', ' R', ' F', ' B'];
    const modifiers = ['', "'", '2'];
    let lastMove = '';

    for (let i = 0; i < length; i++) {
      let move: string;
      do {
        move = moves[Math.floor(Math.random() * moves.length)];
      } while (move === lastMove); // evita repetir la misma cara

      const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
      this.scramble.push(move + modifier);
      lastMove = move;
    }

    return this.scramble.join(' ');
  }
}
