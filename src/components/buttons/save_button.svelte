<script>
 import { saveData } from "../../stores/auth_store.js"; 
 import { data } from "../../stores/store.js";
 import dayjs from "dayjs";
 import LocalizedFormat from "dayjs/plugin/localizedFormat";
 
let error = false;

 function addToCollection(input) {
     return function(e) {
         e.preventDefault();
         dayjs.extend(LocalizedFormat);
         let timestamp = dayjs().format('llll');
         let dataObj = {
             action: input,
             timestamp,
         }
         if (input.length > 0) {
             saveData(dataObj);
             error = false;
             data.resetData();
         } else {
            error = true;
         }
     }
 }
</script>

<button on:click={addToCollection($data)}>Save</button>

{#if error} 
    <p>Please enter text before submitting.</p>
{/if}

<style>
    button {
        width: 10%;
        margin: 0px 0px 0px 1%;
        padding: 1%;
        background: rgba(0,0,0,0.5);
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