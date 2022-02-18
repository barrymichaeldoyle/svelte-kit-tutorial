<script>
  import getPostsMeta from './getPostsMeta'
  import { onMount } from 'svelte';
  export let count = 0;
  let postsMeta;

  onMount(async function() {
    postsMeta = getPostsMeta(count);
  })
</script>

{#if postsMeta}
  {#each postsMeta as post}
    <p><a href="/posts/{post.slug}">{post.title}</a></p>
  {/each}
{/if}
