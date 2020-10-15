/**
  * 
  * @param {*} time 时长 单位：s number类型
  */
export function music_time(time) {
    console.log(new Date().getSeconds()  + '-------8');
    if (typeof time != 'number') {
        return '00:00';
    }
    let h=0;
    let timeFormat = '';
    if (time >= 3600) {
        h = Math.floor(time / 3600);
        time = time % 3600;
        if (h < 10) {
            h = '0' + h;
        }
        timeFormat = timeFormat + h + ':';
    }
    let m = Math.floor(time / 60);
    if (m < 10) {
        m = '0' + m;
    }
    timeFormat = timeFormat + m + ':';
    time = time % 60;
    let s = Math.floor(time);
    if (s < 10) {
        s = '0' + s;
    }
    timeFormat = timeFormat + s;
    return timeFormat;
}