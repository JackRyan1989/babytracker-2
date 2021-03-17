<script>
    import Load from "./load_button.svelte";
    import Save from "./save_button.svelte";
    import Clear from "./clear_button.svelte"
</script>

<section>
    <Load/>
    <Save/>
    <Clear/>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        border-top: solid 1px lightgray;
        padding: 1% 0px;
    }
</style>