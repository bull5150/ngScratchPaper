import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridComponent } from './aggrid.component';

describe('AggridComponent', () => {
  let component: AggridComponent;
  let fixture: ComponentFixture<AggridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
