// pages/denglu/denglu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //查看是否授权

    wx.getSetting({

      success: function(res) {

        if (res.authSetting['scope.userInfo']) {

          console.log("用户授权了");
          // wx.switchTab({
          //   url: "../home/home"
          // }) 

        } else {

          //用户没有授权

          console.log("用户没有授权");

        }

      }

    });
  },

  bindGetUserInfo: function(res) {

    var that = this;
    var app = getApp();
    wx.login({

      success(res) {

        var code1=res.code;
        console.log(code1);
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {

              // that.globalData.userInfo = res.userInfo;
              wx.request({
                url: 'http://120.26.176.101:8925/login/master_login',
                method:"POST",
                data: {
                  code: code1,
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded',
                },
                success :(res)=> {
                  console.log(res);
                    console.log(app.globalData.userid);
                    app.globalData.userid=res.data.data.id;
                    console.log(app.globalData.userid);
                    console.log(res.data);
                    
                }
      
              })
            }
          })
        // 发起网络请求
  
       
        
  
      } else {
  
        console.log('登录失败！' + res.errMsg)
  
      }
  
    }
  
  })
    if (res.detail.userInfo) {

      //用户按了允许授权按钮
      wx.switchTab({
            url: "../home/home"
          })
      var that = this;

      // 获取到用户的信息

      console.log("用户的信息如下：");

      console.log(res.detail.userInfo);

      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来

    }

 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})