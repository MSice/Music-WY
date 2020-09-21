import * as playerControl from '../../mutations.type';
const mutations = {
    [playerControl.musicPlayer.musicStart](state, playing) {
        state.playing = playing;
    },
    [playerControl.musicPlayer.musicFullScreen](state, type) {
        state.fullScreen = type;
    },
    [playerControl.musicPlayer.musicLoading](state, type) {
        state.musicLodding = type;
    },
};
export default mutations;