import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltableComponent } from './htmltable.component';

describe('HtmltableComponent', () => {
  let component: HtmltableComponent;
  let fixture: ComponentFixture<HtmltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmltableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
