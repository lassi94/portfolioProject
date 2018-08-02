import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SkillsComponent} from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'skills', component: SkillsComponent
  },
  {
    path:'blog', component: BlogComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'post', component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
