import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordFormComponent } from './password-form/password-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PasswordFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-strength';
}