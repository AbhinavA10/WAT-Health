<template>
  <div style="font-family: 'Comic Sans MS'">
    <div class="card">
      <div class="card-header">
        {{data.title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{data.id}}</h5>
        <p class="card-text">{{data.body}}</p>
        <button class="btn btn-warning">View</button>
        <button class="btn btn-success">Upvote</button>
        <button class="btn btn-danger">Downvote</button>
        <button class="btn btn-primary">Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: ['data']
  }
</script>

<style scoped>

</style>
