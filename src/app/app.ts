import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

@Component({
  selector: 'ar-root',
  standalone: true,
  imports: [RouterOutlet, LandingPage],
  template: '<ar-landing-page></ar-landing-page>',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Allan Reymond Portfolio');
}
