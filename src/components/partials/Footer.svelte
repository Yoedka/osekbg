<script lang="ts">
  import { info } from "$lib/info";
  const year: string = new Date().getFullYear().toString();
</script>

<footer class="flex flex-row justify-between items-center w-full border-t-4 border-zinc-900 h-fit px-0 py-4">
  <div class="flex flex-row justify-between items-center gap-4 mx-auto w-9/12">
    <span>&copy; {year} OsekBG | <a href="https://habi14.pages.dev" class="underline">Ahmad Habibi</a></span>
    <nav class="flex flex-row gap-5 items-center">
      <a href={info.github_repo} class="hover:underline cursor-pointer">View Source Code (GitHub)</a>
    </nav>
  </div>
</footer>