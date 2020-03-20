import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTempComponent } from './current-temp.component';

describe('CurrentTempComponent', () => {
  let component: CurrentTempComponent;
  let fixture: ComponentFixture<CurrentTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
