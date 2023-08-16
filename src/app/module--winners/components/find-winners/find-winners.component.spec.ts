import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWinnersComponent } from './find-winners.component';

describe('FindWinnersComponent', () => {
  let component: FindWinnersComponent;
  let fixture: ComponentFixture<FindWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
