<script>
  import { getContext } from "svelte";
  import Update from '../modals/update_modal.svelte';
  export let toggleEdit;
  export let item_id;

  const { open, close } = getContext('simple-modal');

  const closeModal = () => {
    close(Update);
  }

  const displayModal = (e) => {
    e.preventDefault();
    open(Update, {item_id, toggleEdit, closeModal});
  };

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
