/**
 * These slides are used in both the inline detail page photo slider
 * and the fullscreen media gallery.
 */

export const MEDIA_SLIDE_TYPES = {
  IMAGE: {
    FLOORPLAN: 'floorplan',
    IMAGE: 'image',
  },
  VIDEO: 'video',
  VR: 'vr',
} as const;

export type MediaSlideType =
  | (typeof MEDIA_SLIDE_TYPES.IMAGE)[keyof typeof MEDIA_SLIDE_TYPES.IMAGE]
  | typeof MEDIA_SLIDE_TYPES.VIDEO
  | typeof MEDIA_SLIDE_TYPES.VR;

export type ImageSlideType = (typeof MEDIA_SLIDE_TYPES.IMAGE)[keyof typeof MEDIA_SLIDE_TYPES.IMAGE];

type ImageSlide = {
  imageUrl: string;
  type: ImageSlideType;
};

export type VideoSlideType = typeof MEDIA_SLIDE_TYPES.VIDEO;

type VideoSlide = {
  imageUrl: string;
  type: VideoSlideType;
  videoUrl: string;
};

export type VrSlideType = typeof MEDIA_SLIDE_TYPES.VR;

type VrSlide = {
  imageUrl: string;
  type: VrSlideType;
  vrUrl: string;
};

export type ListingMedia = ImageSlide | VideoSlide | VrSlide;
