import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsButtonComponent } from './bs-button.component';

describe('BsButtonComponent', () => {
  let component: BsButtonComponent;
  let fixture: ComponentFixture<BsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
