<template>
  <div class="board-item">
    <h3 class="board-item__title">{{ board.title }}</h3>
    <p class="board-item__desc">{{ board.description }}</p>
    <button @click="deleteBoard(board.id)" class="board-item__btn-del">
      <i class="board-item__btn-del-icon"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['board'],
  methods: {
    ...mapActions(['deleteBoard'])
  }
}
</script>

<style scoped>
.board-item {
  background: #f2f2f2;
  height: 200px;
  overflow-y: auto;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  cursor: move;
}
.sortable-ghost {
  background: #F5D0C4;
}
.board-item__title {
  margin-bottom: 10px;
  padding-right: 15px;
  word-wrap: break-word;
}
.board-item__desc {
  word-wrap: break-word;
}
.board-item__btn-del {
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
  font-family: inherit;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
}
.board-item__btn-del-icon {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: .1s;
  opacity: .5;
}
.board-item__btn-del-icon:hover {
  opacity: 1;
}
.board-item__btn-del-icon::before,
.board-item__btn-del-icon::after {
  content: '';
  background: #444444;
  display: block;
  width: 100%;
  height: 10%;
  border-radius: 4px;
  position: absolute;
  top: 50%;
}
.board-item__btn-del-icon::before {
  transform: translateY(-50%) rotate(45deg);
}
.board-item__btn-del-icon::after {
  transform: translateY(-50%) rotate(-45deg);
}
</style>
