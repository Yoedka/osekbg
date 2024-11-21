<script lang="ts">
  import { fade } from "svelte/transition";
  import Head from "../../components/partials/Head.svelte";
  import { info } from "$lib/info";
</script>

<Head
  title="Support Us | OsekBG"
  path="/support"
/>

<main transition:fade={{ delay: 50, duration: 100 }} class="min-h-[80dvh] w-full md:w-9/12 mx-auto">
  <div class="flex flex-col md:px-0 px-5 gap-5">
    <div class="flex flex-col gap-3">
      <h1 class="text-start font-caprasimo text-3xl cursor-default">Support Us ❤️</h1>
      <p>
        Maintaining and improving this free, open-source background removal tool takes time, resources, and dedication. If you'd like to support our work and help us continue providing this service to everyone, we would be pleased to accept donations. 
      </p>
      <div class="flex flex-wrap gap-3 items-center justify-start">
        {#each (info.support_platforms || []) as platform}
          <a href={platform.url} target="_blank"
            class="flex flex-row gap-2 justify-center items-center w-fit py-2 px-5 neoshadow cursor-pointer"
          >
            <img
              src={platform.image}
              alt={platform.name}
              class="h-7 w-auto"
            />
            <span>{platform.name}</span>
          </a>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-start text-2xl font-semibold cursor-default">🔗 Spread the Word</h2>
      <p>Share <b>OsekBG</b> with your network! The more people who use and love our tool, the more we can improve it.</p>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-start text-2xl font-semibold cursor-default">🛠️ Contribute to the Project</h2>
      <p>
        As an open-source initiative, we're always open to collaboration. Check out our GitHub repository <a href={info.github_repo} target="_blank" class="underline text-blue-500 cursor-pointer">here</a> to report issues, suggest features, or contribute code.
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-start text-2xl font-semibold cursor-default">🌟 Become a Sponsor</h2>
      <p>
        If you'd like to make a bigger impact, consider sponsoring us. Sponsorship helps us focus on delivering new features and keeping the service free for everyone.
      </p>
    </div> 
  </div>
</main>

