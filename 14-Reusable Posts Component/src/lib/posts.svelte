<script>
  import getPostsMeta from './getPostsMeta'
  import { onMount } from 'svelte';
  let postsMeta;

  onMount(async function() {
    postsMeta = getPostsMeta();
  })
</script>

{#if postsMeta}
  {#each postsMeta as post}
    <p><a href="/posts/{post.slug}">{post.title}</a></p>
  {/each}
{/if}
