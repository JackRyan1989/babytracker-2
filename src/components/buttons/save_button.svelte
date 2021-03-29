<script>
  import { saveData, getData } from "../../stores/realm_store.js";
  import { input } from "../../stores/input_store.js";
  import { output } from "../../stores/output_store";
  import dayjs from "dayjs";
  import LocalizedFormat from "dayjs/plugin/localizedFormat";

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


  function addToCollection(inputData) {
    return function (e) {
      e.preventDefault();
      dayjs.extend(LocalizedFormat);
      let timestamp = dayjs().format("llll");
      let dataObj = {
        action: inputData,
        timestamp,
      };
      if (inputData.length > 0) {
        saveData(dataObj);
        error = false;
        input.resetData();
        pullData();
      } else {
        error = true;
      }
    };
  }
</script>

<button on:click={addToCollection($input)}>Save</button>

{#if error}
  <p>Please enter text before submitting.</p>
{/if}

<style>
  button {
    width: 10%;
    margin: 0px 0px 0px 1%;
    padding: 1%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-transform: uppercase;
    font-size: 1.5em;
    border: none;
    height: min-content;
  }

  p {
    margin-left: 2%;
  }
</style>
