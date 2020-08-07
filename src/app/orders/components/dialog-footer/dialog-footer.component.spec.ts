import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { DialogFooterComponent } from './dialog-footer.component';
import { By } from '@angular/platform-browser';

describe('DialogFooterComponent', () => {
  let component: DialogFooterComponent;
  let fixture: ComponentFixture<DialogFooterComponent>;
  let el: DebugElement;
  let button: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFooterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should not have selected step', () => {
    expect(component.selectedStep).not.toBeTruthy();
  });

  it('should not have selected order', () => {
    expect(component.orderSelected).not.toBeTruthy();
  });

  it('disable next button shouldn\'t exist', () => {
    expect(component.disableNextButton).not.toBeTruthy();
  });

  it('cancel button should be visible', () => {
    component.selectedStep = 1;
    fixture.detectChanges();

    button = el.query(By.css('.cancel-button')).nativeElement;
    expect(button).toBeTruthy();
  });

  it('next button should be visible, but cancel button shouldn\'t be', () => {
    component.selectedStep = 1;
    component.orderSelected = true;
    fixture.detectChanges();

    expect(el.query(By.css('.cancel-button'))).not.toBeTruthy('Still find cancel button');
    button = el.query(By.css('.next-button')).nativeElement;
    expect(button).toBeTruthy('Cannot find next button');
  });

  it('next and previous buttons should be visible', () => {
    component.selectedStep = 2;
    component.orderSelected = true;
    fixture.detectChanges();

    button = el.query(By.css('.prev-button')).nativeElement;
    expect(button).toBeTruthy('Cannot find previous button');
    button = el.query(By.css('.next-button')).nativeElement;
    expect(button).toBeTruthy('Cannot find next button');
  });

  it('confirm and previous buttons should be visible', () => {
    component.selectedStep = 3;
    fixture.detectChanges();

    button = el.query(By.css('.confirm-button')).nativeElement;
    expect(button).toBeTruthy('Cannot find confirm button');
    button = el.query(By.css('.prev-button')).nativeElement;
    expect(button).toBeTruthy('Cannot find previous button');
    expect(el.query(By.css('.next-button'))).not.toBeTruthy('Still find next button');
    expect(el.query(By.css('.cancel-button'))).not.toBeTruthy('Still find cancel button');
  });

  it('should disable next button', () => {
    component.orderSelected = true;
    component.selectedStep = 2;
    component.disableNextButton = true;
    fixture.detectChanges();

    button = el.query(By.css('.next-button')).nativeElement;
    expect(button.disabled).toBe(true, 'Button still enabled');
  });
});
