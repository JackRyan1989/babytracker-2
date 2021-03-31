<script>
  import { updateData } from "../../stores/realm_store.js";
  import dayjs from "dayjs";
  import localizedFormat from 'dayjs/plugin/localizedFormat';
  export let item_id;
  export let toggleEdit;
  export let closeModal;

  let action = null;
  let timestamp = null;

  const handleActionUpdate = (e) => {
      action = e.target.value;
  }

  const handleTimeUpdate = (e) => {
      timestamp = e.target.value;
  }

  function updateCollection(e) {
    e.preventDefault();
    dayjs.extend(localizedFormat);
    let update = {};
    let query = {
      _id: item_id,
    };
    if (action && timestamp) {
        timestamp = dayjs(timestamp).format("llll");
        update = {
          $set: {
            action,
            timestamp,
          },
        };
    } else if (action === null || action === "") {
        timestamp = dayjs(timestamp).format("llll");
        update = {
          $set: {
            timestamp,
          },
        };
    } else if (timestamp === null || timestamp === "") {
        update = {
          $set: {
            action,
          },
        };
    }
    const options = { upsert: false };
    updateData(query, update, options);
    toggleEdit();
    closeModal();
  }
</script>

<section>
  <form>
    <div id="action-container">
      <label for="action-update">Update Ez's Action</label>
      <input on:input={handleActionUpdate} type="text" id="action-update" name="action-update" />
    </div>
    <div id="time-container">
      <label for="time-update">Update Time</label>
      <input
        on:input={handleTimeUpdate}
        type="datetime-local"
        min="2021-01-01T00:00"
        max="2025-01-01T00:00"
        id="time-update"
        name="time-update"
      />
    </div>
    <button on:click={updateCollection}>Submit update</button>
  </form>
</section>

<style>
</style>
