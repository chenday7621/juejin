<template>
  <div class="content_side">
    <div class="side_item1">
      <div class="sign_item">
        <div class="sign_item1">
          <span class="sign_text1">你好</span>
          <div class="sign_text2">点亮在社区的每一天</div>
        </div>
        <button class="sign_item2">
          <span class="sign_text3">去签到</span>
        </button>
      </div>
    </div>
    <div class="side_item2">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexSlide",
};
</script>

<style scoped>
.content_side {
  position: absolute;
  top: 115px;
  right: 310px;
  background-color: #fff;
}
.side_item1 {
  width: 240px;
  margin-bottom: 16px;
  padding: 16px;
}
.sign_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.sign_item1 {
  display: flex;
  flex-direction: column;
}
.sign_item2 {
  border-radius: 4px;
  height: 36px;
  width: 74px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(30, 128, 255, 0.3);
  background-color: rgba(30, 128, 255, 0.05);
}
.sign_text1 {
  color: #1d2129;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.sign_text2 {
  color: #8a919f;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
}
.sign_text3 {
  color: #1e80ff;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}
.side_item2 {
  width: 240px;
}
</style>
