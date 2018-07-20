<template>
    <button class="btn" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      if (this.disabled) return false
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  outline: 0;
  background-color: grey;
  color: white;
  transition: background-color 0.2s;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  &:hover {
    background-color: rgba(128, 128, 128, 0.5);
  }
  &.pink {
    background-color: pink;
  }
  &.pink:hover {
    background-color: rgba(255, 192, 203, 0.5);
  }
  &.red{
    background-color: red;
  }
  &.red:hover{
    background-color: rgba(255, 0, 0, 0.5);
  }
  &.orange{
    background-color: orange;
  }
  &.orange:hover{
    background-color: rgba(255, 166, 0, 0.5);
  }
  &.skyblue{
    background-color: skyblue;
  }
  &.skyblue:hover{
    background-color: rgba(135, 207, 235, 0.5);
  }
  &.green{
    background-color: green;
  }
  &.green:hover{
    background-color: rgba(0, 128, 0, 0.5);
  }
  &.blue{
    background-color: blue;
  }
  &.blue:hover{
    background-color: rgba(0, 0, 255, 0.5);
  }
  &.navy{
    background-color: navy;
  }
  &.navy:hover{
    background-color: rgba(0, 0, 128, 0.5);
  }
  &.salmon{
    background-color: salmon;
  }
  &.salmon:hover{
    background-color: rgba(250, 128, 114, 0.5);
  }
  &.white{
    background-color: white;
    color: black;
  }
  &.white:hover{
    background-color: #eaeaea;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
}
</style>
