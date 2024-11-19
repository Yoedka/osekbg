<script lang="ts">
  import { info } from "$lib/info";

  type Props = {
    title: string;
    path: string;
  }

  const { title, path }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="author" content={info.site_author} />
  <meta name="description" content={info.site_description} />
  <meta property="og:site_name" content={info.site_name} />
  <meta property="og:title" content={info.title} />
  <meta property="og:description" content={info.site_description} />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:locale:alternate" content="en_UK" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={info.site_url+path} />
  <meta property="og:image" content={info.site_cover_image} />
  <meta property="og:image:secure_url" content={info.site_cover_image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={info.site_name} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={info.title} />
  <meta name="twitter:description" content={info.site_description} />
  <meta name="twitter:image" content={info.site_cover_image} />
</svelte:head>