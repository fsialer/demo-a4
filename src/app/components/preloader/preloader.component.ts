import { Component, Input } from '@angular/core';

@Component({
  selector: 'preloader',
  template: `
  <!-- PRE-LOADER -->
  <div class="center" [hidden]="!formSubmit">
      <div class="preloader-wrapper big active" style="margin-top: 35%">
          <div class="spinner-layer spinner-blue">
              <div class="circle-clipper left">
                  <div class="circle"></div>
              </div>
              <div class="gap-patch">
                  <div class="circle"></div>
              </div>
          </div>
          <div class="circle-clipper right">
              <div class="circle"></div>
          </div>
      </div>
  </div>
  <!--/ PRE-LOADER -->
  `
})
export class PreloaderComponent {
  @Input() formSubmit: boolean;
}