<template>
  <div>
    <div class="options">
      <router-link to="/new" class="options__btn-add">Добавить</router-link>
    </div>
    <div class="boards">
      <Board v-for="board in allBoards" :key="board.id" :board="board"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Board from '@/components/Board'

export default {
  components: {
    Board
  },
  computed: {
    ...mapGetters(['allBoards'])
  }
}
</script>

<style scoped>
.options {
  text-align: center;
  margin: 20px 0 40px;
}
.options__btn-add {
  background: #E44E1E;
  color: #FFFFFF;
  padding: 5px 10px 7px;
  border-radius: 5px;
  display: inline-block;
  font-family: inherit;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
}
.boards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
@media (max-width: 700px) {
  .boards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 500px) {
  .boards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
