import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavibarComponent } from './navibar.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('NavibarComponent', () => {
  let component: NavibarComponent;
  let fixture: ComponentFixture<NavibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
      imports: [NavibarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
