
export interface CalendarEvent {
  id: number;
  date: Date;
  title: string;
  type: "assignment" | "lecture" | "study" | "break";
  time?: string;
  description?: string;
}
