<script>
  import { deleteData } from "../../stores/realm_store.js";
  export let item_id;
  export let toggleEdit;

  function removeFromCollection(id) {
    return function (e) {
      e.preventDefault();
      let query = {
        _id: id,
      };
      deleteData(query);
      toggleEdit();
    };
  }
</script>

<button on:click={removeFromCollection(item_id)}>Delete</button>

<style>
  button {
    width: 10%;
    margin: 0px 0px 0px 1%;
    padding: 0.5%;
    color: white;
    text-transform: uppercase;
    font-size: 1.25em;
    border: none;
    height: min-content;
    background-color: #9F353A;
  }

  /* Portrait */
  @media only screen and (min-device-width: 200px) and (max-device-width: 812px) {
    button {
      width: 25%;
      margin: 5px 0px 15px 5.5%;
    }
  }
</style>
