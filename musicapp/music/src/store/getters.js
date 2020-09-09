// 播放组件相关
// 播放
export const playing = state => state.PlayerAudio.playing;
// 是否全屏
export const fullScreen = state => state.PlayerAudio.fullScreen;
// 歌曲ID
export const musicId = state => state.PlayerAudio.MusicInfo.musicId;
// 歌曲获取状态
export const musicLodding = state => state.PlayerAudio.musicLodding;
// 歌曲索引
export const PlayingIndex = state => state.PlayerAudio.MusicInfo.PlayingIndex;
// 播放模式
export const mode = state => state.PlayerAudio.mode;
// 当前播放歌单信息
export const MusicList = state => state.PlayerAudio.List.MusicList;
// 上一次播放歌单
export const OldMusicList = state => state.PlayerAudio.List.OldMusicList;
// 历史播放歌单
export const HistoryMusicList = state => state.PlayerAudio.List.HistoryMusicList;
// 随机播放歌单
export const RandomList = state => state.PlayerAudio.List.RandomList;
// 歌单来源
export const Listfrom = state => state.PlayerAudio.List.Listfrom;
// 歌单相关
// 歌单ID
export const MusicListID = state => state.MusicList.ID;
