import {
    mapMutations,
    mapGetters
} from 'vuex';
import {
    _getSongDetail,
    _getSongUrl
} from '@/api/musicPlayer';
export default {
    data() {
        return {
            maxtime: 0,
            nowtime: 0,
            musicUrl: '',
            musicName: '',
            musicPicUrl: '',
            musicAuthor: ''
        };
    },
    computed: {
        ...mapGetters([
            "playing",
            "fullScreen",
            "musicId",
            "PlayingIndex",
            "MusicList",
            "RandomList",
            "LastMusicList",
            "HistoryMusicList",
            "mode"
        ]),
        percentage: function () {
            return this.nowtime / this.maxtime;
        },
        music_url: function () {
            console.log(this.musicUrl);
            return this.musicUrl;
        }
    },
    methods: {
        ...mapMutations('musicPlayer', {
            setPlaying: "music_Start",
            setfullscreen: "music_FullScreen",
        }),
        async get_all (id) {
            console.log(id);
            await _getSongDetail(id).then(ret=>{
                console.log(ret);
                this.musicName = ret.songs[0].al.name;
                this.musicPicUrl = ret.songs[0].al.picUrl;
                this.musicAuthor = ret.songs[0].ar[0].name;
            });
            await _getSongUrl(id).then(ret=>{
                console.log(ret);
                this.musicUrl = ret.data[0].url;
                console.log(this.musicUrl);
            });
        },
        show() {
            console.log('show');
            this.setFullScreen();
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
    },
    created() {
        this.get_all(this.musicId);
    },
};