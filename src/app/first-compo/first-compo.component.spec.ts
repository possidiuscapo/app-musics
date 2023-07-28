import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompoComponent } from './first-compo.component';

describe('FirstCompoComponent', () => {
  let component: FirstCompoComponent;
  let fixture: ComponentFixture<FirstCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCompoComponent]
    });
    fixture = TestBed.createComponent(FirstCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
