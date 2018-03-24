import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridgreenComponent } from './aggridgreen.component';

describe('AggridgreenComponent', () => {
  let component: AggridgreenComponent;
  let fixture: ComponentFixture<AggridgreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggridgreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridgreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
