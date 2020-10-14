/**
  * 
  * @param {*} time 时长 单位：s number类型
  */
export function music_time(time) {
    if (typeof time != 'number') {
        return '00:00';
    }
    let h=0;
    let timeFormat = '';
    if (time >= 3600) {
        h = Math.floor(time / 3600);
        time = time % 3600;
        h = h.toString().padStart(2, '0');
        timeFormat = timeFormat + h + ':';
    }
    let m = Math.floor(time / 60);
    if (m < 10) {
        m = '0' + m;
    }
    m = m.toString().padStart(2, '0');
    timeFormat = timeFormat + m + ':';
    time = time % 60;
    let s = Math.floor(time);
    s = s.toString().padStart(2, '0');
    timeFormat = timeFormat + s;
    return timeFormat;
}