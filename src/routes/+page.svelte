<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { TrOutlineTimeDuration30, TrOutlineTag } from "svelte-icons-pack/tr";
  import { RiDesignBrush2Line } from "svelte-icons-pack/ri";
  import Updates from "../components/Updates.svelte";
  import { fade } from "svelte/transition";
  import Head from "../components/partials/Head.svelte";
</script>

<Head
  title="OsekBG - Effortlessly Remove Your Background Image for #Free"
  url="https://osekbg.com"
/>

<main transition:fade={{ delay: 50, duration: 100 }}>
  <div class="flex flex-col gap-8 mt-11 w-9/12 mx-auto">
    <div class="grid grid-cols-2 gap-5 justify-between items-center">
      <div class="w-auto flex flex-col gap-5">
        <h1 class="font-caprasimo text-6xl">
          Effortlessly Remove Your Background Image for <span class="text-amber-500">#Free</span>
        </h1>
        <a href="/remove" class="py-2 px-5 text-lg bg-pink-200 neoshadow w-fit">Remove Now</a>
      </div>
      <div class="flex justify-center items-center">
        <img
          src="/img/MainHero.svg"
          alt="Main Hero"
          class="w-[500px] h-auto"
        />
      </div>
    </div>
    <div class="flex flex-col gap-10 mt-28">
      <h2 class="text-3xl text-center font-caprasimo">The Easiest way to remove your background image</h2>
      <div class="grid grid-cols-3 gap-5">
        <div class="flex flex-col gap-2 p-5 neoshadow text-wrap bg-sky-200 cursor-pointer">
          <Icon
            src={TrOutlineTimeDuration30}
            size="40"
          />
          <div class="flex flex-col gap-0">
            <h3 class="text-lg font-semibold">Quick and Easy</h3>
            <p class="text-wrap">
              Easy to use and takes just a few clicks to remove your background image.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 p-5 neoshadow text-wrap bg-amber-200 cursor-pointer">
          <Icon
            src={TrOutlineTag}
            size="40"
          />
          <div class="flex flex-col gap-0">
            <h3 class="text-lg font-semibold">Free</h3>
            <p class="text-wrap">
              No ads, no tracking, and no hidden fees. It's 100% free to use.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 p-5 neoshadow text-wrap bg-emerald-200 cursor-pointer">
          <Icon
            src={RiDesignBrush2Line}
            size="40"
          />
          <div class="flex flex-col gap-0">
            <h3 class="text-lg font-semibold">Eye-Catching Design</h3>
            <p class="text-wrap">
              Using NeoBrutalism design style, make it stand out from the rest.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Updates />
</main>