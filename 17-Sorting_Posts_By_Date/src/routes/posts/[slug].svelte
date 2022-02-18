<script context="module">
  export async function load({ page }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);

    return {
      props: {
        date: Post?.metadata?.date,
        Post: Post.default,
        published: Post?.metadata?.published ?? false,
        slug: page.params.slug,
      }
    }
  }
</script>

<script>
  export let date;
  export let Post;
  export let published;
</script>


{#if !published}
  <h1>Post is Private</h1>
{:else}
  {#if date}
  <i>Published: {new Date(date).toLocaleString('en-GB', {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}</i>
  {/if}

  <svelte:component this={Post} />
{/if}