import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginpageComponent } from './loginpage.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to administration/statistique for user with role 1 and state 1', () => {
    // Mock user data
    component.usersdata = [
      { id: 1, role: 1, etat: 1, email: 'test@example.com', password: 'test' },
      // Add other user data as needed
    ];

    // Mock form data
    component.formData = { email: 'test@example.com', pass: 'test' };

    spyOn(router, 'navigateByUrl');

    component.submitFunction(new Event('submit'));

    // Expectations
    expect(router.navigateByUrl).toHaveBeenCalledWith('/administration/statistique/1');
  });

  it('should navigate to EspaceProf for user with role 2 and state 1', () => {
    // Similar setup as the previous test for a different scenario

    spyOn(router, 'navigateByUrl');

    component.submitFunction(new Event('submit'));

    // Expectations
    expect(router.navigateByUrl).toHaveBeenCalledWith('/EspaceProf/2');
  });

  it('should navigate to EspaceApprenant for user with role 3 and state 1', () => {
    // Similar setup as the previous tests for a different scenario

    spyOn(router, 'navigateByUrl');

    component.submitFunction(new Event('submit'));

    // Expectations
    expect(router.navigateByUrl).toHaveBeenCalledWith('/EspaceApprenant/3');
  });

  // Add more tests as needed for other scenarios

  it('should show error message for incorrect login or password', () => {
    // Mock user data
    component.usersdata = [
      { id: 1, role: 1, etat: 1, email: 'test@example.com', password: 'test' },
      // Add other user data as needed
    ];

    // Mock form data with incorrect credentials
    component.formData = { email: 'test@example.com', pass: 'incorrect_password' };

    spyOn(component, 'affichermessage');

    component.submitFunction(new Event('submit'));

    // Expectations
    expect(component.affichermessage).toHaveBeenCalledWith('error', 'Oops', ' login ou Mot de passe Incorrecte');
  });

});
