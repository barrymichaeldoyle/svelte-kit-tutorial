<script>
  const date = new Date().getFullYear();
</script>

<header>
  <h1><a href="/">SurfSpots</a></h1>
</header>

<main>
  <slot />
</main>

<footer>I like Feet - copyright {date}</footer>

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
  }

  header {
    background-color: aquamarine;
    padding: 15px;

    h1 {
      margin: 0;

      a {
        color: purple;
        text-decoration: none;
      }
    }
  }

  main {
    background-color: blanchedalmond;
    flex: 1;
    padding: 15px;
    overflow-y: auto;
  }

  footer {
    background-color: aquamarine;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 15px;
  }
</style>
