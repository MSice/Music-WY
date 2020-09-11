import { playMode } from '@/components/js/mode';
const state = {
    List: {
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
    },
    // 歌曲信息 ID 索引
    MusicInfo: { 
        musicId: "1394494933",
        PlayingIndex: -1
    },
    // 音乐加载状态
    musicLodding: false,
    // 音乐播放状态
    playing: false,
    // 播放器模式 全屏 / 迷你 
    fullScreen: false,
    // 播放模式
    mode: playMode.Only
};
export default state;
