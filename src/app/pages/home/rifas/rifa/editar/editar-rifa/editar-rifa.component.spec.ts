import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRifaComponent } from './editar-rifa.component';

describe('EditarRifaComponent', () => {
  let component: EditarRifaComponent;
  let fixture: ComponentFixture<EditarRifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRifaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
