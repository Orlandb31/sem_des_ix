import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherEventComponent } from './publisher-event.component';

describe('PublisherEventComponent', () => {
  let component: PublisherEventComponent;
  let fixture: ComponentFixture<PublisherEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
