export class Team {
    teamName:string;
    teamId: number;
    
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
    };
    children:Team[];
  }
  