import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreatePublicationComponent } from './create-publication.component';

describe('CreatePublicationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CreatePublicationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreatePublicationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'publications-and-comments'`, () => {
    const fixture = TestBed.createComponent(CreatePublicationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('publications-and-comments');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CreatePublicationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to publications-and-comments!');
  });
});
