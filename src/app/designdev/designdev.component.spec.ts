import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigndevComponent } from './designdev.component';

describe('DesigndevComponent', () => {
  let component: DesigndevComponent;
  let fixture: ComponentFixture<DesigndevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesigndevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigndevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
