<script lang="ts">
  import { fade } from "svelte/transition";
  import { Icon } from "svelte-icons-pack";
  import { RiArrowsArrowRightLine } from "svelte-icons-pack/ri";
  import axios, { AxiosError, type AxiosProgressEvent, type AxiosResponse } from "axios";
  import toast, { Toaster } from "svelte-french-toast";
  import type { ResponseHTTP, ResponseRemoveImage } from "../../types/response";
  import { downloadBlob } from "$lib/download";
  import { v4 as uuidv4 } from "uuid";
  import Head from "../../components/partials/Head.svelte";

  let imgInputElm: HTMLInputElement | any;
  let imgElm: HTMLImageElement = $state({} as HTMLImageElement);

  let isImageLoaded: boolean = $state(false);
  let isRemovingBackground: boolean = $state(false);
  let isUploadingImage: boolean = $state(false);
  let isWaitingResponse: boolean = $state(false);
  let isImageObtained: boolean = $state(false);
  let imgUploadingProgress: number = $state(0);
  let imgBase64: string | null = $state(null);

  function resetStates(): void {
    isImageObtained = false;
    isRemovingBackground = false;
    isUploadingImage = false;
    isWaitingResponse = false;
    isImageLoaded = false;
    imgUploadingProgress = 0;
    imgBase64 = null;
  }

  function onLoadImage(e: Event & { currentTarget: EventTarget & HTMLInputElement }): void {
    const [ file ] = imgInputElm.files as (FileList | any );
    if (file) {
      imgElm.src = URL.createObjectURL(file);
    }

    isImageLoaded = true;
  }

  $effect(() => {
    if (imgUploadingProgress === 100) {
      isUploadingImage = false;
    }

    if (imgUploadingProgress === 100 && !isImageObtained) {
      isWaitingResponse = true;
    }

  })

  async function submitRemoveBackground(): Promise<void> {
    isRemovingBackground = true;
    isUploadingImage = true;

    const formData: FormData = new FormData();
    formData.append("image", imgInputElm.files[0]);

    await axios.postForm("/remove", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        imgUploadingProgress = Math.round((progressEvent.loaded * 100) / Number(progressEvent.total || 1));
      }
    }).then((res: AxiosResponse) => {
      const resp: ResponseRemoveImage = res.data as ResponseRemoveImage;
      imgBase64 = `data:image/png;base64,${resp.image}`
      isImageObtained = true;
      isWaitingResponse = false;
    }).catch((err: AxiosError) => {
      console.error(err);
      const resp: ResponseHTTP = err.response?.data as ResponseHTTP;
      toast.error(resp.errors || "Failed to upload image");
    })
  }

  function downloadImage(): void {
    downloadBlob(imgBase64 as string, `osekbg-${uuidv4()}.png`);
  }
</script>

<Head
  title="Remove Background | OsekBG"
  url="https://osekbg.com/remove"
/>

<Toaster />

<main transition:fade={{ delay: 50, duration: 100 }} class="flex flex-col gap-4 mt-11 min-h-[80dvh]">
  <div class="flex gap-20 flex-row justify-around items-center">
    <div class="flex flex-col gap-5 justify-center items-center">
      <div class="w-64 h-64 neoshadow overflow-hidden
        {isImageLoaded ? "flex justify-center items-center" : "hidden"}
      ">
        <img
          bind:this={imgElm}
          src="" alt=""
          class="object-cover w-full h-auto duration-150 hover:scale-110"
        />
      </div>
    </div>
    {#if isRemovingBackground}
      <div class="flex justify-center items-center">
        <Icon
          src={RiArrowsArrowRightLine}
          size="80"
        />
      </div>
      <div class="flex flex-col gap-5 justify-center items-start h-full">
        <div class="w-64 h-64 neoshadow overflow-hidden flex justify-center items-center">
          {#if isUploadingImage}
            <p>Uploading Image {imgUploadingProgress}%</p>
          {/if}
          {#if isWaitingResponse}
            <p>Removing Background...</p>
          {/if}
          {#if isImageObtained}
            <img
              src={imgBase64} alt="Result"
              class="object-cover w-full h-auto duration-150 hover:scale-110"
            />
          {/if}
        </div>
      </div>
    {/if}
  </div>
  <div class="flex flex-col justify-center items-center gap-4 mt-7">
    <label for="img-file" class="cursor-pointer py-2 px-7 text-lg bg-pink-200 neoshadow w-fit
      {isImageLoaded ? "hidden" : "block"}
    ">Upload Image</label>
    <input
      bind:this={imgInputElm}
      onchange={onLoadImage}
      type="file"
      class="hidden"
      id="img-file"
      accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
    />
    {#if isImageLoaded}
      <button class="py-2 px-7 text-lg bg-pink-200 neoshadow w-fit"
        onclick={() => {
          if (imgInputElm.files) imgInputElm.files = null;
          imgInputElm.click();
          resetStates();
        }}
      >Change Image</button>
      {#if !isImageObtained}
        <button class="py-2 px-7 text-lg bg-emerald-200 neoshadow w-fit" disabled={isUploadingImage}
          onclick={submitRemoveBackground}
        >Remove Background</button>
      {/if}
    {/if}
    {#if isImageObtained}
      <button class="py-2 px-7 text-lg bg-sky-200 neoshadow w-fit"
        onclick={downloadImage}
      >Download Image</button>
    {/if}
    {#if !isImageLoaded}
      <p class="text-center text-lg">Upload your image file (png, jpeg, jpg, gif, webp) up to 5MB</p>
    {/if}
  </div>
</main>