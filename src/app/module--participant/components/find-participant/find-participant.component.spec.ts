import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindParticipantComponent } from './find-participant.component';

describe('FindParticipantComponent', () => {
  let component: FindParticipantComponent;
  let fixture: ComponentFixture<FindParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
