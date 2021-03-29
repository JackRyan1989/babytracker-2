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
    <Buttons />
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

  /* Portrait */
  @media only screen and (min-device-width: 200px) and (max-device-width: 812px) {
    form {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.5fr 1fr;
    }

    .input {
      grid-column: 1 / -1;
      grid-row: 2 / 2;
    }

    .output {
      max-height: 270px;
      grid-column: 1 / -1;
      grid-row: 1 / 1;
      border: none;
      margin: 0px 0px 0px 2%;
      padding: 2%;
    }

    .buttons {
      grid-column: 1 / -1;
      grid-row: 3 / 3;
    }
  }

  /* Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  }
</style>
