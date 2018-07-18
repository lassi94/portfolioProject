import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SkillsComponent} from './skills/skills.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'skills', component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
