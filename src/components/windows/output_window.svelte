<script>
  import { onMount } from "svelte";
  import { getData } from "../../stores/auth_store.js";
    
  onMount(async () => {
		getData();
	});

</script>

<section>
  <h2>The Latest on Ez</h2>
  <div class="output_container">
  </div>
</section>

<style>
  h2 {
    position: fixed;
    background-color: #fff;
    margin: 0px;
    padding: 1%;
    top: 0;
    border-bottom: solid 1px lightgray;
    width: 25%;
  }

  .output_container {
    margin: 10% 0px;
    padding: 1%;
  }
</style>
