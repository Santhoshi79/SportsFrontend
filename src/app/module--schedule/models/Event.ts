export class Event {
    eventId: number;
    eventName: string;
    sportsCategory: {
      categoryId: string;
      categoryName: string;
    };
    startTime: string;
    endTime: string;
  }