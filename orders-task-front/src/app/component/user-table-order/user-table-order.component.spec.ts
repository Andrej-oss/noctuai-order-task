import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableOrderComponent } from './user-table-order.component';

describe('UserTableOrderComponent', () => {
  let component: UserTableOrderComponent;
  let fixture: ComponentFixture<UserTableOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
