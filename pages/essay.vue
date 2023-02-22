<template>
  <div>
    <div class="main-body">
      <main class="article_body">
        <essay-info />
        <essay-side />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "essay",
};
</script>

<style>

.main-body {
  background-color: #f4f5f5;
  padding-top: 10px;
}
.article_body {
  position: relative;
  margin: 1.767rem auto;
  max-width: 1140px;
  padding-right: 320px;
  /* margin-top: 40px; */
}
</style>
