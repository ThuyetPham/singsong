import { createStore } from "vuex";
const store = createStore({
    state() {
      return {
        route: "messages",
        friend: {},
        showSideBar: true,
        showSetting: false,
        showMore: false,
      };
    },
})

export default store;