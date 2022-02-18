<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
</script>

<Header title="SurfSpots" />

<main>
  <slot />
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
