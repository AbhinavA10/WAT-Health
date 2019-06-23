<template>
  <div class="container">
    <div class="form-group">
      <div class="row">
        <div class="col">
          <textarea class="form-control" placeholder="Enter Question" rows="5" v-model="content"></textarea><br>
            <div class="text-center">
              <button type="button" class="btn-primary btn-lg"> Ask Now!</button>
            </div>
        <br>
          <div class="text-center">
            <button type="button" class="btn-warning btn-lg"> Ask a Doctor!</button>
          </div>
          <br><br><br><br>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>{{content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ask",
    data() {
      return {
        content: ""
      }
    }
  }
</script>

<style scoped>

</style>
