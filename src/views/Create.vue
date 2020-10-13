<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>

      <form>
        <div class="input-field">
          <input id="first_name" placeholder="Tilte" type="text" class="validate" required>
          <label for="title"></label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  components: {},
  data: () => ({
      description: '',
      title: ''
  }),
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    })
  }
}
</script>
