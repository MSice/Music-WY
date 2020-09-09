import axios from 'axios';
// 接口
const address = 'http://localhost:3000';

function getaxios(urL) {
    return axios.get(urL);
}
// 手机登录 必选参数 : phone: 手机号码 password: 密码
export function _getLoginPhone(phone, password) {
    const requstUrl = address + '/login/cellphone?phone=' + phone + '&password=' + password;
    return getaxios(requstUrl);
}

// 刷新登录
export function _getLoginRefresh() {
    const requstUrl = address + '/login/refresh';
    return getaxios(requstUrl);
}

// 发送验证码 必选参数 : phone: 手机号码
export function _getCaptchaSent(phone) {
    const requstUrl = address + '/captcha/sent?phone=' + phone;
    return getaxios(requstUrl);
}

// 验证验证码 必选参数 : phone: 手机号码
export function _getCaptchaVerify(phone) {
    const requstUrl = address + '/captcha/verify?phone=' + phone;
    return getaxios(requstUrl);
}

// 注册(修改密码)必选参数 :captcha: 验证码 phone: 手机号码 password: 密码 nickname: 昵称
export function _getRegisterCellphone(captcha, phone, password, nickname) {
    const requstUrl = address + '/register/cellphone?phone=' + phone + '&password=' + password + '&captcha=' + captcha + '&nickname=' + nickname;
    return getaxios(requstUrl);
}

// 检测手机号码是否已注册 必选参数 : phone : 手机号码
export function _getCellphoneCheck(phone) {
    const requstUrl = address + '/cellphone/existence/check?phone=' + phone;
    return getaxios(requstUrl);
}

// 初始化昵称 必选参数 : nickname : 昵称
export function _getActivateProfile(nickname) {
    const requstUrl = address + '/activate/init/profile?nickname=' + nickname;
    return getaxios(requstUrl);
}

// 退出登录
export function _getLogout() {
    const requstUrl = address + '/logout';
    return getaxios(requstUrl);
}

// 登录状态
export function _getLoginStatus() {
    const requstUrl = address + '/login/status';
    return getaxios(requstUrl);
}

