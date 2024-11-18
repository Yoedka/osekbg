export interface ResponseHTTP {
  success: boolean;
  errors: string;
}

export interface ResponseRemoveImage extends ResponseHTTP {
  image: string;
}
