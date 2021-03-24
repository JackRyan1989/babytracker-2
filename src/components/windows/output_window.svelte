<script>
 import { data } from "../../stores/store.js";
</script>

<section>
    <h2>The Latest on Ez</h2>
    <div class="output_container">
    {$data}
</div>
</section>

<style>
    h2 {
        position: fixed;
        background-color: #fff;
        margin: 0px;
        padding: 1%;
        top: 0;
        border-bottom: solid 1px lightgray;
        width: 25%; 
    }

    .output_container {
        margin: 10% 0px;
        padding: 1%;
    }
</style>