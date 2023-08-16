import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatTree, MatTreeModule } from '@angular/material/tree';

import { MatMenuModule } from '@angular/material/menu';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatSortModule } from '@angular/material/sort';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './module--authentication/components/login/login.component';
import { RegisterComponent } from './module--authentication/components/register/register.component';
import { FrontComponent } from './module--core/components/front/front.component';
import { HomeComponent } from './module--core/components/home/home.component';
import { HomesComponent } from './module--shared/components/homes/homes.component';
import { RegisterOrganizationComponent } from './module--organization/components/register-organization/register-organization.component';
import { FindParticipantComponent } from './module--participant/components/find-participant/find-participant.component';
import { ParticipantListComponent } from './module--participant/components/participant-list/participant-list.component';
import { ParticipantRegisterComponent } from './module--participant/components/participant-register/participant-register.component';
import { UpdateParticipantComponent } from './module--participant/components/update-participant/update-participant.component';
import { EventListComponent } from './module--schedule/components/event-list/event-list.component';
import { FindFixtureComponent } from './module--schedule/components/find-fixture/find-fixture.component';
import { GenerateScheduleComponent } from './module--schedule/components/generate-schedule/generate-schedule.component';
import { MatchesComponent } from './module--schedule/components/matches/matches.component';
import { ScheduleComponent } from './module--schedule/components/schedule/schedule.component';
import { ContactComponent } from './module--shared/components/contact/contact.component';
import { DetailsComponent } from './module--shared/components/details/details.component';
import { FooterComponent } from './module--shared/components/footer/footer.component';
import { HeaderComponent } from './module--shared/components/header/header.component';
import { HelpComponent } from './module--shared/components/help/help.component';
import { NavbarComponent } from './module--shared/components/navbar/navbar.component';
import { CategorysportsComponent } from './module--sports/components/categorysports/categorysports.component';
import { GamesComponent } from './module--sports/components/games/games.component';
import { SportsComponent } from './module--sports/components/sports/sports.component';
import { GenerateTeamComponent } from './module--team/components/generate-team/generate-team.component';
import { TeamlistComponent } from './module--team/components/teamlist/teamlist.component';
import { FindWinnersComponent } from './module--winners/components/find-winners/find-winners.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FrontComponent,
    HomeComponent,
    HomesComponent,
    RegisterOrganizationComponent,
    FindParticipantComponent,
    ParticipantListComponent,
    ParticipantRegisterComponent,
    UpdateParticipantComponent,
    EventListComponent,
    FindFixtureComponent,
    GenerateScheduleComponent,
    MatchesComponent,
    ScheduleComponent,
    ContactComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    HelpComponent,
    NavbarComponent,
    CategorysportsComponent,
    GamesComponent,
    SportsComponent,
    GenerateTeamComponent,
    TeamlistComponent,
    FindWinnersComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTreeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSortModule,
    OAuthModule.forRoot(),
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '176163667174-nlam3196341imgj8b6q439tkiqo0cqiv.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
