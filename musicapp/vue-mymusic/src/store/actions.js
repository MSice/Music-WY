import * as music from './mutations.type';

export const ListPlaying = function ({ commit }, { list, listFrom, ID, index }) {
    commit(music.chengeMusicList, list);
    commit(music.chengeListfrom, listFrom);
    commit(music.chengeListID, ID);
    commit(music.chengePlayingIndex, index);
    commit(music.musicFullScreen, true);
};
