<script context="module">
  export async function load({ page }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);

    return {
      props: {
        Post: Post.default,
        slug: page.params.slug,
        published: Post?.metadata?.published ?? false
      }
    }
  }
</script>

<script>
  export let Post;
  export let published;
</script>

{#if !published}
<h1>Post is Private</h1>
{:else}
<svelte:component this={Post} />
{/if}