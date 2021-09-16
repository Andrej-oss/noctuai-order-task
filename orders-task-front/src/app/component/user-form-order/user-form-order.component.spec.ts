import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormOrderComponent } from './user-form-order.component';

describe('UserFormOrderComponent', () => {
  let component: UserFormOrderComponent;
  let fixture: ComponentFixture<UserFormOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
