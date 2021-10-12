import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageHistoryComponent } from './page-history.component';

describe('PageHistoryComponent', () => {
    let component: PageHistoryComponent;
    let fixture: ComponentFixture<PageHistoryComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageHistoryComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
