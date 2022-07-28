import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventreserveComponent } from './eventreserve.component';

describe('EventreserveComponent', () => {
  let component: EventreserveComponent;
  let fixture: ComponentFixture<EventreserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventreserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
