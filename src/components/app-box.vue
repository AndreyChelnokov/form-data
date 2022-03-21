<template>
  <div class="box">
    <div class="box__header">
      <span class="box__title">{{ title }}</span>
      <div class="box__header-mod">
        <slot name="children-header"></slot>
      </div>
    </div>
    <div class="box__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-box',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.box {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 44px;
    margin-bottom: 11px;
  }
}
</style>
