import { IconType } from "react-icons";
import {
  RiProgress1Line,
  RiProgress2Line,
  RiProgress3Line,
  RiProgress4Line,
  RiProgress5Line,
  RiProgress6Line,
  RiProgress7Fill,
  RiProgress8Fill,
} from "react-icons/ri";

export const getResizedImageUrl = (url: string, width: number, height: number) => {
  try {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split("/").filter(segment => segment);

    // Insert the resize segment after the hostname
    pathSegments.unshift(`resize/${width}x${height}`);

    // Reconstruct the URL with the new path
    parsedUrl.pathname = "/" + pathSegments.join("/");

    return parsedUrl.toString();
  } catch (error) {
    console.error("Invalid URL :", url);
    return url;
  }
};

export const getPodcastDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursPart = hours > 0 ? `${hours}h` : "";
  const minutesPart = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

  return `${hoursPart} ${minutesPart}`.trim();
};

export const generateRandomProgress = (seed: number, min: number = 0, max: number = 100) => {
  const x = Math.sin(seed) * 10000;
  const randomInRange = Math.floor((x - Math.floor(x)) * (max - min - 1)) + min + 1;
  return randomInRange;
};

export const getProgressIcon = (progress: number): IconType => {
  if (progress <= 25) {
    return RiProgress1Line;
  } else if (progress <= 50) {
    return RiProgress2Line;
  } else if (progress <= 75) {
    return RiProgress3Line;
  } else if (progress <= 100) {
    return RiProgress4Line;
  } else if (progress <= 125) {
    return RiProgress5Line;
  } else if (progress <= 150) {
    return RiProgress6Line;
  } else if (progress <= 175) {
    return RiProgress7Fill;
  } else {
    return RiProgress8Fill;
  }
};
