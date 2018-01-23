import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-solution',
  templateUrl: './test-solution.component.html',
  styleUrls: ['./test-solution.component.css']
})
export class TestSolutionComponent implements OnInit {
  licencePlateNumber: string;
  dayDate: string;
  currentTime;
  dayAvailable: boolean = true;
  showResult: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onConsultar() {
    this.dayAvailable = true;
    this.getDayLastDigit(this.dayDate, this.getLastDigit());
  }

  getLastDigit(): number {
    return +this.licencePlateNumber.split('').pop();
  }

  getDayLastDigit(day: string, lastDigit: number) {
    let lastDigitAvailable: number[];
    switch (day.toUpperCase()) {
      case ('MONDAY'):
        if (lastDigit == 1 || lastDigit == 2) {
          if (this.compareTime(this.currentTime, '07:00', '09:30') || this.compareTime(this.currentTime, '16:00', '19:30')) {
            this.dayAvailable = false;
          }

        }
        break;
      case ('TUESDAY'):
        if (lastDigit == 3 || lastDigit == 4) {
          if (this.compareTime(this.currentTime, '07:00', '09:30') || this.compareTime(this.currentTime, '16:00', '19:30')) {
            this.dayAvailable = false;
          }
        }
        break;
      case ('WEDNESDAY'):
        if (lastDigit == 5 || lastDigit == 6) {
          if (this.compareTime(this.currentTime, '07:00', '09:30') || this.compareTime(this.currentTime, '16:00', '19:30')) {
            this.dayAvailable = false;
          }
        }
        break;
      case ('THURSDAY'):
        if (lastDigit == 7 || lastDigit == 8) {
          if (this.compareTime(this.currentTime, '07:00', '09:30') || this.compareTime(this.currentTime, '16:00', '19:30')) {
            this.dayAvailable = false;
          }
        }
        break;
      case ('FRIDAY'):
        if (lastDigit == 9 || lastDigit == 0) {
          if (this.compareTime(this.currentTime, '07:00', '09:30') || this.compareTime(this.currentTime, '16:00', '19:30')) {
            this.dayAvailable = false;
          }
        }
        break;
      default: this.dayAvailable = false;
    }
    this.showResult = true;
  }

  compareTime(time_input: string, time_init: string, time_end: string): boolean {

    let time_in: string[] = time_input.split(':');
    let arrTimeInit: string[] = time_init.split(':');
    let arrTimeEnd: string[] = time_end.split(':');
    if (+time_in[0] > +arrTimeInit[0] && +time_in[0] < +arrTimeEnd[0]) {
      return true;
    }
    else if (+time_in[0] == +arrTimeInit[0]) {
      if (+time_in[1] >= +arrTimeInit[1])
        return true;
      else
        return false;
    }
    else if (+time_in[0] == +arrTimeEnd[0]) {
      if (+time_in[1] <= +arrTimeEnd[1])
        return true;
      else
        return false;
    }
  }

}
