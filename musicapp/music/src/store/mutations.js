import * as music from './mutations.type.js';
const mutations = {
    [music.musicStart](state, playing) {
        state.PlayerAudio.playing = playing;
    },
    [music.musicFullScreen](state, type) {
        state.PlayerAudio.fullScreen = type;
    },
    [music.chengeMusicList](state, list) {
        // if (list === state.PlayerAudio.List.MusicList) {
        //     return;
        // }
        if (list === "") {
            state.PlayerAudio.MusicInfo.PlayingIndex = -1;
        }
        if (state.PlayerAudio.List.MusicList !== "") {
            if (state.PlayerAudio.List.OldMusicList !== "") {
                state.PlayerAudio.List.HistoryMusicList = state.PlayerAudio.List.OldMusicList;
            }
            state.PlayerAudio.List.OldMusicList = state.PlayerAudio.List.MusicList;
        }
        state.PlayerAudio.List.MusicList = list;
    },
    [music.chengeListfrom](state, From) {
        if (state.PlayerAudio.List.MusicList !== "") {
            if (state.PlayerAudio.List.OldMusicList !== "") {
                state.PlayerAudio.List.Listfrom.historyFrom = state.PlayerAudio.List.Listfrom.lastFrom;
            }
            state.PlayerAudio.List.Listfrom.lastFrom = state.PlayerAudio.List.Listfrom.nowFrom;
        }
        state.PlayerAudio.List.Listfrom.nowFrom = From;
    },
    [music.deleteMusicListLine](state, ind) {
        state.PlayerAudio.List.MusicList.splice(ind, 1);
    },
    [music.chengeListID](state, ID) {
        if (state.PlayerAudio.List.MusicList !== "") {
            if (state.PlayerAudio.List.OldMusicList !== "") {
                state.PlayerAudio.List.Listfrom.historyFrom = state.PlayerAudio.List.Listfrom.lastId;
            }
            state.PlayerAudio.List.Listfrom.historyId = state.PlayerAudio.List.Listfrom.nowId;
        }
        state.PlayerAudio.List.Listfrom.nowId = ID;
    },
    [music.chegeRandomList](state, List) {
        const ListLength = List.length;
        for (var i = 0; i < ListLength; i++) {
            const a = parseInt(Math.random() * ListLength);
            const temp = List[a];
            List[a] = List[i];
            List[i] = temp;
        }
        state.PlayerAudio.List.RandomList = List;
    },
    [music.chengePlayingIndex](state, ind) {
        state.PlayerAudio.MusicInfo.PlayingIndex = ind;
    },
    [music.chengeMode](state, mode) {
        state.PlayerAudio.mode = mode;
    },
    [music.searchAdd](state, details){
        state.PlayerAudio.List.MusicList.push(details);
        console.log(state,details);
    }
};
export default mutations;
