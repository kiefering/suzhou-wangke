// Initialize butotn with users's prefered color
let getVideo = document.getElementById("getVideoLink");

chrome.storage.sync.get("color", ({ color }) => {
  getVideo.style.backgroundColor = color;
});

getVideo.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getVideoLink,
  });
});

function getVideoLink() {
  /*chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
  
  */
  //
  var videotag = document.getElementsByTagName('video');
  var num = videotag.length;
  if(num ==0){
	  var d_wp = document.createElement("div");
	  d_wp.setAttribute("id", "video-html");
	  d_wp.setAttribute("style", "width:500px;height:200px;background:#A64DFF;display:block;z-index:9999999;position:absolute;left:100px;top:150px;word-break:break-all;padding:20px;color:#fff");
	  document.body.prepend(d_wp);
	  var  v_wp= document.getElementById("video-html");
	  var p = document.createElement("p");
	  v_wp.append('无视频',p);
  }else{
	  var d_wp = document.createElement("div");
	  d_wp.setAttribute("id", "video-html");
	  d_wp.setAttribute("style", "width:500px;height:200px;background:#A64DFF;display:block;z-index:9999999;position:absolute;left:100px;top:150px;word-break:break-all;padding:20px;color:#fff");
	  var p = document.createElement("p");
	  document.body.prepend(d_wp);
	  var  v_wp= document.getElementById("video-html");
	  var div1 = document.createElement("div");
	  v_wp.append(num,div1);
	  
		for (let cell of videotag) {
		  let status = cell.getAttribute('src');
		  var p = document.createElement("p");
		  
		  v_wp.append(status,p);
		  console.log(status);
		}  
	  }
  
  
}

