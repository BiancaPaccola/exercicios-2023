import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideMenu } from 'src/components/side-menu/side-menu.component';
import { HeaderComponent } from 'src/components/header/app-header.component';
import { VideoComponent } from 'src/components/section-video/section-video.component';
import { DetailPanelComponent } from 'src/components/detail-panel/detail-panel.component';
import { ResumeComponentComponent } from 'src/components/resume-component/resume-component.component';
import { DiscussionsComponent } from 'src/components/discussions/discussions.panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenu,
    HeaderComponent,
    VideoComponent,
    DetailPanelComponent,
    ResumeComponentComponent,
    DiscussionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
