<script>
  import { data } from "../../stores/store.js";
  let content = {
    input_entry: "",
  }

  export let handleChange;
  handleChange = (event) => {
    content[event.target.id] = event.target.value;
    data.addData(content[event.target.id])
  };

</script>

<textarea on:input={handleChange} id="input_entry" placeholder="Type info about Ez here!" rows="8" />

<style>
  textarea {
    display: block;
    width: 100%;
    height: 100%;
    flex: auto;
    min-height: 38rem;
    border: none;
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
</style>
