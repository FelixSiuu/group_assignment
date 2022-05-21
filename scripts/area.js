var hkArea = '../images/area/area_hk_peak.png'
var klnArea = '../images/area/area_kln_lionrock.png'
var ntArea = '../images/area/area_nt_taimoshan.png'
var islandsArea = '../images/area/area_island_Lcable.png'

var areaData = [
  {
    href: './hk.html',
    alt: '香港',
    imgSrc: hkArea
  },
  {
    href: './kln.html',
    alt: '九龍',
    imgSrc: klnArea
  },
  {
    href: './nt.html',
    alt: '新界',
    imgSrc: ntArea
  },
  {
    href: './islands.html',
    alt: '離島',
    imgSrc: islandsArea
  },
]

// area區域 
  // 獲取元素
  var area = document.querySelector('.area')
  areaData.map(function getArea(item){
    // 創建element node
    var areaItem = document.createElement('a')
    // set class name
    areaItem.setAttribute('class','area_item')
    areaItem.setAttribute('href',item.href)

    // 更改每個item的HTML內容為圖片
    areaItem.innerHTML = '<img src='+item.imgSrc+' alt='+item.alt+'>'
    
    // 插入子元素
    area.appendChild(areaItem)
})