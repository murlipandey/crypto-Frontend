import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainBoxComponent } from './complain-box.component';

describe('ComplainBoxComponent', () => {
  let component: ComplainBoxComponent;
  let fixture: ComponentFixture<ComplainBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
