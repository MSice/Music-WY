// 播放组件相关
// 播放
export const playing = state =>  state.musicPlayer.playing;
// 是否全屏
export const fullScreen = state => state.musicPlayer.fullScreen;
// 歌曲ID
export const musicId = state => state.musicPlayer.MusicInfo.musicId;
// 歌曲获取状态
export const musicLodding = state => state.musicPlayer.musicLodding;
// 歌曲索引
export const PlayingIndex = state => state.musicPlayer.MusicInfo.PlayingIndex;
// 播放模式
export const mode = state => state.musicPlayer.mode;
// 当前播放歌单信息
export const MusicList = state => state.musicList.MusicList;
// 上一次播放歌单
export const OldMusicList = state => state.musicList.OldMusicList;
// 历史播放歌单
export const HistoryMusicList = state => state.musicList.HistoryMusicList;
// 随机播放歌单
export const RandomList = state => state.musicList.RandomList;
// 歌单来源
export const Listfrom = state => state.musicList.Listfrom;