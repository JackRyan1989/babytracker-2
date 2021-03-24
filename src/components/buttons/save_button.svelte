<script>
 import { saveData } from "../../stores/auth_store.js";

 function addToCollection(e) {
    e.preventDefault();
    saveData;
 }
</script>

<button on:click={addToCollection}>Save</button>

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
</style>