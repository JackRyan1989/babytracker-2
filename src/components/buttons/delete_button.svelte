<script>
  import { deleteData, getData } from "../../stores/realm_store.js";
  import { output } from "../../stores/output_store";
  export let item_id;
  export let toggleEdit;

  function pullData() {
    getData().then((res) => {
      if (res.length) {
        output.addData(res);
      } else {
        error = true;
      }
    });
  }

  function removeFromCollection(id) {
    return function (e) {
      e.preventDefault();
      let query = {
        _id: id,
      };
      deleteData(query);
      pullData();
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
