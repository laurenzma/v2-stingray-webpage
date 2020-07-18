import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmobileComponent } from './aboutmobile.component';

describe('AboutmobileComponent', () => {
  let component: AboutmobileComponent;
  let fixture: ComponentFixture<AboutmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
