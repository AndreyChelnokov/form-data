<template>
  <div v-if="personalData" class="form">

    <form @submit.prevent="submitForm" >

      <app-box :title="'Персональные данные'">
        <div class="form__person">
          <app-input
              @inputChange="personalData.name = $event"
              :type="'text'"
              :name="'name'"
              :title="'Имя'"
              :value="personalData.name"
          />
          <app-input
              @inputChange="personalData.age = $event"
              :type="'number'"
              :name="'age'"
              :title="'Взраст'"
              :value="personalData.age"
          />
        </div>
      </app-box>


      <app-box :title="'Дети (макс. 5)'">
        <template v-slot:children-header>
          <button @click="addNewChildren" type="button" class="form__add-children">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD"/>
            </svg>
            <span>Добавить ребенка</span>
          </button>
        </template>
        <div v-for="(children) in personalData.childrens"
             :key="children.id"
             class="form__children"
        >
          <app-input
              @inputChange="children.name = $event"

              :type="'text'"
              :name="'name'"
              :title="'Имя'"
              :value="children.name"
          />
          <app-input
              @inputChange="children.age = $event"

              :type="'number'"
              :name="'age'"
              :title="'Возраст'"
              :value="children.age"
          />
          <button type="button" @click="removeChildren(children.id)" class="form__children-remove">Удалить</button>
        </div>

      </app-box>

      <button class="form__submit" type="submit">Сохранить</button>

    </form>

  </div>
</template>

<script>
import appInput from '../components/app-input'
import appBox from '../components/app-box'

export default {
  name: 'Form',
  data: function () { return {
    personalData: {
      name: '',
      age: '',
      childrens: [
        {
          id: 1,
          name: '',
          age: '',
        }
      ]
    }
  }},
  methods: {
    submitForm: function (e) {
      // this.validateForm();

      this.$store.commit('SET_NEW_DATA', this.personalData)
    },
    removeChildren: function (id) {
      const indexRemoveItem = this.personalData.childrens.findIndex(item => item.id === id);
      this.personalData.childrens.splice(indexRemoveItem, 1)
    },
    addNewChildren: function () {
      const idNewItem = this.idNewItem;

      this.personalData.childrens.push({
        id: idNewItem,
        name: '',
        age: '',
      })
    },
  },
  computed: {
    personalDataState: function () {
      return this.$store.state.personalData;
    },
    idNewItem: function () {
      if (this.personalData.childrens.length) {
        return this.personalData.childrens[this.personalData.childrens.length - 1].id + 1;
      }

      return 1;
    },
  },
  components: {
    'app-input': appInput,
    'app-box': appBox,
  },
  created() {
    this.personalData = JSON.parse(JSON.stringify(this.personalDataState));
  }
}
</script>

<style lang="scss">
.form {
  &__submit {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;

    height: 44px;
    background: #01A7FD;
    border-radius: 100px;
    padding: 0 20px;
    border: none;

    cursor: pointer;
  }
  &__add-children {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #01A7FD;
    border: 2px solid #01A7FD;
    box-sizing: border-box;
    border-radius: 100px;
    height: 44px;
    padding: 0 20px;
    background: transparent;
    cursor: pointer;

    & span {
      margin-left: 10px;
    }
  }
  &__person {
    & > div {
      margin-bottom: 10px;
    }
  }
  &__children {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-remove {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #01A7FD;

      border: none;
      background: transparent;
      padding: 0;

      cursor: pointer;
    }

    & > div {
      flex-grow: 1;
      margin-right: 18px;
      margin-bottom: 10px;
    }
  }
}
</style>
