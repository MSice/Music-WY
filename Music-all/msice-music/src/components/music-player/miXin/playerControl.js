import {
    mapMutations,
    mapGetters
} from 'vuex';
export default {
    data() {
        return {
            maxtime: 0,
            nowtime: 0,
        };
    },
    computed: {
        ...mapGetters([
            "playing",
            "fullScreen",
            "MusicListID",
            "PlayingIndex",
            "MusicList",
            "RandomList",
            "mode"
        ]),
        percentage: function () {
            return this.nowtime / this.maxtime;
        }
    },
    methods: {
        ...mapMutations('musicPlayer', {
            setPlaying: "music_Start",
            setFullScreen: "music_FullScreen",
        }),
        test() {
            console.log('进来了');
        },
        play() {
            this.setPlaying(!this.playing);
        },
        updateTime(e) {
            this.nowtime = e.target.currentTime;
        },
        onLoadedmetadata(e) {
            this.maxtime = e.target.duration;
        },
    }
};