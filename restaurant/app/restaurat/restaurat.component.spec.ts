import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauratComponent } from './restaurat.component';

describe('RestauratComponent', () => {
  let component: RestauratComponent;
  let fixture: ComponentFixture<RestauratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
