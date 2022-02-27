import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAdminComponent } from './match-admin.component';

describe('MatchAdminComponent', () => {
  let component: MatchAdminComponent;
  let fixture: ComponentFixture<MatchAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
