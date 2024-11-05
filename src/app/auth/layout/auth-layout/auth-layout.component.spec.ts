import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayouthComponent } from './auth-layout.component';

describe('AuthLayouthComponent', () => {
  let component: AuthLayouthComponent;
  let fixture: ComponentFixture<AuthLayouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayouthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
