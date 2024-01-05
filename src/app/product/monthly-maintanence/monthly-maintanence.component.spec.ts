import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMaintanenceComponent } from './monthly-maintanence.component';

describe('MonthlyMaintanenceComponent', () => {
  let component: MonthlyMaintanenceComponent;
  let fixture: ComponentFixture<MonthlyMaintanenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyMaintanenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyMaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
