<template>
  <div class="input" :class="`input__${type} input__${name}`">
    <div class="input__title">{{ title }}</div>

    <input @input="inputChange" class="input__field" :type="type" :name="name" :placeholder="title" v-model="localValue">
  </div>
</template>

<script>
export default {
  name: 'app-input',
  data: function () { return {
    localValue: ''
  }},
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Название поля',
    }
  },
  methods: {
    inputChange: function () {
      this.$emit('inputChange', this.localValue)
    },
  },
  created() {
    this.localValue = this.value;
  }
}
</script>


<style scoped lang="scss">
.input {
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  padding: 8px 16px;

  &__title {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
    text-transform: capitalize;
  }

  &__field {
    width: 100%;
    height: 24px;

    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #111111;

    padding: 0;
    border: none;
    outline: none;

    margin-top: 2px;
  }
}
</style>
