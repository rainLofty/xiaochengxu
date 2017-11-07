
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

/**
 * 使用 Page 初始化页面，具体可参考微信公众平台上的文档
 */
Page({
  /**
   * 初始数据，我们把服务地址显示在页面上
   */
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
    
    //假数据
    allOrdersData: {
      daifukuan: [
        { theme: '闺蜜', time: '2017-10-30 8:00-12:00', count: 1, price: 100, statue: '待支付', parFor: true, unused: false },
        { theme: '私房', time: '2017-10-31 11:00-15:00', count: 4, price: 400, statue: '待支付', parFor: true, unused: false },
        { theme: '情侣', time: '2017-11-05 18:00-20:00', count: 3, price: 300, statue: '待支付', parFor: true, unused: false },
      ],
      daishiyong: [
        { theme: '私房', time: '2017-10-30 8:00-12:00', count: 5, price: 500, statue: '待使用', parFor: false, unused: true },
        { theme: '婚纱', time: '2017-10-31 11:00-15:00', count: 4, price: 400, statue: '待使用', parFor: false, unused: true },
      ],
      tuikuan: [
        { theme: '时尚', time: '2017-10-30 8:00-12:00', count: 2, price: 200, statue: '已申请退款', parFor: false, unused: false },
        { theme: '婚纱', time: '2017-10-31 11:00-15:00', count: 4, price: 400, statue: '退款完成', parFor: false, unused: false }
      ],
      quanbu: [
        { theme: '时尚', time: '2017-10-30 8:00-12:00', count: 2, price: 200, statue: '完成', parFor: false, unused: false },
        { theme: '婚纱', time: '2017-10-31 11:00-15:00', count: 4, price: 400, statue: '完成', parFor: false, unused: false },
        { theme: '时尚', time: '2017-10-30 8:00-12:00', count: 2, price: 200, statue: '完成', parFor: false, unused: false },
        { theme: '婚纱', time: '2017-10-31 11:00-15:00', count: 4, price: 400, statue: '完成', parFor: false, unused: false }
      ],
    },
    //假数据 end
    //假数据 start
    allComments: [
      {username: '青丝几渐', c_time: '10:30', c_text: '我喜欢夏天的雨,雨后的光 ,和任何时候的你', c_imgPath: '../../img/portrait.jpg', num: 0
      },
      { username: '﹏颜汐ぐ', c_time: '11:42', c_text: '雨从未知的世界飘来，如同泪水湿润大地，崭新的邂逅是冥冥的必然，还是注定的偶然，真相不仅仅只有一个', c_imgPath: '../../img/portrait1.jpg', num: 1 },
      { username: '十秒多重性格', c_time: '10:30', c_text: '春水初生，春林初盛，春风十里，不如你。', c_imgPath: '../../img/portrait2.jpg', num: 2 }
    ],
    //假数据
    user: {
      portrait: '../../img/portrait1.jpg',
      name: '小灰灰',
      intro: '爱是一种强大爱是爱是一种强大爱种强大爱是爱是一种强大'
    },
    orderStatus: [
      { name: '待付款', icon: 'daifukuan', brandShow: true, brandCont: 1 },
      { name: '待使用', icon: 'daishiyong', brandShow: true, brandCont: 2 },
      { name: '退款', icon: 'tuikuan', brandShow: false, brandCont: 0 }
    ],
    infoUrl: '',
    mineHandleLists:[
      { classStr: 'announce', icon: 'xiangce', text: '我的相册', linkUrl: '../userLists/userLists',brandShow:false },
      { classStr: 'message', icon: 'xiaoxi', text: '我的消息', linkUrl: '../message/message', brandShow: true,brand_con:'1'},
      { classStr: 'collect', icon: 'shoucang2', text: '我的收藏', linkUrl: '', brandShow: false },
    ],
  },
  onLoad: function (options) {
    //修改当前页面的标题
    wx.setNavigationBarTitle({
      title: '我'
    });
    var datatemp = this.data.mineHandleLists[1];
    var len = this.data.allComments.length;
    datatemp.brand_con = len;
    datatemp.brandShow = len > 0;
    
    this.setData({
      orderStatus: this.setBrandShoW(this.data.orderStatus),
      'mineHandleLists[1]': datatemp,
    });

  },
  //设置brand的数字内容和是否显示
  setBrandShoW: function (orderStatusTemp){
    for (var i = 0; i < orderStatusTemp.length;i++){
      var len = this.data.allOrdersData[orderStatusTemp[i].icon].length
      orderStatusTemp[i].brandCont = len;
      orderStatusTemp[i].brandShow = len>0?true:false;
    }
    return orderStatusTemp;
  },
})
