function error(tip) {
  const dialog = document.querySelector("dialog");
  dialog.innerText = tip;
  dialog.show();
  setTimeout(() => dialog.close(), 2000);
}

function get_link() {
  let url = document.querySelector("input").value;
  if (/song\?id=\d+/.test(url)) {
    url = url.match(/id=(\d+)/)[1];
  } else if (/playlist\?id=\d+/.test(url)) {
    error("不支持 歌曲列表链接");
    return;
  } else if (/program\?id=\d+/.test(url)) {
    error("不支持 电台链接");
    return;
  } else if (/album\/\d+/.test(url)) {
    error("不支持 专辑链接");
    return;
  } else {
    if (!/^\d+$/.test(url)) {
      error("请输入 网易云音乐的链接 / 歌曲ID");
      return;
    }
  }
  window.open(`https://music.163.com/song/media/outer/url?id=${url}.mp3`);
}

function enter_key(e) {
  if (e.key === "Enter") get_link();
}
