interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

interface ErrorInfo {
  status: number;
  name: string;
  message: string;
  details: object;
}

interface Error {
  error: ErrorInfo;
}

interface ImageInfo {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

interface ImageFormats {
  large: ImageInfo;
  small: ImageInfo;
  medium: ImageInfo;
  thumbnail: ImageInfo;
}

interface ImageAttributes extends ImageInfo {
  alternativeText: string | null;
  caption: string | null;
  formats: ImageFormats | null;
  previewUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DataItem<T> {
  id: number;
  attributes: T;
}

export interface ImageData {
  id: number;
  data: DataItem<ImageAttributes>;
}

export interface BaseAttributes {
  createdAt: string;
  updatedAt: string;
  locale: string;
}

export interface ApiCollectionResponse<T> {
  data: DataItem<T>[];
  meta?: Meta;
  error?: Error;
}

export interface ApiSingleResponse<T> {
  data: DataItem<T>;
  error?: Error;
}

export interface TextValuesList {
  id: number;
  value: string;
}

export interface InfoList {
  title: string;
  description: string;
}
