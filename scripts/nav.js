var navData = [
  { title: '主頁', href: './home.html', children:[] },
  { title: '香港' , href: './hk.html', children: [
      { location: '太平山頂', href: './victoriapeak.html'},
      { location: '大潭水塘', href: './taitamreservoir.html' },
      { location: '南朗山', href: 'javascript:;' }
    ]
  },

  { title: '九龍' , href: './kln.html', children: [
    { location: '獅子山', href: './lionrock.html' },
      { location: '飛鵝山', href: 'javascript:;'},
      { location: '魔鬼山', href: 'javascript:;' }
    ]
  },

    { title: '新界' , href: './nt.html', children: [
      { location: '青山腹地', href: './castlepeaks_hinterland.html'},
      { location: '杯靈雙渡', href: 'javascript:;' },
      { location: '千島 · 九逕', href: 'javascript:;' }
    ]
  },

  { title: '離島' , href: './islands.html', children: [
      { location: '長洲關公忠義亭', href: './cheungchau.html' },
      { location: '鴨洲', href: 'javascript:;'},
      { location: '坪洲', href: 'javascript:;' }
    ]
  },
  { title: 'About Us', href: './about.html', children:[] },
]

// navbar區域
var nav = document.querySelector('.nav')

var navContainer = document.createElement('div')

navContainer.setAttribute('class','nav_container')

nav.appendChild(navContainer)

navData.map(function getNav(item,index){
  var navItem = document.createElement('a')

  if(item.children.length !== 0){
    navItem.setAttribute('class','nav_item')
    navItem.setAttribute('href', item.href)
  
    navItem.innerHTML = '<span>'+item.title+'</span><div class="slideDown"><a href="'+item.children[0].href+'" class="slideDown_item">'+item.children[0].location+'</a><a href="'+item.children[1].href+'" class="slideDown_item">'+item.children[1].location+'</a><a href="'+item.children[2].href+'" class="slideDown_item">'+item.children[2].location+'</a>'
    
  }else if(index === 0){
    navItem.setAttribute('href','./home.html')
    navItem.setAttribute('class','nav_item home')
    navItem.innerHTML = '主頁'
  }else if(index === navData.length - 1){
    navItem.setAttribute('href','./about.html')
    navItem.setAttribute('class','nav_item about')
    navItem.innerHTML = 'About Us'
  }
  
  navContainer.appendChild(navItem)
})

// scroll bar scroll到指定高度 轉換navbar的position 模式
// nav 到body元素頂部的距離
var navOffsetTop = nav.offsetTop
// nav 自身高度
var navOffsetHeight = nav.offsetHeight

// window onscroll
window.onscroll = function(){
  // 獲取當前scroll bar滾動的高度
  var scrollHeight = document.documentElement.scrollTop
  if(scrollHeight >= navOffsetTop + navOffsetHeight){
    nav.setAttribute('class','nav nav_fixed')
  }else{
    nav.setAttribute('class','nav')
  }
}
