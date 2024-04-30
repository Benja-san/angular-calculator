import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  firstRandomNumber: number | undefined = undefined;
  secondRandomNumber: number | undefined = undefined;
  result: number | undefined | string;

  // generateFirstNumber(): void {
  //   this.firstRandomNumber = Math.floor(Math.random() * 100);
  // }

  // generateSecondNumber(): void {
  //   this.secondRandomNumber = Math.floor(Math.random() * 100);
  // }

  generateNumber(numberToGenerate: number): void {
    numberToGenerate === 1
      ? (this.firstRandomNumber = Math.floor(Math.random() * 100))
      : numberToGenerate === 2
      ? (this.secondRandomNumber = Math.floor(Math.random() * 100))
      : (this.result = 'Stop messing with numbers !');
  }

  calcul(operator: string): void {
    if (this.firstRandomNumber && this.secondRandomNumber) {
      switch (operator) {
        case '+':
          this.result = this.firstRandomNumber + this.secondRandomNumber;
          break;
        case '-':
          this.result = this.firstRandomNumber - this.secondRandomNumber;
          break;
        case '*':
          this.result = this.firstRandomNumber * this.secondRandomNumber;
          break;
        case '/':
          this.result = this.firstRandomNumber / this.secondRandomNumber;
          break;
        default:
          this.result = 'Wrong operator';
      }
    } else {
      this.result = 'Veuillez générer vos numéros';
    }
  }
}
