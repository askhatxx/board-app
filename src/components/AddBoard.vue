<template>
  <form @submit.prevent="submit" class="form-add">
    <div v-if="alert" class="form-add__alert">{{ alert }}</div>
    <input v-model="title" type="text" placeholder="Title" class="form-add__input"/>
    <textarea v-model="description" placeholder="Description" class="form-add__textarea"/>
    <div class="form-add__btn-group">
      <button type="submit" class="form-add__btn">Добавить</button>
      <button @click="cancel" class="form-add__btn form-add__btn_cancel">Отмена</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      description: '',
      alert: ''
    }
  },
  methods: {
    ...mapActions(['addBoard']),
    submit() {
      if (!this.title.trim()) {
        this.alert = 'Заполните заголовок'
      } else {
        this.addBoard({
          title: this.title,
          description: this.description,
          id: Date.now()
        })
        this.$router.push('/')
      }
    },
    cancel() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form-add {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.form-add__input,
.form-add__textarea {
  background: #f2f2f2;
  border: none;
  outline: none;
  font-family: inherit;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
  color: #000000;
  font-size: 1rem;
  transition: .3s;
}
.form-add__input::placeholder,
.form-add__textarea::placeholder {
  color: #333333;
  opacity: .8;
}
.form-add__textarea {
  min-height: 100px;
  resize: vertical;
}
.form-add__btn-group {
  text-align: center;
}
.form-add__btn {
  background: #E44E1E;
  color: #FFFFFF;
  padding: 5px 10px 7px;
  margin: 10px 5px;
  border-radius: 5px;
  display: inline-block;
  font-family: inherit;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
}
.form-add__btn_cancel {
  background: #bdbdbd;
  color: #000000;
}
.form-add__alert {
  background: #FAD8D8;
  color: #751919;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
}
</style>
