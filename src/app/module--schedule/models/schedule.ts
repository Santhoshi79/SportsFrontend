export class Fixture {
    fixtureId: number;
    event: {
      eventId: any;
      eventName: string;
      sportsCategory: {
        categoryId: string;
        categoryName: string;
      };
      startTime: string;
      endTime: string;
    };
    sports: {
      sportsId: any;
      sportsName: string;
      sportsCategory: {
        categoryId: string;
        categoryName: string;
      };
      minAgeGroupId: {
        ageGroupId: number;
        ageGroupName: string;
      };
      maxAgeGroupId: {
        ageGroupId: number;
        ageGroupName: string;
      };
      maxParticipants: number;
    };
    team1Id: {
      teamId: any;
      teamName: string;
      sports: {
        sportsId: number;
        sportsName: string;
        sportsCategory: {
          categoryId: string;
          categoryName: string;
        };
        minAgeGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        maxAgeGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        maxParticipants: number;
      };
      participant: {
        participantId: string;
        participantName: string;
        sportsCategoryId: {
          categoryId: string;
          categoryName: string;
        };
        ageGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        organizationId: {
          organizationId: number;
          organizationName: string;
        };
      };
    };
    team2Id: {
      teamId: any;
      teamName: string;
      sports: {
        sportsId: number;
        sportsName: string;
        sportsCategory: {
          categoryId: string;
          categoryName: string;
        };
        minAgeGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        maxAgeGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        maxParticipants: number;
      };
      participant: {
        participantId: string;
        participantName: string;
        sportsCategoryId: {
          categoryId: string;
          categoryName: string;
        };
        ageGroupId: {
          ageGroupId: number;
          ageGroupName: string;
        };
        organizationId: {
          organizationId: number;
          organizationName: string;
        };
      };
    };
    venue: string;
    dateTime: string;
  }