import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { LocationsComponent } from './locations/locations.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';
import { StoryComponent } from './story/story.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    GiftcardComponent,
    LocationsComponent,
    PrivacyPolicyComponent,
    CareersComponent,
    ContactUsComponent,
    TermsComponent,
    StoryComponent,
    RewardsComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
