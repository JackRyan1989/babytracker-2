<script>
  import { onMount } from "svelte";
  import { getData } from "../../stores/realm_store.js";
  import { output } from "../../stores/output_store";

  let error = false;

  function pullData() {
    getData().then((res) => {
      if (res.length) {
        output.addData(res);
      } else {
        error = true;
      }
    });
  }

  onMount(async () => {
    pullData();
  });
</script>

<section>
  <h2>The Latest on Ez</h2>
  <div class="output_container">
    {#if error}
      <p>Could not load data :(</p>
    {:else}
      {#each $output as data}
        <p>{data.action} {data.timestamp}</p>
      {/each}
    {/if}
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
    width: 28%;
  }

  .output_container {
    margin: 10% 0px;
    padding: 1%;
  }
</style>