// 获取用户详情 必选参数 : uid : 用户 id
export function _getUserDetail(uid) {
    const requstUrl = address + '/user/detail?uid=' + uid;
    return getaxios(requstUrl);
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export function _getUserSubcount() {
    const requstUrl = address + '/user/subcount';
    return getaxios(requstUrl);
}

// 更新用户信息
export function _getUserUpdate(gender, birthday, nickname, province, city, signature) {
    const requstUrl = address + '/user/update?gender=0&signature=' + signature + '&city=' + city + '&nickname=' + nickname + '&birthday=' + birthday + '&province=' + province;
    return getaxios(requstUrl);
}

// 获取用户歌单
export function _getUserPlaylist(uid) {
    const requstUrl = address + '/user/playlist?uid=' + uid;
    return getaxios(requstUrl);
}

// 更新歌单
export function _getPlaylistUpdate(id, name, desc, tags) {
    const requstUrl = address + '/playlist/update?id=' + id + '&name=' + name + '&desc=' + desc + '&tags=' + tags;
    return getaxios(requstUrl);
}

// 更新歌单描述
export function _getPlayistDescUpdate(id, desc) {
    const requstUrl = address + '/playlist/desc/update?id=' + id + '&desc=' + desc;
    return getaxios(requstUrl);
}

// 更新歌单名
export function _getPlaylistNmaeUpdate(id, name) {
    const requstUrl = address + '/playlist/name/update?id=' + id + '&name=' + name;
    return getaxios(requstUrl);
}

// 云村热评
export function _getCommentHotwallList() {
    const requstUrl = address + '/comment/hotwall/list';
    return getaxios(requstUrl);
}

// 歌手分类列表
export function _getArtistList(cat) {
    const requstUrl = address + '/artist/list?cat=' + cat;
    return getaxios(requstUrl);
}

// 歌手热门50首歌曲
export function _getArtistTopSong(type = '0') {
    const requstUrl = address + '/artist/top/song?type=' + type;
    return getaxios(requstUrl);
}

// 歌单分类
export function _getPlaylistCatlist() {
    const requstUrl = address + '';
    return getaxios(requstUrl);
}

// 热门歌单分类
export function _getPlaylistHot() {
    const requstUrl = address + '/playlist/hot';
    return getaxios(requstUrl);
}

// 歌单 ( 网友精选碟 )
export function _getTopPlaylist(limit = '6', order = 'hot') {
    const requstUrl = address + '/top/playlist?limit=' + limit + '&order=' + order;
    return getaxios(requstUrl);
}

// 获取精品歌单
export function _getTopPlaylistHighquality(limit, before) {
    const requstUrl = address + '/top/playlist/highquality?before=' + before + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 相关歌单推荐
export function _getRelatedPlaylist(id) {
    const requstUrl = address + '/related/playlist?id=' + id;
    return getaxios(requstUrl);
}

// 获取歌单详情
export function _getPlaylistDetail(id) {
    const requstUrl = address + '/playlist/detail?id=' + id;
    return getaxios(requstUrl);
}

// 获取音乐 url
export function _getSongUrl(id) {
    const requstUrl = address + '/song/url?id=' + id;
    return getaxios(requstUrl);
}

// 音乐是否可用
export function _getCheckMusic(id) {
    const requstUrl = address + '/check/music?id=' + id;
    return getaxios(requstUrl);
}

// 搜索
export function _getSearch(keywords) {
    const requstUrl = address + '/search?keywords=' + keywords;
    return getaxios(requstUrl);
}

// 默认搜索关键词
export function _getSearchDefault() {
    const requstUrl = address + '/search/default';
    return getaxios(requstUrl);
}

// 热搜列表(详细  1)/(简略  0)
export function _getSearchHot(type = 1) {
    if (type === 1) {
        const requstUrl = address + '/search/hot/detail';
        return getaxios(requstUrl);
    } else {
        const requstUrl = address + '/search/hot';
        return getaxios(requstUrl);
    }
}

// 搜索建议
export function _getSearchSuggest(keywords, type = 'mobile') {
    const requstUrl = address + '/search/suggest?keywords=' + keywords + '&type=' + type;
    return getaxios(requstUrl);
}

// 搜索多重匹配
export function _geSearchMultimatch(keywords) {
    const requstUrl = address + '/search/multimatch?keywords=' + keywords;
    return getaxios(requstUrl);
}

// 获取歌词
export function _getLyric(id) {
    const requstUrl = address + '/lyric?id=' + id;
    return getaxios(requstUrl);
}

// 新歌速递
export function _getTopSong(type,limit) {
    const requstUrl = address + '/top/song?limit=' + limit +'&type=' + type;
    return getaxios(requstUrl);
}

// 歌曲评论
export function _getCommentMusic(id, limit = 20) {
    const requstUrl = address + '/comment/music?id=' + id + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 专辑评论
export function _getCommentAlbum(id, limit = 20) {
    const requstUrl = address + '/comment/album?id=' + id + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 歌单评论
export function _getCommentPlaylist(id, limit = 20) {
    const requstUrl = address + '/comment/playlist?id=' + id + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 热门评论
export function _get(id, type = 0, limit = 20) {
    const requstUrl = address + '/comment/hot?id=' + id + '&type=' + type + '&limit=' + limit;
    return getaxios(requstUrl);
}

// banner
export function _getBanner(type = 1) {
    const requstUrl = address + '/banner?type=' + type;
    return getaxios(requstUrl);
}

// 获取歌曲详情
export function _getSongDetail(ids) {
    const requstUrl = address + '/song/detail?ids=' + ids;
    return getaxios(requstUrl);
}

// 获取专辑内容
export function _getAlbum(id) {
    const requstUrl = address + '/album?id=' + id;
    return getaxios(requstUrl);
}

// 获取歌手单曲
export function _getArtists(id) {
    const requstUrl = address + '/artists?id=' + id;
    return getaxios(requstUrl);
}

// 获取歌手 mv
export function _getArtistMV(id) {
    const requstUrl = address + '/artist/mv?id=' + id;
    return getaxios(requstUrl);
}

// 获取歌手专辑
export function _getArtistAlbum(id, limit = 20) {
    const requstUrl = address + '/artist/album?id=' + id + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 获取歌手描述
export function _getArtistDesc(id) {
    const requstUrl = address + '/artist/desc?id=' + id;
    return getaxios(requstUrl);
}

// 获取相似歌手
export function _getSimiArtist(id) {
    const requstUrl = address + '/simi/artist?id=' + id;
    return getaxios(requstUrl);
}

// 获取相似歌单
export function _getSimiPlaylist(id) {
    const requstUrl = address + '/simi/playlist?id=' + id;
    return getaxios(requstUrl);
}

// 获取相似音乐
export function _getSmiiSong(id) {
    const requstUrl = address + '/simi/song?id=' + id;
    return getaxios(requstUrl);
}

// 获取最近 5 个听了这首歌的用户
export function _getSimiUser(id) {
    const requstUrl = address + '/simi/user?id=' + id;
    return getaxios(requstUrl);
}

// 获取每日推荐歌单 ( 需要登录 )
export function _getRecommendResource() {
    const requstUrl = address + '/recommend/resource';
    return getaxios(requstUrl);
}

// 获取每日推荐歌曲 ( 需要登录 )
export function _getRecommendSongs() {
    const requstUrl = address + '/recommend/songs';
    return getaxios(requstUrl);
}

// 签到 ( 需要登录 )
export function _getDailySinin() {
    const requstUrl = address + '/daily_signin';
    return getaxios(requstUrl);
}

// 喜欢音乐
export function _getLike(id) {
    const requstUrl = address + '/like?id=' + id;
    return getaxios(requstUrl);
}

// 喜欢音乐列表
export function _getLikelist(uid) {
    const requstUrl = address + '/likelist?uid=' + uid;
    return getaxios(requstUrl);
}

// 新碟上架
export function _getTopAlbum(limit = 3, offset = 0) {
    const requstUrl = address + '/top/album?offset=' + offset + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 最新专辑
export function _getAlbumNewest() {
    const requstUrl = address + '/album/newest';
    return getaxios(requstUrl);
}

// 热门歌手
export function _getTopArtists(limit = 50, offset = 0) {
    const requstUrl = address + '/top/artists?offset=' + offset + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 全部 mv
export function _getMVAll(area = '全部') {
    const requstUrl = address + '/mv/all?area=' + area;
    return getaxios(requstUrl);
}

// 最新 mv
export function _getMVFirst(area = '全部', limit = 10) {
    const requstUrl = address + '/mv/first?area=' + area + '&limit=' + limit;
    return getaxios(requstUrl);
}

// 网易出品mv
export function _getMVExclusiveRcmd(limit = 30) {
    const requstUrl = address + '/mv/exclusive/rcmd?limit=' + limit;
    return getaxios(requstUrl);
}

// 推荐 mv
export function _getPersonalizedMV() {
    const requstUrl = address + '/personalized/mv';
    return getaxios(requstUrl);
}

// 推荐歌单
export function _getPersonalized(limit = 30) {
    const requstUrl = address + '/personalized?limit=' + limit;
    return getaxios(requstUrl);
}

// 推荐新音乐
export function _getPersonalizedNewsong() {
    const requstUrl = address + '/personalized/newsong';
    return getaxios(requstUrl);
}

// 推荐电台
export function _getPersonalizedDjprogram() {
    const requstUrl = address + '/personalized/djprogram';
    return getaxios(requstUrl);
}

// 推荐节目
export function _getProgramRecommed() {
    const requstUrl = address + '/program/recommend';
    return getaxios(requstUrl);
}

// 独家放送
export function _getPersonalizedPC() {
    const requstUrl = address + '/personalized/privatecontent';
    return getaxios(requstUrl);
}

// mv 排行
export function _getTopMV(limit = 30, area = '全部') {
    const requstUrl = address + '/top/mv?area=' + area + '&limit' + limit;
    return getaxios(requstUrl);
}

// 获取 mv 数据
export function _getMVDetail(mvid) {
    const requstUrl = address + '/mv/detail?mvid=' + mvid;
    return getaxios(requstUrl);
}

// mv 地址
export function _getMVUrl(id) {
    const requstUrl = address + '/mv/url?id=' + id;
    return getaxios(requstUrl);
}

// 获取视频标签列表
export function _getVideoGroupList() {
    const requstUrl = address + '/video/group/list';
    return getaxios(requstUrl);
}

// 获取视频标签下的视频
export function _getVideoGroup(id) {
    const requstUrl = address + '/video/group?id=' + id;
    return getaxios(requstUrl);
}

// 相关视频
export function _getRelatedAllvideo(id) {
    const requstUrl = address + '/related/allvideo?id=' + id;
    return getaxios(requstUrl);
}

// 视频详情
export function _getVideoDetail(id) {
    const requstUrl = address + '/video/detail?id=' + id;
    return getaxios(requstUrl);
}

// 获取视频播放地址
export function _getVideoUrl(id) {
    const requstUrl = address + '/video/url?id=' + id;
    return getaxios(requstUrl);
}

// 排行榜
export function _getTopList(idx) {
    const requstUrl = address + '/top/list?idx=' + idx;
    return getaxios(requstUrl);
}

// 所有榜单
export function _getToplist() {
    const requstUrl = address + '/toplist';
    return getaxios(requstUrl);
}

// 所有榜单内容摘要
export function _getToplistDetail() {
    const requstUrl = address + '/toplist/detail';
    return getaxios(requstUrl);
}

// 歌手榜
export function _getToplistArtist() {
    const requstUrl = address + '/toplist/artist';
    return getaxios(requstUrl);
}

// 电台banner
export function _getDjBanner() {
    const requstUrl = address + '/dj/banner';
    return getaxios(requstUrl);
}

// 热门电台
export function _getDjHot(limit = 30) {
    const requstUrl = address + '/dj/hot?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 节目榜
export function _getDjProgramToplist(limit = 100) {
    const requstUrl = address + '/dj/program/toplist?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 付费精品
export function _getDjToplistPay(limit) {
    const requstUrl = address + '/dj/toplist/pay?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 24小时节目榜
export function _getDjProgramTHours(limit = 100) {
    const requstUrl = address + '/dj/program/toplist/hours?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 24小时主播榜
export function _getDjToplistHours(limit = 100) {
    const requstUrl = address + '/dj/toplist/hours?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 主播新人榜
export function _getDjToplistNewcomer(limit = 100) {
    const requstUrl = address + '/dj/toplist/newcomer?limit=' + limit;
    return getaxios(requstUrl);
}

// 电台 - 最热主播榜
export function _getDjToplistPopular(limit = 100) {
    const requstUrl = address + '/dj/toplist/popular?limit=' + limit;
    return getaxios(requstUrl);
}
// export function _get() {
//     const requstUrl = address + '';
//     return getaxios(requstUrl);
// }
