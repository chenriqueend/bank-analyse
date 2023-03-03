import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseCreditComponent } from './analyse-credit.component';

describe('AnalyseCreditComponent', () => {
  let component: AnalyseCreditComponent;
  let fixture: ComponentFixture<AnalyseCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
