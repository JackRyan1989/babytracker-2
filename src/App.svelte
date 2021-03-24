<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&display=swap" rel="stylesheet"> 
</svelte:head>

<script>
	import Form from "./components/layouts/form_container.svelte";
	import { login } from "./stores/auth_store";
	import { onMount } from "svelte";

	onMount(async () => {
		login;
	});

</script>

<h1 role="banner">Ezra Tracking</h1>
<main class="app">
	<Form/>
</main>
<style>
	h1 {
		display: none;
	}
	main {
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 300;
	}
</style>