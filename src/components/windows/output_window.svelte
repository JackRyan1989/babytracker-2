<script>
  import { onMount } from "svelte";
  import { output } from "../../stores/output_store";
  import DeleteButton from "../buttons/delete_button.svelte";
  import UpdateButton from "../buttons/update_button.svelte";

  let error = false;
  let edit = false;
  let dispId;
  export let pullData;

  const toggleEdit = () => {
    edit = !edit;
  }

  onMount(async () => {
    pullData();
  });

  function displayEdit(e) {
     dispId = e.target.id;
     toggleEdit();
  }

</script>

<section>
  <h2>The Latest on Ez</h2>
  <div class="output_container">
    {#if error}
      <p>Could not load data :(</p>
    {:else}
      {#each $output as data}
      <div class="dataDisplayBlock">
        <p id={data._id} on:click={displayEdit}>{data.action} {data.timestamp}</p>
        {#if (edit) && (dispId == data._id) }
        <div class="editButtons">
          <DeleteButton item_id={data._id} {toggleEdit}/>
          <UpdateButton item_id={data._id} {toggleEdit}/>
        </div>
        {/if}
      </div>
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

  /* Portrait */
  @media only screen and (min-device-width: 200px) and (max-device-width: 812px) {
    h2 {
      position: fixed;
      width: 100%;
      top: 0;
      padding: 1%;
    }

    .output_container {
      margin: 10% 0px;
      padding: 1%;
    }

    p {
      font-size: 1.1em;
      text-decoration: underline;
      margin: 0 0 10px 0 !important;
    }

    .editButtons {
      display: flex;
      flex-wrap: row wrap;
      justify-content: flex-start;
    }

  }
</style>
