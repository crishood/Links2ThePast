import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addLinkSuccess } from '../../store/links.actions';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
})
export class UrlInputComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.buildForm();
  }

  ngOnInit(): void {}
  addUrl(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.store.dispatch(addLinkSuccess(value));
    } else {
      this.form.markAllAsTouched();
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      urlName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$' // fragment locator
          ),
        ],
      ],
    });
  }
  get urlName() {
    return this.form.get('urlName');
  }
  get url() {
    return this.form.get('url');
  }
}
