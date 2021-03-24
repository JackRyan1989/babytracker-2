<script>
    import Save from "./save_button.svelte";
    export let appInfo;
</script>

<section>
    <Save {appInfo}/>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        border-top: solid 1px lightgray;
        padding: 1% 0px;
    }
</style>