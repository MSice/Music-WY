const state = {
    MusicListID: "",
    MusicList: "", // 当前播放歌单 
    LastMusicList: "", // 上一次播放歌单
    HistoryMusicList: "", // 历史播放
    RandomList: "", // 随机播放歌单 一般不展示
    // 歌单来源
    Listfrom: {
        nowFrom: "",
        lastFrom: "",
        historyFrom: ""
    }
};
export default state;
