import { limiter } from "$lib/http/rate-limiter";
import { type RequestEvent } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/private";
import { HttpStatusCode } from "axios";
import { ResponseJSONFunc } from "$lib/http/json";
import { removeBackground } from "@imgly/background-removal-node";
import { type ResponseRemoveImage } from "../../types/response.d";

export const POST: RequestHandler = async (event: RequestEvent) => {
	if (env.NODE_ENV === "production") {
		if (await limiter.isLimited(event)) {
      return ResponseJSONFunc({
        success: false,
        errors: "Too many requests, please try again later"
      }, HttpStatusCode.TooManyRequests);
		}
	}

	const { request } = event;

	const formData: FormData | null = await request.formData()
    .then((res: FormData) => {
      return res;
    }).catch(() => {
      return null;
    });
  
  if (!formData) {
    return ResponseJSONFunc({
      success: false,
      errors: "Form data cannot be empty"
    }, HttpStatusCode.BadRequest);
  }

	const imgFile: File | null = formData.get("image") as File;

  if (!imgFile) {
    return ResponseJSONFunc({
      success: false,
      errors: "Image cannot be empty"
    }, HttpStatusCode.BadRequest);
  }

  const imgBlob: Blob | null = await removeBackground(imgFile)
    .then((res: Blob) => {
      return res;
    }).catch(() => {
      return null
    });
  
  if (!imgBlob) {
    return ResponseJSONFunc({
      success: false,
      errors: "Failed to remove background"
    }, HttpStatusCode.InternalServerError);
  }

  const imgBase64 = await blobToBase64(imgBlob);
  const res: ResponseRemoveImage = {
    errors: "",
    success: true,
    image: imgBase64
  }

	return ResponseJSONFunc(res, HttpStatusCode.Ok);
};

async function blobToBase64(blob: Blob): Promise<string> {
	const arrayBuffer: ArrayBuffer = await blob.arrayBuffer()
    .then((res: ArrayBuffer) => res)
    .catch(() => new ArrayBuffer(0));

	const base64: string = Buffer.from(arrayBuffer).toString("base64");

	return base64;
}