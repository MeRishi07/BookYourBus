import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllbusdetailsComponent } from './user-allbusdetails.component';

describe('UserAllbusdetailsComponent', () => {
  let component: UserAllbusdetailsComponent;
  let fixture: ComponentFixture<UserAllbusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllbusdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllbusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
