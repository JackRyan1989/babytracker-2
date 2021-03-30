<script>
  import { updateData } from "../../stores/realm_store.js";
  import dayjs from "dayjs";
  import LocalizedFormat from "dayjs/plugin/localizedFormat";
  export let toggleEdit;
  export let item_id;

  function displayModal(e) {
    e.preventDefault();
    UIkit.modal.prompt("Edit action:", "").then(
      function (action) {
        if (action === null) {
          toggleEdit();
          return
        }
        updateCollection(action);
      });
  }

  function updateCollection(input) {
    dayjs.extend(LocalizedFormat);
    let timestamp = dayjs().format("llll");
    let query = {
      _id: item_id,
    };
    let update = {
      $set: {
        action: input,
        timestamp: timestamp,
      },
    };
    const options = { upsert: false };
    updateData(query, update, options);
    toggleEdit();
  }
</script>

<button on:click={displayModal}>Update</button>

<style>
  button {
    width: 10%;
    margin: 0px 0px 0px 0.5%;
    padding: 0.5%;
    color: white;
    text-transform: uppercase;
    font-size: 1.25em;
    border: none;
    height: min-content;
    background-color: #00896c;
  }

  /* Portrait */
  @media only screen and (min-device-width: 200px) and (max-device-width: 812px) {
    button {
      width: 25%;
      margin: 5px 0px 15px 5.5%;
    }
  }
</style>
