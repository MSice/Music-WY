import { playMode } from '@/components/js/mode';
const state = {
    // 歌曲信息 ID 索引
    MusicInfo: { 
        musicId: "1463165983",
        PlayingIndex: -1
    },
    // 音乐加载状态
    musicLodding: false,
    // 音乐播放状态
    playing: false,
    // 播放器模式 全屏 / 迷你 
    fullScreen: true,
    // 播放模式
    mode: playMode.Only
};
export default state;
