export default {
  state: {
    boards: []
  },
  getters: {
    allBoards(state) {
      return state.boards
    }
  },
  mutations: {
    updateBoards(state, boards) {
      localStorage.setItem('boards', JSON.stringify(boards))
      state.boards = boards
    }
  },
  actions: {
    initState({ commit }) {
      const initialBoards = [
        { title: 'Board 1', description: 'Description 1', id: 1 },
        { title: 'Board 2', description: 'Description 2', id: 2 }
      ]
      const boards = localStorage.getItem('boards') ? JSON.parse(localStorage.getItem('boards')) : initialBoards
      commit('updateBoards', boards)
    },
    addBoard({ commit, state }, newBoard) {
      const boards = [...state.boards, newBoard]
      commit('updateBoards', boards)
    },
    deleteBoard({ commit, state }, id) {
      const boards = state.boards.filter(item => item.id !== id)
      commit('updateBoards', boards)
    }
  }
}
