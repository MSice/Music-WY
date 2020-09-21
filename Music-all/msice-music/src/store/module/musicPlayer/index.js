import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
console.log(mutations);
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};