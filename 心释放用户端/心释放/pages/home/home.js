/*
 * @Author: your name
 * @Date: 2020-11-06 09:25:09
 * @LastEditTime: 2021-03-03 17:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \心释放\pages\home\home.js
 */
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    // 图片路径
    tempFilePaths:[
      
    ],
    // 心情信息
    mood:[],
    img_url:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app=getApp();
    var that = this;
 
    //获取用户信息
    wx.getUserInfo({
        success: function (res) {
          var userInfo = res.userInfo
          
        }
    })
    wx.request({
      url: 'http://120.26.176.101:8925/mood/selectAll',
      success:(e)=>{
        that.setData({
          mood:e.data
        })
      }
    })
},
valueInput:function(e){
  var that=this;
  that.setData({
    value: e.detail.value
  })
},
send:function(){
  var that = this;
  wx.showLoading({
    title: '上传中',
  })
  that.img_upload();
  console.log(1);
},
chooseimage: function () {
  var that = this;
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表
      that.setData({
        tempFilePaths: res.tempFilePaths
      })
    //  var tempFilePath = res.tempFilePaths[0];
     console.log(res.tempFilePaths);
    //  吧url push进入数组
     let img_url = that.data.img_url;
     for (let i = 0; i < res.tempFilePaths.length; i++) {
       img_url.push(res.tempFilePaths[i])
     }
     that.setData({
       img_url: img_url
     })
    }
  })
},
// 图片上传
img_upload: function () {
  console.log(3);
  let that = this;
  var app=getApp();
  let img_url = that.data.img_url;
  let img_url_ok = [];
  var userid = app.globalData.userid;
  //图片一张一张地上传
  for (let i = 0; i < img_url.length; i++) {
    console.log(4);
    wx.uploadFile({
      //路径 上传图片方法的地址
      url: 'http://120.26.176.101:8925/mood/createOne',
      filePath: img_url[i],
      name: 'picture',
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        method: 'POST'
      },
      data:{
        content: that.data.value,
        is_anonymous:false,
        user_id: userid
      },
      success: function (res) {
        console.log(99);
        console.log(res);
        console.log('上传成功');
        //把上传成功的图片的地址放入数组中
        img_url_ok.push(res.data);
        //如果全部传完，则可以将图片路径保存到数据库
        if (img_url_ok.length == img_url.length) {
          var userid = app.globalData.userid;
          var content = that.data.content;
          wx.request({
            url: 'http://120.26.176.101:8925/mood/createOne',
            method: "POST",
            header: {
              "content-type": "application/x-www-form-urlencoded"
            }, 
            data: {
              picture: img_url_ok,
              content: that.data.value,
              is_anonymous:false,
              user_id: userid
            },
           
            success: function (res) {
              console.log(2);
              console.log(res);
                wx.hideLoading();
                wx.showModal({
                  title: '提交成功',
                  showCancel: false,
                  success: function (res) {
                    console.log(res);
                  }
                })
              
            }
          })
        }
      },
      fail: function (res) {
        console.log('上传失败');
      }
    })
  }
},
// 发布心情的输入框



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