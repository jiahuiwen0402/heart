// pages/yuyueguanli/yuyueguanli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dingdan:[],
    /**
        * 页面配置
        */
       winWidth: 0,
       winHeight: 0,
       // tab切换
       currentTab: 0,
    yonghuname:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var app=getApp();
    // 请求订单数据
    wx.request({
      url: 'http://120.26.176.101:8925/order/selectByMasterId',
      data:{
        master_id:app.globalData.userid
      },
      success:(e)=>{
        for(var a=0;a<e.data.length;a++){
          if(e.data[a].orderState==1){
            that.data.dingdan.push(e.data[a]);
            console.log(that.data.dingdan)
          }
          that.setData({
                dingdan:that.data.dingdan
              })
            
        }
        
        for(var index=0;index<e.data.length;index++){
          wx.request({
            url: 'http://120.26.176.101:8925/master/selectOne',
            data:{
              id:that.data.dingdan[index].masterId
            },
            success:(res)=>{
              var that=this;
              var name=res.data.username;
              that.data.yonghuname.push(name);
              that.setData({
                yonghuname:that.data.yonghuname
              })
            }
          })
        }
        
      }
    })


    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
 
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
  },

  /**
     * 滑动切换tab
     */
    bindChange: function( e ) {
 
      var that = this;
      that.setData( { currentTab: e.detail.current });
   
    },
    /**
     * 点击tab切换
     */
    swichNav: function( e ) {
   
      var that = this;
   
      if( this.data.currentTab === e.target.dataset.current ) {
        return false;
      } else {
        that.setData( {
          currentTab: e.target.dataset.current
        })
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