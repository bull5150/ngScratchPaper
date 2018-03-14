import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridredComponent } from './aggridred.component';

describe('AggridredComponent', () => {
  let component: AggridredComponent;
  let fixture: ComponentFixture<AggridredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggridredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
