// Site-wide announcements. Keep the list empty unless the owner approves a
// real offer, festival notice or seasonal update. Never invent offers.
// First enabled item is rendered as a dismissible bar above the header.

export type Announcement = {
  id: string;
  text: string;
  href?: string;
  cta?: string;
  enabled: boolean;
};

export const announcements: Announcement[] = [];
