import { MEDIA_SLIDE_TYPES, type ListingMedia } from '@/types/ListingMedia';
import type { VehicleDetail } from '@/types/VehicleDetail';

export function getIdFromYoutubeUrl(url: string): string {
  const prefixes = [
    'http://www.youtube.com/v/',
    'https://www.youtube.com/v/',
    'http://www.youtube.com/watch?v=',
    'https://www.youtube.com/watch?v=',
    'http://youtu.be/',
    'https://youtu.be/',
  ];

  let id = url;
  prefixes.forEach((separator) => {
    if (url.includes(separator)) {
      id = url.split(separator).join('');
    }
  });

  return id;
}

export function getListingMediaSlides(vehicle: VehicleDetail): ListingMedia[] {
  const slides: ListingMedia[] = [];

  // insert at a specific index but also handle cases where the index is out of bounds
  const insertSlideAtIndex = (slide: ListingMedia, index: number) => {
    slides.splice(Math.min(index, slides.length), 0, slide);
  };

  vehicle.photos.forEach((photo) => {
    slides.push({
      imageUrl: String(photo.url),
      type: MEDIA_SLIDE_TYPES.IMAGE.IMAGE,
    });
  });

  if (vehicle.floorPlanMediaId) {
    insertSlideAtIndex(
      {
        imageUrl: String(vehicle.floorPlanMediaId),
        type: MEDIA_SLIDE_TYPES.IMAGE.FLOORPLAN,
      },
      1
    );
  }

  if (vehicle.video) {
    insertSlideAtIndex(
      {
        imageUrl: String(vehicle.video.thumbnail),
        type: MEDIA_SLIDE_TYPES.VIDEO,
        videoUrl: String(vehicle.video.url),
      },
      2
    );
  }

  if (vehicle.vrUrl) {
    insertSlideAtIndex(
      {
        imageUrl: vehicle.photos?.[0]?.url && String(vehicle.photos[0].url),
        type: MEDIA_SLIDE_TYPES.VR,
        vrUrl: String(vehicle.vrUrl),
      },
      3
    );
  }

  return slides;
}

export function getSlideIndex(slideToFind: ListingMedia, allSlides: ListingMedia[]): number {
  // TODO: find a better way of matching a slide. this is not good.
  return allSlides.findIndex((slide) => slide === slideToFind);
}
