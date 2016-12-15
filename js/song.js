/**
 * Created by xx on 2016/12/13.
 */
let regular = Regular.extend({
    //模板名称
    template:"#songPage",
    //解析歌词
    parseSong:function(){
        //希望代码在本地也能运行,不然需要发起请求,所以把歌词直接先抽出来,模拟在文件中的状态
        let str =
            "[00:00.00]刘德华-一起走过的日子\n" +
            "[03:28.00][01:12.00][00:05.00]Music\n" +
            "[00:16.00]如何面对，曾一起走过的日子\n" +
            "[00:23.00]现在剩下我独行，如何用心声一一讲你知\n" +
            "[00:30.00]从来没人明白我，唯一你给我好日子\n" +
            "[00:37.00]有你有我有情有生有死有义\n" +
            "[00:43.00]多少风波都愿闯，只因彼此不死的目光\n" +
            "[00:51.00]有你有我有情有天有海有地\n" +
            "[00:57.00]不可猜测总有天意，才珍惜相处的日子\n" +
            "[01:05.00]道别话亦未多讲，只抛低这个伤心的汉子\n" +
            "[02:21.00][01:19.00]沉沉睡了，谁分享今生的日子\n" +
            "[02:28.00][01:25.00]活着但是没灵魂，才明白生死之间的意思\n" +
            "[02:35.00][01:32.00]情浓完全明白了，才甘心披上孤独衣\n" +
            "[02:42.00][01:39.00]有你有我有情有天有海有地\n" +
            "[02:48.00][01:46.00]当天一起不自知，分开方知根本心极痴\n" +
            "[02:56.00][01:53.00]有你有我有情有生有死有义\n" +
            "[03:03.00][02:01.00]只想解释当我不智，如今想倾诉讲谁知\n" +
            "[03:18.00][03:10.00][02:07.00]剩下绝望旧身影，今只得千亿伤心的句子\n";
        let arr = str.split("\n");
        //根据正则来获取歌曲时间以及歌曲内容
        let reg = /\[\d*:\d*\.\d*\]/;
        let reg2 = /\[\d*:\d*\.\d*\]/g;
        let songMap = new Map();
        for (let obj of arr) {
            //删除时间,获取到完整的歌词
            let song = obj.replace(reg2, "");
            while (true) {
                let time = obj.match(reg);
                if (!time) {
                    break;
                }
                obj = obj.substr(time[0].length);
                time = parseInt(time[0].match(/\d*:/)) * 60 + parseInt(time[0].match(/\d*\./));
                songMap.set(time, song);
            }
        }
        //排序
        return songMap;
    },
    //显示歌词
    showSong:function(evt){
        //获取到当前播放的时间
        let currentTime =Math.round(evt.origin.currentTime);

    }
})
let compent = new regular();
compent.$inject("#song-warp");