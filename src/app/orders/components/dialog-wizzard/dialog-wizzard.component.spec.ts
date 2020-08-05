import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWizzardComponent } from './dialog-wizzard.component';

describe('DialogWizzardComponent', () => {
  let component: DialogWizzardComponent;
  let fixture: ComponentFixture<DialogWizzardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWizzardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWizzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
