import { SimpleGridProps } from "@chakra-ui/react";

const PODCAST_COLUMNS = 3;

export const PODCAST_GRID_COLUMNS_LAYOUT: SimpleGridProps["columns"] = [1, null, PODCAST_COLUMNS];

export const ITEMS_PER_PAGE = 10;

export const PODCAST_IMAGE_ATTRIBUTES = {
  IMAGE_WIDTH: 400,
  IMAGE_HEIGHT: 150,
};

export const SEARCH_DEBOUNCE_THRESHOLD = 300;
