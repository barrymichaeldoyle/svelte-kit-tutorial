<script context="module">
  export async function load({ page }) {
    return {
      props: { slug: page.params.slug }
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
  export let slug;
</script>

<h1>Slug Page: {slug}</h1>