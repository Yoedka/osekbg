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
  path="/"
/>

<main transition:fade={{ delay: 50, duration: 100 }}>
  <div class="flex flex-col gap-8 mt-10 md:mt-11 w-full md:w-9/12 mx-auto md:px-0 px-5">
    <div class="z-20 relative flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-5 justify-between items-center">
      <div class="z-10 max-w-[1600px] w-full md:w-[400px] rounded-full h-[200px] -translate-x-1/2
        md:-translate-x-0 md:h-[400px] bg-gradient-to-b from-transparent
        from-0% via-95% to-100% via-yellow-300 md:top-[-100px] top-[-20px]
        to-transparent absolute left-1/2 md:left-7 blur-[100px]"
      ></div>
      <div class="relative z-20 w-auto flex flex-col md:gap-5 gap-8">
        <h1 class="font-caprasimo text-4xl md:text-6xl cursor-default">
          Effortlessly Remove Your Background Image for
          <span class="bg-blue-200 px-3 py-1 cursor-default rounded-base text-2xl md:text-4xl neoshadow-no-hover">#Free</span>
        </h1>
        <a href="/remove" class="py-2 px-5 text-lg bg-pink-200 neoshadow w-fit">Remove Now</a>
      </div>
      <div class="relative z-20 flex justify-center items-center">
        <img
          src="/img/MainHero.svg"
          alt="Main Hero"
          class="w-[400px] md:w-[500px] h-auto"
        />
      </div>
    </div>
    <div class="flex flex-col gap-10 md:mt-28 mt-10">
      <h2 class="md:text-3xl text-2xl text-center font-caprasimo">The Easiest way to remove your background image</h2>
      <div class="flex flex-col md:grid md:grid-cols-3 gap-5">
        <div class="flex flex-col gap-2 p-5 neoshadow text-wrap bg-sky-200 cursor-pointer">
          <Icon
            src={TrOutlineTimeDuration30}
            size="40"
          />
          <div class="flex flex-col gap-0">
            <h3 class="text-lg font-bold">Quick and Easy</h3>
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
            <h3 class="text-lg font-bold">Free</h3>
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
            <h3 class="text-lg font-bold">Eye-Catching Design</h3>
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