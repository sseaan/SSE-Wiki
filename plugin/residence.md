# Residence | 领地
---
## 简介
可以创建属于玩家自己的领地，用于保护玩家安全以及房屋安全的插件
## 指令
### 总指令
	/res ? [页数] – 显示帮助，不写页数则显示第一页.
	/resadmin – 在使用管理指令时使用创建指令

### 创建命令
	/res area [add/remove/replace] <领地名> [区域id] – 向叫做[领地名]的领地增加(add)、从其中去除(remove)或是替换 (replace) 区域。可与同一领地内的区域重合。
	/res create [领地名] – 选择好区域后创建一个叫做[领地名]的领地
	/res remove [领地名] – 移除一个叫[领地名]的领地
	/res removeall – 移除所有领地
	/res subzone <领地名> [子区域名] – 在领地内创建一块子区域，你必须是所有者才行。

### 选择指令
	/res select [x] [y] [z] – 选择领地的长方体区域，X Y 和Z 都是从你当前位置为中心的距离，你也可以用一个工具(默认是木锄)来选择地块。
	/res select chunk – 选取一整个chunk。
	/res select expand [格数] – 向你的前方延伸选区。
	/res select size – 显示已选择区域的尺寸。
	/res select shift [格数] – 向你的前方移动选区。
	/res select vert – 把选区延伸到从天顶到地底。

### 信息指令
	/res area list [领地名] – 列出某领地的所有区域
	/res area listall [领地名] – 列出某领地的所有区域以及他们的坐标
	/res current – 显示你所在的领地
	/res info <领地名> – 得到某领地的信息
	/res list – 显示你拥有的领地
	/res listall – 显示所有领地
	/res limits – 显示重要的权限
	/res sublist – 显示你所在领地的所有子区域
	/res version – 显示插件版本

### 权限指令
	/res gset <领地名> [群组名] [权限] [true/false/remove] – 设置某领地对于某群组的权限
	/res lset <领地名> [黑名单/忽略名单] [材质] – 从某领地的黑名单/忽略名单中增加/移除某材质
	/res lset <领地名> info – 显示某领地的黑名单/忽略名单设置
	/res pset <领地名> [玩家名] [权限] [true/false/remove] – 设置某领地对于某玩家的权限
	/res set <领地名> [权限] [true/false/remove] – 设置某领地的权限

### 交易指令
	/res lease [renew/cost] [领地名] – 更新/显示 更新一个领地的费用(?意义不明)
	/res market list – 显示在售的所有领地
	/res market info [领地名] – 显示在售的某领地的信息
	/res market sell [领地名] [价格] – 将某领地出售
	/res market unsell [领地名] – 将某领地下架
	/res market buy [领地名] 购买某领地
	/res market rentable [领地名] [价格] [天数] – 将某领地以[价格]/[天数]出租并设置可否自动续期
	/res market rent [领地名] – 设置某领地出租手否可自动续期
	/res market release [领地名] – 解除某领地的出租

### 其他指令
	/res default [领地名] – 重置某领地的权限设置
	/res give [领地名] [玩家名] – 将某领地赠与某玩家，你必须是领主且被赠予玩家在线
	/res lists – 预定领地许可清单的详细信息
	/res message [领地名] [enter/leave] [信息] – 设置进入/退出某领地时候显示的信息
	/res message [领地名] remove [enter/leave] – 移除进入/退出某领地时候的信息
	/res mirror [源领地名] [目标领地名] – 复制源领地的权限设置至目标领地
	/res rename – [旧名称] [新名称] 重命名领地.对于子空间旧名称必须全名，新名称可以只写子空间名
	/res renamearea [领地名] [旧名称] [新名称] – 重命名某领地中某区域的名称
	/res tp [领地名] – 传送至某领地
	/res tpset – 设置当前领地的传送点为你站立的地方
	/res unstuck – 将你从当前领地移出

## 动作
使用木锄分别左右键可标记两点作为领地范围（注:领地范围不可超过指定范围，如果家太大可以用多个领地来保护，记得关闭领地进出信息显示，不然很烦的）