<script context="module">
  export async function load({ page }) {
    const isPostsPage = page.path.substring(0, 6) === '/posts';
    return { props: { key: isPostsPage ? '' : page.path }}
  }
</script>

<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  import PageTransition from '$lib/page-transition.svelte';

  export let key;
</script>

<Header title="SurfSpots" />

<main>
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>

<Footer />

<style lang="scss">
  :global {
    html {
      font-family: Arial, Helvetica, sans-serif;
      height: 100%;

      body {
        height: 100%;
        margin: 0;

        #svelte {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      }
    }

    h1, h2, h3, h4, h5, h6 {
      color: tomato;
    }

    a {
      color: purple;
      font-weight: bold;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  main {
    background-color: blanchedalmond;
    flex: 1;
    padding: 15px;
    overflow-y: auto;
  }
</style>
