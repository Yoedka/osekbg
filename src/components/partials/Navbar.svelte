<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BiDonateHeart } from "svelte-icons-pack/bi";
  import { FiTrash2 } from "svelte-icons-pack/fi";
</script>

<header class="flex justify-center items-center w-full border-b-4 border-zinc-900 h-fit px-0 py-4 bg-white">
  <div class="flex flex-row justify-between items-center gap-4 mx-auto md:w-9/12 w-full px-5 md:px-0">
    <a href="/" class="text-3xl font-caprasimo">
      OsekBG
    </a>
    <nav class="flex flex-row gap-5 items-center text-sm">
      <a href="/" class="md:inline-flex justify-center items-center py-2 px-5 neoshadow hidden">
        Home
      </a>
      <a href="/remove" class="inline-flex justify-center items-center py-2 px-5 neoshadow">
        <Icon
          src={FiTrash2}
          size="20"
          className="md:hidden block"
        />
        <span class="hidden md:block">Remove Background</span>
      </a>
      <a href="/support" class="bg-pink-200 inline-flex flex-row gap-2 justify-center items-center py-2 px-5 neoshadow">
        <span class="hidden md:block">Support</span>
        <Icon
          src={BiDonateHeart}
          size="20"
        />
      </a>
    </nav>
  </div>
</header>