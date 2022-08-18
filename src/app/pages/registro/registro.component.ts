import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formRegistro!: FormGroup;

  constructor(private readonly fb: FormBuilder, private ruta: Router) {}

  ngOnInit(): void {
    this.formRegistro = this.initForm();
  }

  onSubmit(): void {
    if (this.formRegistro.status === 'VALID') {
      this.ruta.navigate(['login']);
    } else {
      console.log(this.formRegistro);
    }

    console.log('Form ->, this.formRegistro.value');
    
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   '(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-zd$@$!%?&].{10,}'
          // ),
        ],
      ],
      acepto_terminos: ['', [Validators.required]],
    });
  }
}
