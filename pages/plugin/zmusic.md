## 命令
### 主命令
- `/zm` 主命令  
- `/zm help` 查看帮助  
- `/zm play` 播放音乐  
- `/zm music` 全服点歌  
- `/zm search` 搜索音乐  
- `/zm playlist` 歌单系统  
- `/zm stop` 停止播放  
- `/zm login` 登录网易云音乐  

### 播放

通过歌名搜索一个音乐，直接播放

#### 命令

`/zm play [搜索源] [歌名]`

搜索源说明

#### 示例

`/zm play netease 你的猫咪`

### 点歌

通过歌名搜索一个音乐，全服发送后，玩家点击播放

#### 命令
`/zm music [搜索源] [歌名]`

#### 示例

`/zm music netease 你的猫咪`

### 搜索

通过歌名搜索一个音乐，返回十首音乐的列表

#### 命令

`/zm search [搜索源] [歌名]`

#### 示例

`/zm search netease 你的猫咪`

### 歌单

通过导入歌单存储在服务器，方便播放歌单。

#### 命令

`/zm playlist [平台] [子命令]`

目前支持以下平台

- netease/163 - 网易云音乐

如果平台为 type 则为设置歌单播放方式. 目前支持

- normal - 顺序播放
- loop - 循环播放
- random - 随机播放

示例: `/zm playlist type random`

如果平台为 global 则为全局歌单模式.

- 子命令与普通模式相同

示例: `/zm playlist global netease list`

子命令 对应平台的子命令

- `import` 通过歌单链接导入歌单
    - 参数
        - 歌单链接 对应平台的歌单链接
- `list` 检索指定平台的歌单列表
- `play` 通过歌单 ID 播放歌单(可用 list 获取)
    - 参数
        - 歌单ID 指定平台的歌单 ID

#### 示例
导入:

`- /zm playlist 163 import https://music.163.com/#/playlist?id=363046232`

播放:

`- /zm playlist 163 play 363046232`

## 搜索源说明
搜索源 为你要搜索音乐的平台 目前支持以下平台

- netease/163 - 网易云音乐
- kuwo - 酷我音乐
- bilibili - 哔哩哔哩音乐

**QQ 音乐 API 已经完全移除，酷狗音乐播放时会出现问题**

## 歌名 ID 化说明

- 将歌名替换为 -id:音乐ID 即可
- 目前支持 网易云 哔哩哔哩音乐
- 示例: `/zm play bilibili -id:374305`