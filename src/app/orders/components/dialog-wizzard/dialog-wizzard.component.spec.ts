import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DialogWizzardComponent } from './dialog-wizzard.component';

describe('DialogWizzardComponent', () => {
  let component: DialogWizzardComponent;
  let fixture: ComponentFixture<DialogWizzardComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWizzardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWizzardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 3 spans', () => {
    fixture.detectChanges();
    const spans = el.queryAll(By.css('span'));
    expect(spans.length).toBe(3);
  });

  it('should not have selected step', () => {
    expect(component.selectedStep).not.toBeTruthy();
  });

  it('second step in view should be selected', () => {
    component.selectedStep = 2;
    fixture.detectChanges();

    const secondSpan = el.queryAll(By.css('span'))[1];
    expect(secondSpan.classes.selected).toBe(true);
  });
});
