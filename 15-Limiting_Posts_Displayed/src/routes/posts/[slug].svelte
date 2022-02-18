<script context="module">
  export async function load({ page }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);

    return {
      props: {
        Post: Post.default,
        slug: page.params.slug,
      }
    }
  }
</script>

<script>
  export let Post;
</script>

<svelte:component this={Post} />