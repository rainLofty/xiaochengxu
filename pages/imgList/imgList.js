//服装图片列表

// 引入配置
var config = require('../../config');

// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
});

// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};

Page({
  data: {
    loginUrl: config.service.loginUrl,
    requestUrl: config.service.requestUrl,
    tunnelUrl: config.service.tunnelUrl,
    uploadUrl: config.service.uploadUrl,
    tunnelStatus: 'closed',
    tunnelStatusText: {
      closed: '已关闭',
      connecting: '正在连接...',
      connected: '已连接'
    },
    imgUrl:[],
    poetry:[
      {
        title:'将爱进行到底',
        con:'纤云弄巧，飞星传恨，银汉迢迢暗渡。金风玉露一相逢，便胜却，人间无数。柔情似水，佳期如梦，忍顾鹊桥归路。两情若是久长时，又岂在朝朝暮暮。'
      },
      {
        title: '五瓣丁香花的奇遇',
        con: '凤箫声动，玉壶光转，一夜鱼龙舞。蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。'
      },
      {
        title: '有一种感情叫闺蜜情',
        con: '裙裾飘飘女生到，眼前一亮疑女神。笑容满面腮边红，乌发垂肩更妖娆。唇红齿白令人羡，莺声燕语惹人怜。出口成章博学广，无数英雄竞折腰。'
      },
      {
        title: '眉眼含春，媚笑如丝',
        con: '轻罗小扇白兰花，纤腰玉带舞天纱，疑是仙女下凡来，回眸一笑胜星华。'
      },
      {
        title: '好看的脸蛋太多，有趣的灵魂太少',
        con: '我希望找个有趣的人，我们互相玩。而不是你调教我，我操控你，那样的世界很乏味，我不稀罕。'
      },
      {
        title: '优雅女子',
        con: ' 手如柔荑，肤如凝脂，领如蝤蛴，齿如瓠犀，螓首蛾眉，巧笑倩兮，美目眇兮。'
      }
    ]
  },
  /*点击图片跳转，通过option传参*/
  onLoad: function (options) {
    var clothKind = options.kind;
    var srcArr = [];
    var urlstr = '../../img/card';
    for (var i = 1; i <= 5; i++) {
      srcArr.push(urlstr + i + '.jpg');
    }
    this.setData({
      id:options.id,
      kind:options.kind,
      imgUrl: srcArr,
    },function(){
      wx.showLoading({
        title: '加载中'
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1200)
    })
    wx.setNavigationBarTitle({
      title: clothKind+'服装'
    })
    
  },
  /*点击图片预览效果*/
  previewImage:function(e){
    var currentSrc = e.target.dataset.src;
    var imgList = e.target.dataset.list;
    //我的图片是本地的，所以在手机上看不到效果，换成线上http的即可
    wx.previewImage({
      current: currentSrc, // 当前显示图片的http链接
      urls: imgList, // 需要预览的图片http链接列表
      success: function () {
        console.log('接口调用成功');
      }
    })
  },
})


