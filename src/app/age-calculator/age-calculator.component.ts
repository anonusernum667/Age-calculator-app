import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent {
  day: string = '';
  month: string = '';
  year: string = '';
  dayError: string = '';
  monthError: string = '';
  yearError: string = '';
  ageInYears: string = '--';
  ageInMonths: string = '--';
  ageInDays: string = '--';

  calculateAge(): void {
    let isValid = true;

    // Validate day
    if (!/^([1-9]|0[1-9]|[12][0-9]|3[01])$/.test(this.day)) {
      this.dayError = 'Enter a valid day';
      isValid = false;
    } else {
      this.dayError = '';
    }

    // Validate month
    if (!/^(0?[1-9]|1[0-2])$/.test(this.month)) {
      this.monthError = 'Enter a valid month';
      isValid = false;
    } else {
      this.monthError = '';
    }

    // Validate year
    if (!/^((19|20)\d\d)$/.test(this.year)) {
      this.yearError = 'Enter a valid year';
      isValid = false;
    } else {
      this.yearError = '';
    }

    if (isValid) {
      const birthDate = new Date(Number(this.year), Number(this.month) - 1, Number(this.day));
      const currentDate = new Date();
      const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();

      this.ageInYears = Math.floor(ageInMilliseconds / 31536000000).toString();
      this.ageInMonths = Math.floor((ageInMilliseconds % 31536000000) / 2628000000).toString();
      this.ageInDays = Math.floor(((ageInMilliseconds % 31536000000) % 2628000000) / 86400000).toString();
    } else {
      this.ageInYears = '--';
      this.ageInMonths = '--';
      this.ageInDays = '--';
    }
  }

}
