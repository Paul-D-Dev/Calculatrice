import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponentComponent } from './keyboard-component.component';

describe('KeyboardComponentComponent', () => {
  let component: KeyboardComponentComponent;
  let fixture: ComponentFixture<KeyboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
