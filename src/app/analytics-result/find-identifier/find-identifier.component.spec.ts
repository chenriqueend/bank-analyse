import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIdentifierComponent } from './find-identifier.component';

describe('FindIdentifierComponent', () => {
  let component: FindIdentifierComponent;
  let fixture: ComponentFixture<FindIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindIdentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
