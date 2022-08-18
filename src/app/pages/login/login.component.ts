import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  inputForm!: FormGroup;
  roles: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.inputForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['', Validators.required],
    });
  } //valida el formulario

  ngOnInit(): void {
    this.roles = [
      {
        id: 'organizador',
        text: 'Organizador',
      },
      {
        id: 'participante',
        text: 'Participante',
      },
    ];
  }

  iniciarSesion(): void {
    let role = this.inputForm.get('roles')?.value;

    if (this.inputForm.status === 'VALID') {
      console.log('Form ->', this.inputForm.value);

      switch (role) {
        case 'organizador':
          this.router.navigate(['/home/dashboard']);
          localStorage.setItem('user', role);
          break;

        case 'participante':
          this.router.navigate(['/home/dashboard-participante']);
          localStorage.setItem('user', role);
          break;

        default:
          break;
      }
    } else {
      console.log(this.inputForm);
    }
  }
}
