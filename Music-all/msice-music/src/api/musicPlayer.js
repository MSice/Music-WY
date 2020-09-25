import request from '@/utils/request';

function get(url) {
    return request({
        meththod: 'get',
        url: url
    });
}

// 获取歌曲详情
export function _getSongDetail(ids) {
    const requstUrl = '/song/detail?ids=' + ids;
    return get(requstUrl);
}

//获取音乐url
export function _getSongUrl(id) {
    const requstUrl = '/song/url?id=' + id;
    return get(requstUrl);
}