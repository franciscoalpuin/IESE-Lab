/**
 * Utilities for scheduling study alarms and calendar events
 * Supports Google Calendar web links and standard .ics files with native ALARM triggers
 */

interface CalendarEventOptions {
  title: string;
  description: string;
  daysFromNow?: number; // default 3
  timeHours?: number; // default 19 (7:00 PM)
  timeMinutes?: number; // default 0
  durationMinutes?: number; // default 45 minutes
  url?: string;
}

function formatDateToIcsString(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

/**
 * Builds a direct Google Calendar event creation URL
 */
export function buildGoogleCalendarUrl(options: CalendarEventOptions): string {
  const {
    title,
    description,
    daysFromNow = 3,
    timeHours = 19,
    timeMinutes = 0,
    durationMinutes = 45,
    url = window.location.href
  } = options;

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + daysFromNow);
  startDate.setHours(timeHours, timeMinutes, 0, 0);

  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const startStr = formatDateToIcsString(startDate);
  const endStr = formatDateToIcsString(endDate);

  const fullDescription = `${description}\n\nAcceso a la plataforma IESE:\n${url}`;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startStr}/${endStr}`,
    details: fullDescription,
    location: 'Escuela de Idiomas del Ejército (IESE) - Aula Virtual',
    sprop: 'website:iese.ejercito.mil.ar'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates and triggers download of an .ics iCalendar file with a built-in alarm for mobile/desktop
 */
export function downloadIcsCalendarFile(options: CalendarEventOptions): void {
  const {
    title,
    description,
    daysFromNow = 3,
    timeHours = 19,
    timeMinutes = 0,
    durationMinutes = 45,
    url = window.location.href
  } = options;

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + daysFromNow);
  startDate.setHours(timeHours, timeMinutes, 0, 0);

  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const startStr = formatDateToIcsString(startDate);
  const endStr = formatDateToIcsString(endDate);
  const stampStr = formatDateToIcsString(new Date());

  const cleanDescription = `${description} | Enlace: ${url}`.replace(/\n/g, '\\n');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Escuela de Idiomas del Ejercito//IESE Ingles Militar//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:iese-study-${Date.now()}@ejercito.mil.ar`,
    `DTSTAMP:${stampStr}`,
    `DTSTART:${startStr}`,
    `DTEND:${endStr}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${cleanDescription}`,
    'LOCATION:IESE - Plataforma de Inglés Militar',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Recordatorio de lección militar IESE',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', `IESE_Ingles_Militar_Alarma_${daysFromNow}dias.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}

/**
 * Helper to build standard event options for IESE British Military English
 */
export function getIeseCalendarOptions(levelNumber: number, cefr: string, daysFromNow = 3): CalendarEventOptions {
  return {
    title: `🎖️ Adiestramiento Inglés Militar IESE (Nivel ${levelNumber} - ${cefr})`,
    description: `Sesión de práctica de inglés militar británico IESE (Comprensión Auditiva, Escrita, Uso de la Lengua, Expresión Oral y Escrita).\nEstándar OTAN STANAG 6001.`,
    daysFromNow,
    timeHours: 19,
    timeMinutes: 0,
    durationMinutes: 45
  };
}
