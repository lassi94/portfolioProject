import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatSidenavModule, MatButtonModule, MatIconModule, MatIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './post.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule, 
    MatIconModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}