function get_link() {
  let input = document.querySelector("input");
  let url = input.value;
  if (/song\?id=\d+/.test(url)) {
    url = url.match(/id=(\d+)/)[1];
  } else if (/playlist\?id=\d+/.test(url)) {
    return error(input, "不支持 歌曲列表链接");
  } else if (/program\?id=\d+/.test(url)) {
    return error(input, "不支持 电台链接");
  } else if (/album\/\d+/.test(url)) {
    return error(input, "不支持 专辑链接");
  } else {
    if (!/^\d+$/.test(url))
      return error(input, "请输入 网易云音乐的链接 / 歌曲ID");
  }
  window.open(`https://music.163.com/song/media/outer/url?id=${url}.mp3`);
}
function error(input, tip) {
  input.value = "";
  input.placeholder = tip;
}

document.querySelector("button").addEventListener("click", get_link);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") get_link();
});
