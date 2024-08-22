import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBlockComponent } from './container-block.component';

describe('ContainerBlockComponent', () => {
  let component: ContainerBlockComponent;
  let fixture: ComponentFixture<ContainerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
