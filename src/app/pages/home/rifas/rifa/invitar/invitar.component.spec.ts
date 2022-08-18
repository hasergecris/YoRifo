import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitarComponent } from './invitar.component';

describe('InvitarComponent', () => {
  let component: InvitarComponent;
  let fixture: ComponentFixture<InvitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
