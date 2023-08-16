export class Participant {
  participantId: string;
  participantName: string;
  // sportsCategory: {
  //   categoryId: string;
  //   categoryName: string;
  // };
  ageGroup: {
    ageGroupId: number;
    ageGroupName: string;
  };
  organization: {
    organizationId: number;
    organizationName: string;
    averageStudentStrength:any;
  };
  sports: {
    sportsId: number;
    sportsName: string;
    sportsCategory: {
      categoryId: string;
      categoryName: string;
    };
    // minAgeGroupId: {
    //   ageGroupId: number;
    //   ageGroupName: string;
    // };
    // maxAgeGroupId: {
    //   ageGroupId: number;
    //   ageGroupName: string;
    // };
    maxParticipants: number;
  };
  qrCode:string
}