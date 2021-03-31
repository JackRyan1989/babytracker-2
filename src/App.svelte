<script>
  import Form from "./components/layouts/form_container.svelte";
  import { loginUser } from "./stores/realm_store";
  import { onMount } from "svelte";
  import Modal from "svelte-simple-modal";

  onMount(async () => {
    loginUser();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<h1 role="banner">Ezra Tracking</h1>
<main class="app">
  <Modal>
    <Form />
  </Modal>
</main>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  h1 {
    display: none;
  }
  main {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
  }
</style>
