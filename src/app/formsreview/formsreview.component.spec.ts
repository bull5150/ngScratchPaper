import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsreviewComponent } from './formsreview.component';

describe('FormsreviewComponent', () => {
  let component: FormsreviewComponent;
  let fixture: ComponentFixture<FormsreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
