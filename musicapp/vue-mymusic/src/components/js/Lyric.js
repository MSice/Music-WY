export function chengeLyric(Lyric) {
    // 歌词分成行
    const line = Lyric.split('\n');
    const MusicLyric = [];
    // 时间  歌词分开
    let LyricIndex = 1;
    line.forEach((element) => {
        const time = element.match(/\[\d{2}:\d{2}.\d{2,}\]/);
        if (time != null) {
            const lrc = element.split(time)[1];
            const timeReg = time[0].match(/(\d{2}):(\d{2}).(\d{2,})/);
            // 时间转成秒
            const time2seconds = parseInt(timeReg[1]) * 60 + parseInt(timeReg[2]) + parseInt(timeReg[3]) / 1000;

            const obj = {
                Lyrictime: time2seconds,
                Lyriclrc: lrc,
                LyricIndex: LyricIndex,
                lineHeight: 0
            };
            MusicLyric.push(obj);
            LyricIndex++;
        }
    });
    return MusicLyric;
};
