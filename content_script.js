$('body').append("<div class='crawl-btn'>查找视频　</div>")

$('.crawl-btn').click(function(){
  var imgArr = []
  $('video').each(function(i) {
    var src = $(this).attr('src');
    var realSrc = /^(http|https)/.test(src) ? src : location.protocol+ '//' + location.host + src;
    imgArr.push(realSrc)
  })
  var imgBox = $("<div class='img-box'></div>");
  if (imgArr.length == 0){
	var imgBox = $("<div class='img-box'>此页无视频<br>请在视频播放页面点击查找视频</div>");
  }else{
	  imgArr.forEach(item => {
		var imgWrap = $("<div class='img-wrap'></div>");
		var img = $("<a href='" + item + "'>" + item + "</a><br>");
		imgWrap.append(img);
		imgBox.append(imgWrap);
	  })
	  console.log(imgArr)
  }

  Modal.show({
    title: '提取结果',
    content: imgBox
  })
  
})

// 弹窗
~function Modal() {
  var modal;
  
  if(this instanceof Modal) {
    this.init = function(opt) {
      modal = $("<div class='modal'></div>");
      var title = $("<div class='modal-title'>" + opt.title + "</div>");
      var close_btn = $("<span class='modal-close-btn'>X</span>");
      var content = $("<div class='modal-content'></div>");
      var mask = $("<div class='modal-mask'></div>");
      close_btn.click(function(){
        modal.hide()
      })
      title.append(close_btn);
      content.append(title);
      content.append(opt.content);
      modal.append(content);
      modal.append(mask);
      $('body').append(modal);
    }
    this.show = function(opt) {
      if(modal) {
        modal.show();
      }else {
        var options = {
          title: opt.title || '标题',
          content: opt.content || ''
        }
        this.init(options)
        modal.show();
      }
    }
    this.hide = function() {
      modal.hide();
    }
  }else {
    window.Modal = new Modal()
  }
}()


chrome.runtime.onMessage.addListener();



// 在页面上插入代码
// 在配置文件中需设置"persistent": true, 因为事件页面不支持webrequest
console.log(11111, chrome.extension.getURL('ajax_interceptor.js'))
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('ajax_interceptor.js'));
$('body').append(script);