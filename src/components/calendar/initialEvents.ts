
import { CalendarEvent } from "./types";

// Mock calendar events
export const initialEvents: CalendarEvent[] = [
  {
    id: 1,
    date: new Date(2023, 5, 14), // June 14, 2023
    title: "Mathématiques - Chapitre 5",
    type: "assignment",
    time: "23:59",
    description: "Rendre les exercices du chapitre 5"
  },
  {
    id: 2,
    date: new Date(2023, 5, 16), // June 16, 2023
    title: "Physique - Quiz final",
    type: "assignment",
    time: "17:00",
    description: "Quiz en ligne sur le chapitre 7"
  },
  {
    id: 3,
    date: new Date(2023, 5, 15), // June 15, 2023
    title: "Cours de mathématiques",
    type: "lecture",
    time: "10:00 - 12:00",
    description: "Salle 203"
  },
  {
    id: 4,
    date: new Date(2023, 5, 15), // June 15, 2023
    title: "Révision - Fonctions dérivées",
    type: "study",
    time: "14:00 - 16:00",
    description: "Se concentrer sur les exercices du livre p.45-48"
  },
  {
    id: 5,
    date: new Date(2023, 5, 14), // June 14, 2023
    title: "Pause méditation",
    type: "break",
    time: "18:00 - 18:30",
    description: "10 minutes de respiration profonde, 20 minutes de méditation guidée"
  },
  {
    id: 6,
    date: new Date(2023, 5, 17), // June 17, 2023
    title: "Marche détente",
    type: "break",
    time: "16:00 - 17:00",
    description: "Marche au parc pour décompresser"
  }
];
