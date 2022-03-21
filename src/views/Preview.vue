<template>
  <div class="">
      <app-box :title="'Персональные данные'">
        <span v-if="personalData.name" class="preview__personal-name">{{ personalData.name }} <span v-if="personalData.age">, {{ personalData.age }} {{ declOfNum(personalData.age) }}</span></span>
        <div v-else class="empty">
          Данные о пользователе отсутствуют
        </div>
      </app-box>



      <app-box :title="'Дети'">
        <div v-if="personalData.childrens && personalData.childrens[0].name != ''" class="">
          <div  v-for="(children) in personalData.childrens"
                :key="children.id"
                class="preview__children-name"
          >
            {{ children.name }} <span v-if="children.age">, {{ children.age }} {{ declOfNum(children.age) }}</span>
          </div>
        </div>

        <div v-else class="empty">
          Данные о детях отсутствуют
        </div>
      </app-box>




  </div>
</template>

<script>
import appBox from '../components/app-box';
import { declOfNum } from '../utils'

export default {
  name: 'Preview',
  methods: {
    declOfNum: function (count) {
      return declOfNum(Number(count), ['год', 'года', 'лет'])
    },
  },
  computed: {
    personalData: function () {
      return this.$store.state.personalData;
    },
  },
  components: {
    'app-box': appBox
  }
}
</script>


<style lang="scss">
.preview {
  &__children-name {
    background: #F1F1F1;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    width: fit-content;

    color: #000000;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  &__personal-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #111111;
  }
}
</style>
