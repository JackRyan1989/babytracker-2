<script>
  import { input } from "../../stores/input_store.js";
  let content = {
    input_entry: "",
  }

  export let handleChange;
  handleChange = (event) => {
    content[event.target.id] = event.target.value;
    input.addData(content[event.target.id])
  };

</script>

<textarea on:input={handleChange} value={$input} id="input_entry" placeholder="Type info about Ez here!" rows="8" />

<style>
  textarea {
    display: block;
    width: 100%;
    height: 100%;
    flex: auto;
    min-height: 38rem;
    border: solid lightgrey 1px;
    background: transparent;
    font-size: 1.2rem;
    color: black;
    padding: 1rem;
    resize: none;
  }

  textarea:focus {
    border: solid 2px black;
    outline: none;
  }

  @media only screen and (min-device-width: 200px) and (max-device-width: 812px){
    textarea {
      min-height: 0.25vh;
    }
  }

</style>
