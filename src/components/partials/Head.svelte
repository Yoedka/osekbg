<script lang="ts">
  type Props = {
    title: string;
    url: string;
  }

  const { title, url }: Props = $props();

  const description: string = "Effortlessly Remove Your Background Image for #Free";
  const imgUrl: string = "https://osekbg.com/img/Cover.png";
</script>

<svelte:head>
  <title>{title}</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="author" content="Ahmad Habibi" />
  <meta name="description" content={description} />
  <meta property="og:site_name" content="OsekBG" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:locale:alternate" content="en_UK" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={imgUrl} />
  <meta property="og:image:secure_url" content={imgUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="OsekBG" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imgUrl} />
</svelte:head>