import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrength } from '../validators/passwordStrength.validator';


@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css'
})
export class PasswordFormComponent {
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    passwordStrength(/^[0-9]{8,}$/, "easy"),
    passwordStrength(/^[A-Za-z]{8,}$/, "easy"),
    passwordStrength(/^[!@#$%^&*]{8,}$/, "easy"),  //symbols !@#$%^&*
    passwordStrength(/^(?=.*[0-9])(?=.*[a-zA-z])[0-9a-zA-Z]{8,}$/, "medium"), 
    passwordStrength(/^(?=.*[0-9])(?=.*[!@#$%^&*])[0-9!@#$%^&*]{8,}$/, "medium"),
    passwordStrength(/^(?=.*[!@#$%^&*])(?=.*[a-zA-z])[a-zA-Z!@#$%^&*]{8,}$/, "medium"),
    passwordStrength(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-z])[0-9a-zA-Z!@#$%^&*]{8,}$/, "strong")
  ]);

  currentColors = ["red", "red", "red"];

  colors: { [key: string]: string[] } = {
    "required": ["grey", "grey", "grey"],
    "minlength": ["red", "red", "red"],
    "easy": ["red", "grey", "grey"],
    "medium": ["yellow", "yellow", "grey"],
    "strong": ["green", "green", "green"],
  }

  ngOnInit() {
    this.password.valueChanges.subscribe(data => this.changeColor(this.password))
  }

  changeColor(pass: FormControl) {
    let key: string = Object.keys(pass.errors!)[0];
    this.currentColors = this.colors[key];
  }
}
