import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysportsComponent } from './categorysports.component';

describe('CategorysportsComponent', () => {
  let component: CategorysportsComponent;
  let fixture: ComponentFixture<CategorysportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
