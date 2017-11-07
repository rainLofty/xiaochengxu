/**
 * @fileOverview 演示会话服务和 WebSocket 信道服务的使用方式
 */

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

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
        imgBanner: ['../../img/banner.jpg',
                   '../../img/banner.jpg'],
        conTitle: ['服装分类','优惠活动'],
        clothesCards:[
          {
            imgUrl:'../../img/card1.jpg',
            title: '婚纱',
            kindName:'hunsha',
            titleEng:'WEDDING'
          },
          {
            imgUrl: '../../img/card2.jpg',
            title: '情侣',
            kindName: 'qinglv',
            titleEng: 'LOVERS'
          },
          {
            imgUrl: '../../img/card3.jpg',
            title: '闺蜜',
            kindName: 'guimi',
            titleEng: 'GIRLFRIENDS'
          },
          {
            imgUrl: '../../img/card4.jpg',
            title: '性感',
            kindName: 'xinggan',
            titleEng: 'SEX SPPEAL'
          },
          {
            imgUrl: '../../img/card5.jpg',
            title: '逗逼',
            kindName: 'doubi',
            titleEng: 'FUNNY CLOTH'
          },
          {
            imgUrl: '../../img/card2.jpg',
            title: '时尚',
            kindName: 'shishang',
            titleEng: 'FASHIONABLEe'
          }
        ] 
  },
  onShow: function (options) {
    //修改当前页面的标题
    wx.setNavigationBarTitle({
      title: '留白摄影馆'
    })
  }
})
