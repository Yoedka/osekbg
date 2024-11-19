<script lang="ts">
  import { info } from "$lib/info";
  import { Icon } from "svelte-icons-pack";
  import { RiLogosGithubFill } from "svelte-icons-pack/ri";

  const year: string = new Date().getFullYear().toString();
</script>

<footer class="flex flex-col md:flex-row justify-between items-center w-full border-t-4 border-zinc-900 h-fit px-0 py-4">
  <div class="flex flex-col md:flex-row md:justify-between items-center md:gap-4 gap-1 mx-auto w-full md:px-0 px-5 md:w-9/12">
    <div class="flex flex-row gap-1 items-center">
      <span>&copy; {year} OsekBG</span>
      <span>|</span>
      <a href="https://habi14.pages.dev" class="hover:underline">Ahmad Habibi</a>
    </div>
    <nav class="flex flex-row gap-5 items-center">
      <a href={info.github_repo} class="hover:underline cursor-pointer flex flex-row gap-1 items-center">
        <span>Source Code</span>
        <Icon
          src={RiLogosGithubFill}
          size="20"
        />
      </a>
    </nav>
  </div>
</footer>