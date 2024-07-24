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
