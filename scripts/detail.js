// get ele
var expandBox = document.querySelector('.expand_box')
var mask = document.querySelector('.mask')
var thumbImgList = document.querySelectorAll('.thumb')
var orginalImg = document.querySelector('.orginal_image')

// when click the thumb image, switch the image opacity to 1 & z-index
var getExpand = function(area,routeName){
  thumbImgList.forEach(function(item, index){
    item.addEventListener('click', function(){
      // show orginal image
      expandBox.style.opacity = 1
      expandBox.style.zIndex = 9
      orginalImg.style.top = ''+item.offsetTop+'px'
      console.log(orginalImg.src);
      orginalImg.src= '../images/'+area+'/'+routeName+'/img'+(index+1)+'.png'
    })
  })
}


// click the mask div
mask.addEventListener('click',function(){
  expandBox.style.opacity = 0
  expandBox.style.zIndex = -1  
})
