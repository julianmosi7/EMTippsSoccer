import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippedMatchesComponent } from './tipped-matches.component';

describe('TippedMatchesComponent', () => {
  let component: TippedMatchesComponent;
  let fixture: ComponentFixture<TippedMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippedMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
