import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstasListoComponent } from './estas-listo.component';

describe('EstasListoComponent', () => {
  let component: EstasListoComponent;
  let fixture: ComponentFixture<EstasListoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstasListoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstasListoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
