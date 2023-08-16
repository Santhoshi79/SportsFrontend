import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFixtureComponent } from './find-fixture.component';

describe('FindFixtureComponent', () => {
  let component: FindFixtureComponent;
  let fixture: ComponentFixture<FindFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFixtureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
