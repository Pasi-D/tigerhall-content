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
