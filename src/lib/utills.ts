import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { DateTime } from "ts-luxon";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function createSlug(title: string) {
  // Remove special characters and spaces
  const cleanedTitle = title.replace(/[^\w\s-]/g, "");

  // Convert to lowercase and replace spaces with hyphens
  const slug = cleanedTitle.toLowerCase().replace(/\s+/g, "-");

  return slug;
}
export const getGMTOffset = (timeZone: string): string => {
  const timeZoneTime = DateTime.now().setZone(timeZone);
  // Get the GMT offset as "-0400" from toFormat("ZZZ")
  const gmtOffsetWithoutColon = timeZoneTime.toFormat("ZZZ");
  const hours = gmtOffsetWithoutColon.substring(0, 3);
  const minutes = gmtOffsetWithoutColon.substring(3);
  return `${hours}:${minutes}`;
};

export const getTimeInSelectedTimezone = (timeZone: string): string => {
  const timeZoneTime = DateTime.now().setZone(timeZone).toFormat("HH:mm");

  if (timeZoneTime) {
    return timeZoneTime;
  }

  return "";
};
