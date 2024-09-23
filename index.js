let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let input = document.querySelector("#url");
    let url = input.value;
    if (/^\d+$/.test(url)) url = "https://music.163.com/song/media/outer/url?id=" + url + ".mp3";
    else if (/song\?id=\d+/.test(url)) url = "https://music.163.com/song/media/outer/url?id=" + url.match(/id=(\d+)/)[1] + ".mp3";
    else if (/playlist\?id=\d+/.test(url)) {
        input.value = "";
        input.placeholder = "不支持 歌曲列表链接";
        return;
    }
    else if (/program\?id=\d+/.test(url)) {
        input.value = "";
        input.placeholder = "不支持 电台链接";
        return;
    }
    else {
        input.value = "";
        input.placeholder = "请输入 网易云链接 或者 歌曲ID";
        return;
    }
    window.open(url);
});