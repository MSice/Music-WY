import { playMode } from '../components/js/mode';
const state = {
    PlayerAudio: {
        List: {
            MusicList: [],
            OldMusicList: "",
            HistoryMusicList: "",
            RandomList: "",
            Listfrom: {
                nowFrom: "",
                lastFrom: "",
                historyFrom: ""
            }
        },
        MusicInfo: {
            musicId: "1394494933",
            PlayingIndex: -1
        },
        musicLodding: false,
        playing: false,
        fullScreen: false,
        mode: playMode.Only
    },
    MusicList: {
        ID: "4869164805"
    }
};
export default state;
