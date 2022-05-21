// get class="header" ele
var header = document.querySelector('.header');
// create a div
var headerContainer = document.createElement('div')
// set class name
headerContainer.setAttribute('class','header_container')

headerContainer.innerHTML = '<div class="info_head"><div class="contact"><span style="color: gray;">關注我們：</span><a href="javascript:;" class="fb"></a><a href="javascript:;" class="ins"></a><a href="javascript:;" class="wechat"></a><a href="javascript:;" class="youtube"></a><div class="userBox"></div></div></div><div class="info_body"><div class="leftBox"><div class="header_title"></div><div class="inputBox"><button class="button">搜尋</button><input type="text" class="input" placeholder="搜尋路綫(e.g. 獅子山)"><div class="magnifying"></div></div><div class="hot"><span>熱門:</span><a href="javascript:;">獅子山</a><a href="javascript:;">太平山頂</a></div>  </div><div class="rightBox"><a href="./home.html" class="logo"><img src="../images/logo_index.png" alt=""></a><div class="fontsBox">字體大小：<input type="button" value="a" disabled="false" class="medium" >&nbsp;/&nbsp;  <input type="button" value="A" class="large" ></div></div></div>'

header.appendChild(headerContainer)

// switch font size
// get button element
var large = document.querySelector('.large')
var medium = document.querySelector('.medium')

// defined 一個 function
function switchFontSize(fontSize){
  var htmlEle = document.documentElement
  htmlEle.style = 'font-size:'+ fontSize +'px'
}

// 事件監聽 檢測onClick事件，然後執行switchFontSize function並傳入參數
large.addEventListener('click', function(){
  large.disabled = true
  medium.disabled = false
  switchFontSize(21)
})
medium.addEventListener('click', function(){
  large.disabled = false
  medium.disabled = true
  switchFontSize(16)
})

// 使用localStorage方法控制 userBox 的顯示
function getUserBox(){
  // 查看在local storage的數據 Application => Local Storage
  var userBox = document.querySelector('.userBox')
  var name = localStorage.getItem('name')

  if(name === null){
    userBox.innerHTML = '<span class="userIcon"></span><a href="./login.html" class="signIn">登入</a><span>&nbsp; / &nbsp;</span><a href="javascript:;" class="signUp">登記</a>'
  }else{
    userBox.innerHTML = '<span class="userIcon"></span>Hi, &nbsp;<a href="javascript:;" class="helloUser">'+name+'</a> &nbsp;/&nbsp <a class="logOut" href="javascript:;" >登出</a>'
    var logOut = document.querySelector('.logOut')
    logOut.addEventListener('click',function(){
      localStorage.removeItem('name')
      getUserBox()
    })
  }
}
getUserBox()



