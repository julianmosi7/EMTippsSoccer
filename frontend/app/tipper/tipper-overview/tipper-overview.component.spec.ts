import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipperOverviewComponent } from './tipper-overview.component';

describe('TipperOverviewComponent', () => {
  let component: TipperOverviewComponent;
  let fixture: ComponentFixture<TipperOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipperOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipperOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
