<script>
  import InputWindow from "../windows/input_window.svelte";
  import OutputWindow from "../windows/output_window.svelte";
  import Buttons from "../buttons/button_container.svelte";
</script>

<form>
  <div class="input">
    <InputWindow />
  </div>
  <div class="output">
    <OutputWindow />
  </div>
  <div class="buttons">
    <Buttons/>
  </div>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr minmax(1fr max-content);
  }

  .input {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  .output {
    max-height: 600px;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    overflow: hidden;
    overflow-y: scroll;
    border-left: solid 1px lightgray;
    margin: 0px 0px 0px 2%;
    padding: 2%;
  }

  .buttons {
    grid-column: 1 / -1;
    grid-row: 2 / 2;
  }
</style>
