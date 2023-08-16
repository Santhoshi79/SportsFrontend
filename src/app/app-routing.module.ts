import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './module--shared/components/header/header.component';
import { AuthGuard } from './module--authentication/guards/auth.guard';
import { GamesComponent } from './module--sports/components/games/games.component';
import { LoginComponent } from './module--authentication/components/login/login.component';
import { RegisterComponent } from './module--authentication/components/register/register.component';
import { NavbarComponent } from './module--shared/components/navbar/navbar.component';
import { ParticipantRegisterComponent } from './module--participant/components/participant-register/participant-register.component';
import { ScheduleComponent } from './module--schedule/components/schedule/schedule.component';
import { TeamlistComponent } from './module--team/components/teamlist/teamlist.component';
import { SportsComponent } from './module--sports/components/sports/sports.component';
import { ParticipantListComponent } from './module--participant/components/participant-list/participant-list.component';
import { FindParticipantComponent } from './module--participant/components/find-participant/find-participant.component';
import { DetailsComponent } from './module--shared/components/details/details.component';
import { MatchesComponent } from './module--schedule/components/matches/matches.component';
import { FindFixtureComponent } from './module--schedule/components/find-fixture/find-fixture.component';
import { FooterComponent } from './module--shared/components/footer/footer.component';
import { RegisterOrganizationComponent } from './module--organization/components/register-organization/register-organization.component';
import { EventListComponent } from './module--schedule/components/event-list/event-list.component';
import { FrontComponent } from './module--core/components/front/front.component';
import { UpdateParticipantComponent } from './module--participant/components/update-participant/update-participant.component';
import { HelpComponent } from './module--shared/components/help/help.component';
import { ContactComponent } from './module--shared/components/contact/contact.component';
import { HomesComponent } from './module--shared/components/homes/homes.component';
import { FindWinnersComponent } from './module--winners/components/find-winners/find-winners.component';
import { CategorysportsComponent } from './module--sports/components/categorysports/categorysports.component';
import { GenerateTeamComponent } from './module--team/components/generate-team/generate-team.component';
import { GenerateScheduleComponent } from './module--schedule/components/generate-schedule/generate-schedule.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"games",component:GamesComponent,canActivate: [AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"navbar",component:NavbarComponent},
 
  {path:"registerparticipant",component:ParticipantRegisterComponent,canActivate: [AuthGuard]},
  {path:"schedule",component:ScheduleComponent,canActivate: [AuthGuard]},
  {path:"teamList",component:TeamlistComponent,canActivate: [AuthGuard]},
  {path:"sports",component:SportsComponent,canActivate: [AuthGuard]},

  {path:"participants",component:ParticipantListComponent,canActivate: [AuthGuard]},
  {path:"findParticipant",component:FindParticipantComponent,canActivate: [AuthGuard]},
  {path:"details",component:DetailsComponent,canActivate: [AuthGuard]},
  {path:"matches",component:MatchesComponent,canActivate: [AuthGuard]},
  {path:"findfixture",component:FindFixtureComponent,canActivate: [AuthGuard]},
  {path:"footer",component:FooterComponent},
  {path:"registerorganization",component:RegisterOrganizationComponent,canActivate: [AuthGuard]},
  {path:"eventlist",component:EventListComponent,canActivate: [AuthGuard]},
  {path:"front",component:FrontComponent},
  {path:"updateParticipant/:participantId",component:UpdateParticipantComponent,canActivate: [AuthGuard]},
  {path:"help",component:HelpComponent,canActivate: [AuthGuard]},
  {path:"contact",component:ContactComponent,canActivate: [AuthGuard]},
  {path:'',component:HomesComponent},
  {path:"findwinners",component:FindWinnersComponent,canActivate: [AuthGuard]},
  {path:"categorysports/:categoryId",component:CategorysportsComponent, canActivate:[AuthGuard]},
  {path:"generateTeam", component:GenerateTeamComponent},
  {path:"generateSchedule",component:GenerateScheduleComponent}
  // {path:"updateParticipant/:participantId",component:UpdateParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
