import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMaintanenceComponent } from './total-maintanence.component';

describe('TotalMaintanenceComponent', () => {
  let component: TotalMaintanenceComponent;
  let fixture: ComponentFixture<TotalMaintanenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMaintanenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalMaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
