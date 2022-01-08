<script context="module">
  export async function load({ page }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);

    return {
      props: { Post: Post.default, slug: page.params.slug }
    }
    // return {
    //   error: Error('Post Not Found'),
    //   status: 404
    // }
    // return {
    //   redirect: '/posts',
    //   status: 307,
    // }
  }
</script>

<script>
  export let Post;
</script>

<svelte:component this={Post} />