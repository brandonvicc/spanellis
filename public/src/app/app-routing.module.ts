import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RewardsComponent } from './rewards/rewards.component';
import { StoryComponent } from './story/story.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'giftcard', component:GiftcardComponent},
  {path: 'locations', component:LocationsComponent},
  {path: 'privacypolicy', component:PrivacyPolicyComponent},
  {path: 'careers', component:CareersComponent},
  {path: 'contactus', component:ContactUsComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'story', component:StoryComponent},
  {path: 'rewards', component:RewardsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
