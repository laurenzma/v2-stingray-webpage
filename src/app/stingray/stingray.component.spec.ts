import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StingrayComponent } from './stingray.component';

describe('StingrayComponent', () => {
  let component: StingrayComponent;
  let fixture: ComponentFixture<StingrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StingrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StingrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
