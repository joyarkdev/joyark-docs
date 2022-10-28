---
title: REST API
date: 2022-10-28 09:50:56
---
# Game develop Api
You can find all the api here for building game develop services.

## Version: 1.0.0

**Contact information:**  
renlikang@dalongyun.com  

### /en/api/charge-order/items

#### GET
##### Summary

充值档位列表

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/charge-order/order

#### POST
##### Summary

创建订单

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/stream/menu/{gameId}

#### GET
##### Summary

流桌面菜单列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/stream/functionInfo/{gameId}

#### GET
##### Summary

流桌面功能配置信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/game-token

#### PUT
##### Summary

refresh game token

##### Description

refresh game token  renewal : Second

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-api | |

#### POST
##### Summary

game token

##### Description

game token : default expire 24 hours

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-api | |

### /en/api/keyboard

#### GET
##### Summary

键盘列表（包含搜索）.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyName | path |  | Yes | string |
| gameId | path |  | Yes | integer |
| lastShareId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

#### PUT
##### Summary

创建键盘

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/{keyId}

#### GET
##### Summary

获取键盘按键信息.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

#### POST
##### Summary

编辑键盘

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

#### DELETE
##### Summary

删除虚拟键.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/keyboard/collect/{keyId}

#### PUT
##### Summary

收藏键盘

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

#### DELETE
##### Summary

取消收藏键盘

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/collect

#### GET
##### Summary

收藏列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | integer |
| page | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/like/{keyId}

#### PUT
##### Summary

键盘点赞

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/use/{keyId}

#### PUT
##### Summary

使用键盘（记录使用日志）

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| keyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/my

#### GET
##### Summary

我的键盘列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | integer |
| page | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/api/keyboard/official

#### GET
##### Summary

官方键盘列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/merchant/notify/heartbeat

#### POST
##### Summary

机器心跳通知成功

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/notify/handleType

#### POST
##### Summary

回调通知操作

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/use

#### GET
##### Summary

获取资源使用情况

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/order

#### GET
##### Summary

获取资源进行中的订单

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/releaseOrder

#### POST
##### Summary

获取资源进行中的订单

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/sendWssUid

#### POST
##### Summary

手动推送消息

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/exitService

#### POST
##### Summary

商户手动注销服务 （订单号至少传一个）

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### en/merchant/resource/eventName

#### POST
##### Summary

手动回调第三方消息推送

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### en/merchant/resource/orders

#### POST
##### Summary

第三方查询订单

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### en/merchant/resource/velocity

#### POST
##### Summary

提交测速结果

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/queueList

#### POST
##### Summary

商户查看排队列表

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/serverCode

#### POST
##### Summary

商户查询ServerCode有有效期

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/queueCount

#### POST
##### Summary

中台资源排队统计

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/cancelQueue

#### POST
##### Summary

中台取消排队

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/queueCancel

#### POST
##### Summary

商户取消排队

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/queueInfo

#### POST
##### Summary

商户排队详情

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/errorCode

#### POST
##### Summary

获取服务的返回编码解释

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/release

#### POST
##### Summary

商户释放占用资源

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/ipCode

#### POST
##### Summary

查询ip对应的国家

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/resource/idcList

#### POST
##### Summary

查看idc列表

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/merchant/clearSpeed

#### GET
##### Summary

手动清楚用户的缓存数据

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/initService

#### GET
##### Summary

服务链接初始化

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_code | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/speedList

#### GET
##### Summary

获取测速列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| image | query |  | No | string |
| area_tag | query |  | No | string |
| res_tags | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/speed

#### POST
##### Summary

设置选区

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/connect

#### GET
##### Summary

获取连接信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| image | query |  | No | string |
| area_tag | query |  | No | string |
| res_tags | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/server

#### POST
##### Summary

获取资源

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 400 | Bad Request |

### /en/api/resource/exitServer

#### POST
##### Summary

注销服务

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/exitServerConfirm

#### DELETE
##### Summary

确认注销服务

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/connectConfirm

#### POST
##### Summary

确认进入服务

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/repairServer

#### PUT
##### Summary

修复机器

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/restartServer

#### PUT
##### Summary

重启机器

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/queue

#### GET
##### Summary

获取用户排队信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

#### POST
##### Summary

进入排队

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

#### DELETE
##### Summary

取消用户排队

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/{type}

#### PUT
##### Summary

辅助排队

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/timeout

#### GET
##### Summary

获取用户心跳时间

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/timeout/{time}

#### PUT
##### Summary

设置用户心跳时间

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/gameStartInfo

#### GET
##### Summary

获取游戏的启动信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | query |  | No | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/gameTagList/{language}/{productcode}

#### GET
##### Summary

获取游戏的标签信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productcode | path |  | Yes | string |
| language | path | en or zh | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/resource/server/info

#### GET
##### Summary

获取机器的使用信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/api/resource/userAssets

#### GET
##### Summary

获取用户资产信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_code | query |  | No | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/resource/userAssetsLog

#### GET
##### Summary

用户资产记录查询

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| startDate | path | 开始时间 | No | string |
| endDate | path | 结束时间 | No | string |
| applyId | path | applyId | No | integer |
| changeReason | path | changeReason | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/api/resource/deduction

#### GET
##### Summary

获取服务编码的扣费详情

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_code | query |  | No | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/user/login

#### POST
##### Summary

登陆

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/user/sdkLogin

#### POST
##### Summary

sdk登陆

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/user/register

#### POST
##### Summary

注册

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 400 | Bad Request |

### /en/api/user/info

#### GET
##### Summary

用户信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/api/user/passwordForget

#### PUT
##### Summary

忘记密码

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/user/nickname

#### POST
##### Summary

修改昵称

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/api/user/logout

#### GET
##### Summary

退出登录

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### en/api/user/sendEmail

#### POST
##### Summary

发送验证码

##### Description

支持登陆与不登陆发送验证码 登陆的时候需要带上token,不登陆的时候需要传email send_type async 异步发送 sync 同步发送 type为 verification 普通验证码 register 注册验证码 resetPassword 重置密码验证码

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 400 | Bad Request |

### /en/api/user/passwordModify

#### PUT
##### Summary

修改密码

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/application/package

#### GET
##### Summary

应用列表

##### Description

applicationPackage

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| version_name | query | app版本名 | No | string |
| version_code | query | app版本号 | No | string |
| app_name | query | app名称 | No | string |
| env_type | query | app内接口环境 | No | string |
| package | query | 包名 | No | string |
| flavor | query | 渠道 | No | string |
| app_icon | query | app图标 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply

#### GET
##### Summary

应用列表

##### Description

devicePlatform:1.web应用 2.api/sdk应用 3.Android

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| devicePlatform | query |  | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

#### POST
##### Summary

创建应用

##### Description

appType:1.单游戏 2.多游戏；devicePlatform:1.web应用 2.api/sdk应用 3.Android；tokenPeriod:token有效周期（1.1天、2.1周、3.1个月、4.3个月、5.6个月、6.1年 0.永久）

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply-info/{id}

#### GET
##### Summary

获取应用详情

##### Description

apply info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/{id}

#### GET
##### Summary

应用游戏id获取游戏信息

##### Description

根据应用游戏id获取游戏信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

#### PUT
##### Summary

编辑应用

##### Description

tokenPeriod:token有效周期（1.1天、2.1周、3.1个月、4.3个月、5.6个月、6.1年 0.永久）

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/open/{id}

#### PUT
##### Summary

开启关闭应用.

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/setting-pay

#### POST
##### Summary

应用支付设置

##### Description

     *     payDurationType：付费时长类型：1.应用独占 2.应用互通；
     *     payType:['Stripe','AliPay']

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/setting-free

#### POST
##### Summary

应用免费设置

##### Description

     *     freeDurationType：免费时长类型：1.不提供试玩 2.应用独占 3.应用互通；
     *     freeObtainType：免费获取方式：1.注册赠送 2.每日赠送；
     *     expireSetting：有效期设置：1.永久有效 2.限时有效；
     *     expireType：过期时间类型：1.12h 2.24h 3.36h 4.2day 5.3day 6.7day 7.30day；
     *     giveDurationTime：赠送时长（分钟）

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/refresh_token/{id}

#### PUT
##### Summary

刷新SDK Token.

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/single-game-apply

#### POST
##### Summary

创建单游戏应用

##### Description

devicePlatform:1.web应用 2.api/sdk应用 3.Android；tokenPeriod:token有效周期（1.1天、2.1周、3.1个月、4.3个月、5.6个月、6.1年 0.永久）

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/single-game-apply/{id}

#### GET
##### Summary

获取单游戏应用详情

##### Description

apply info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

#### PUT
##### Summary

编辑单游戏应用

##### Description

tokenPeriod:token有效周期（1.1天、2.1周、3.1个月、4.3个月、5.6个月、6.1年 0.永久）

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/time

#### GET
##### Summary

获取服务端时间戳

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/develop/apply/sdk

#### GET
##### Summary

获取SDK下载地址

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | 0.免费（默认） 1.付费 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/develop/apply/{appkey}

#### GET
##### Summary

获取应用信息-聚合页

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appkey | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/develop/collections

#### GET
##### Summary

collection lists

##### Description

collection lists

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/pack

#### POST
##### Summary

打包接口

##### Description

打包接口

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/pack/{id}

#### DELETE
##### Summary

取消打包接口

##### Description

取消打包接口

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | 编号 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/pack/record

#### GET
##### Summary

应用打包列表

##### Description

应用打包列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyId | query |  | No | integer |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/game

#### GET
##### Summary

应用游戏列表

##### Description

apply lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | query | 游戏名 | No | string |
| appkey | query |  | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

#### POST
##### Summary

创建应用游戏.

##### Description

isOpenBanner:是否启用banner[0/1];bannerClickEvent:banner点击类型[1:无 2:跳转链接]

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/game/{id}

#### GET
##### Summary

获取应用游戏详情

##### Description

apply info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

#### PUT
##### Summary

编辑应用游戏.

##### Description

isOpenBanner:是否启用banner[0/1];bannerClickEvent:banner点击类型[1:无 2:跳转链接]

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/game/config/{id}

#### PUT
##### Summary

更新游戏code配置.

##### Description

deductType 扣费方式：1.免费使用 2.付费使用 3.先免费体验后付费使用; accountSource 账号来源 0:默认启动模式 1：JoyarkGame提供账号（平台账号启动模式） 2：上传账号密码（自备账号启动模式） 3：玩家自己登陆账号（Steam deck模式【海外】）

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/code/{productCode}

#### GET
##### Summary

应用游戏服务编码获取游戏信息

##### Description

根据服务编码获取游戏信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| productCode | path |  | Yes | string |
| appKey | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/develop/apply/account/import

#### POST
##### Summary

import game account.

##### Description

file:excel文件

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/account/export/key

#### GET
##### Summary

export game account key.

##### Description

获取账号导出凭证

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/account/export

#### GET
##### Summary

export game account.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyGameId | query |  | Yes | integer |
| key | query |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/apply/game/statistics

#### GET
##### Summary

获取统计时长

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| startDate | query |  | No | string |
| endDate | query |  | No | string |
| productCode | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/apply/game/{appkey}

#### GET
##### Summary

获取应用游戏列表-聚合页

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appkey | path |  | Yes | string |
| page | query |  | No | integer |
| language | query | en | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/develop/item/{applyId}/{currency}

#### GET
##### Summary

档位列表

##### Description

档位列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyId | path | 应用ID | Yes | integer |
| currency | path | 货币 | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/item-config

#### GET
##### Summary

档位时长基础信息

##### Description

档位时长基础信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/item/create/{applyId}/{currency}

#### POST
##### Summary

创建档位

##### Description

创建档位

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyId | path | 应用ID | Yes | integer |
| currency | path | 货币 | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/item/edit/{applyId}/{currency}/{itemId}

#### PUT
##### Summary

编辑档位

##### Description

编辑档位

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyId | path | 应用ID | Yes | integer |
| itemId | path | 档位ID | Yes | integer |
| currency | path | 货币 | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/item/sold-out/{currency}/{itemId}

#### PUT
##### Summary

上下架档位

##### Description

上下架档位

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currency | path | 货币 | Yes | string |
| itemId | path | 档位ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/item/sort/{itemId}

#### PUT
##### Summary

设置档位排序

##### Description

设置档位排序

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| itemId | path | 档位ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /sendEmail

#### POST
##### Summary

发送验证码

##### Description

支持登陆与不登陆发送验证码 登陆的时候需要带上token,不登陆的时候需要传email send_type async 异步发送 sync 同步发送 type为 verification 普通验证码 register 注册验证码 resetPassword 重置密码验证码

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 400 | Bad Request |

### /en/develop/file

#### POST
##### Summary

Direct to S3 Uploads (Get form attributes and form input fields.)

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/develop/game/create

#### POST
##### Summary

create game

##### Description

create game

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-develop | |

### /en/develop/game/version-info/{id}

#### PUT
##### Summary

update game info

##### Description

update game info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/adapter-info/{id}

#### PUT
##### Summary

update adapter info

##### Description

update adpater info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/games

#### GET
##### Summary

game lists

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | query | 游戏名或游戏ID | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/{id}

#### GET
##### Summary

game info

##### Description

game info

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/tags/{language}

#### GET
##### Summary

game tags

##### Description

game tags

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| language | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/options

#### GET
##### Summary

get select options.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/all-options

#### GET
##### Summary

get select options.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameName | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/game/function/{gameId}

#### GET
##### Summary

获取功能配置信息.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

#### PUT
##### Summary

添加游戏功能配置

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

#### POST
##### Summary

编辑游戏功能配置

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### /en/develop/stream/menuList

#### GET
##### Summary

获取流桌面菜单列表.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/keyboard/{gameId}

#### GET
##### Summary

开发者后台-键盘列表.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |
| pageSize | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

#### PUT
##### Summary

开发者后台-创建键盘

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | success |
| 400 | Bad Request |

### /en/develop/keyboard/{gameId}/{keyId}

#### GET
##### Summary

开发者后台-获取键盘信息.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |
| keyId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

#### POST
##### Summary

开发者后台-编辑键盘

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |
| keyId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | success |
| 400 | Bad Request |

#### DELETE
##### Summary

开发者后台-删除虚拟键.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| gameId | path |  | Yes | int |
| keyId | path |  | Yes | int |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/settlements

#### GET
##### Summary

settlement lists

##### Description

settlement lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | query |  | No | integer |
| page | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/settlement/details/{id}

#### GET
##### Summary

settlement details

##### Description

settlement details

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/settlement/export-url

#### GET
##### Summary

获取下载订单链接

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| startTime | query |  | Yes | string |
| endTime | query |  | Yes | string |
| accountId | query |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/settlement/export-charge

#### GET
##### Summary

下载订单

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| startTime | query |  | Yes | string |
| endTime | query |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/develop/statistics/forceUpdate

#### GET
##### Summary

强制更新数据

##### Description

强制刷新数据

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/mainParamsArea/{type}

#### GET
##### Summary

主要参数区

##### Description

type的值为这三个week,year,month

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/dailyRevenue/{type}

#### GET
##### Summary

每日收益

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/applyDailyRevenue/{type}

#### GET
##### Summary

应用的每日收益

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/applyDailyDuration/{type}

#### GET
##### Summary

各应用每日使用时长

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/applyDailyDurationTop/{type}

#### GET
##### Summary

各应用每日使用时长排行榜

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/gameDailyDuration/{type}

#### GET
##### Summary

各游戏每日使用时长

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/statistics/gameDailyDurationTop/{type}

#### GET
##### Summary

各游戏每日使用时长排行榜

##### Description

type的值为这2个7days ,30days

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/register

#### POST
##### Summary

注册

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 400 | Bad Request |

### /en/develop/login

#### POST
##### Summary

登陆

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/user

#### DELETE
##### Summary

登出

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/user/passwordModify

#### PUT
##### Summary

修改密码

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/user/passwordForget

#### PUT
##### Summary

忘记密码

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/user/auth

#### POST
##### Summary

开发者认证

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 400 | Bad Request |

### /en/develop/user/info

#### GET
##### Summary

开发者信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

### /en/develop/user/corporate-info/{id}

#### GET
##### Summary

商户信息

##### Description

商户信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | 商户ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | Success |
| 400 | Bad Request |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/manage/account

#### GET
##### Summary

开发者资质审核列表

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| subjectType | path | 申请类型  0个人 1企业 | No | integer |
| authState | path | 审核状态 0未认证 1 认证中 2认证成功 3 认证失败 | No | integer |
| startDate | path | 开始时间 | No | string |
| endDate | path | 结束时间 | No | string |
| contacts | path | 申请人 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/account/auth/{id}

#### PUT
##### Summary

开发者审核

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/merchants

#### GET
##### Summary

merchants lists

##### Description

merchants lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| id | path | 商户ID | No | integer |
| userName | path | 商户名称 | No | string |
| type | path | 类型 1 信任商户 2 代理商户 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/merchant/change-type/{id}

#### PUT
##### Summary

update type

##### Description

update type

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/merchant/setting-machine/{id}

#### PUT
##### Summary

setting machine

##### Description

setting machine

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/merchant/apply/{accountId}

#### GET
##### Summary

应用列表

##### Description

devicePlatform:1.web应用 2.api/sdk应用 3.Android

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | path |  | Yes | integer |
| devicePlatform | query |  | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/merchant/apply-info/{applyId}

#### GET
##### Summary

应用配置信息

##### Description

应用配置信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| applyId | path | 应用id | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/apply/signature

#### GET
##### Summary

获取应用签名列表

##### Description

获取应用签名列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/apply/signature/import

#### POST
##### Summary

导入应用签名

##### Description

导入应用签名，file:excel文件

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Created |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/manage/apply/signature/export

#### GET
##### Summary

应用签名导出

##### Description

应用签名导出

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/assets/list

#### GET
##### Summary

资产信息查询

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| name | path | name | No | integer |
| merchantId | path | merchantId | No | integer |
| applyId | path | applyId | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/assets/history

#### GET
##### Summary

资产记录查询

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| name | path | name | No | integer |
| merchantId | path | merchantId | No | integer |
| startDate | path | 开始时间 | No | string |
| endDate | path | 结束时间 | No | string |
| applyId | path | applyId | No | integer |
| changeReason | path | changeReason | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/assets/change

#### PUT
##### Summary

时长更变

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/businessLog

#### GET
##### Summary

业务日志

##### Description

业务日志

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| uid | path | uid | No | integer |
| startTime | path | 开始时间 | No | string |
| endTime | path | 结束时间 | No | string |
| titleId | path | 业务类型id | No | integer |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/business/titleList

#### GET
##### Summary

业务日志 - 业务类型列表

##### Description

业务日志 - 业务类型列表

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/charge-order

#### GET
##### Summary

充值列表

##### Description

充值列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | query | 页数 | No | integer |
| page | query | 当前页 | No | integer |
| userId | query | 用户ID | No | string |
| applyId | query | 应用ID | No | integer |
| merchantId | query | 商户ID | No | integer |
| startDate | query | 开始时间 | No | string |
| endDate | query | 结束时间 | No | string |
| paymentMethod | query | 收款方式 | No | string |
| orderSn | query | 订单号 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment-method

#### GET
##### Summary

收款方式

##### Description

收款方式

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/configs

#### GET
##### Summary

sdk lists

##### Description

sdk lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/config/{id}

#### DELETE
##### Summary

delete sdk

##### Description

delete sdk

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | sdk记录ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/config/create

#### POST
##### Summary

sdk create

##### Description

sdk create

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/config/useList

#### GET
##### Summary

sdk config

##### Description

sdk config

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/config/setting-use/{type}

#### PUT
##### Summary

sdk setting use

##### Description

sdk setting use

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | path | type 类型 0 免费 1 付费 | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/currency/setting

#### GET
##### Summary

货币设置

##### Description

货币设置

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

#### POST
##### Summary

修改货币价格

##### Description

修改货币价格

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/manage/currency/add

#### POST
##### Summary

新增货币

##### Description

新增货币

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### /en/manage/effective/currency

#### GET
##### Summary

获取有效的货币列表

##### Description

获取有效的货币列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| currencyType | path |  1:通用   2：谷歌 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/file

#### POST
##### Summary

Direct to S3 Uploads (Get form attributes and form input fields.)

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/games

#### GET
##### Summary

game lists

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| gameId | path | 游戏ID | No | integer |
| accountId | path | 商户ID | No | integer |
| adminAuditStatus | path | 状态：1 小区部署 2 测试中 3 全区部署 4 运维配置 5 运营配置 6 驳回 7 已上架 8 已下架 | No | integer |
| name | path | 游戏名称 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game-list

#### GET
##### Summary

game lists

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| gameId | path | 游戏ID | No | integer |
| accountId | path | 商户ID | No | integer |
| adapterStatus | path | 适配状态：0 未申请 1 已申请 2 已完成 | No | integer |
| adminAuditStatus | path | 状态：1 小区部署 2 测试中 3 全区部署 4 运维配置 5 运营配置 6 驳回 7 已上架 8 已下架 | No | integer |
| name | path | 游戏名称 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game/adapter

#### PUT
##### Summary

game adapter

##### Description

game adapter

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game/down/{id}

#### PUT
##### Summary

game down

##### Description

game down

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game/change-start

#### PUT
##### Summary

edit start setting

##### Description

edit start setting

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game/change-charge

#### PUT
##### Summary

edit charge setting

##### Description

edit charge setting

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/games/speed-list/{image}

#### GET
##### Summary

speed lists

##### Description

speed lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| image | path | 镜像类型：LANG_ENGLISH | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/game/apply

#### GET
##### Summary

应用游戏列表

##### Description

apply lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| appkey | query |  | No | string |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/ding/url

#### GET
##### Summary

Get ding scan url.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| env | query | 环境 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/jwt

#### GET
##### Summary

Get jwt code

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| authCode | query | 微信code | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/operate/userInfo

#### GET
##### Summary

运营工具-用户信息

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | path | 可以是邮箱可以是用户uid | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/operate/userOrders

#### GET
##### Summary

运营工具-订单查询

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| uid | path | uid | No | integer |
| merchantId | path | merchantId | No | integer |
| startDate | path | 开始时间 | No | string |
| endDate | path | 结束时间 | No | string |
| applyId | path | applyId | No | integer |
| payType | path | payType | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/operate/server/callbackHandle

#### PUT
##### Summary

运营工具-订单操作

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### en/manage/operate/speed

#### GET
##### Summary

运营工具-测速结果

##### Description

测速结果

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| uid | path | 用户uid | No | integer |
| startDate | path | 测速开始时间 | No | string |
| endDate | path | 测速结束时间 | No | string |
| merchantId | path | 商户id | No | integer |
| merchantName | path | 商户名 | No | string |
| level | path | 延迟等级：（延迟<30为极佳：延迟31~70为优：延迟在71~150为良；延迟在151~300为合格；延迟300以上为不合格) | No | string |
| country | path | 国家 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/operate/countryCode

#### GET
##### Summary

运营工具-国家对应的code

##### Description

game lists

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/operate/idcRestrict

#### GET
##### Summary

运营工具-国家机房限制列表详情

##### Description

game lists

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

#### POST
##### Summary

运营工具-国家机房限制添加修改

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/operate/operateDel/{id}

#### DELETE
##### Summary

运营工具-国家机房限制删除

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | Bad Request |

### en/manage/operate/useOrders

#### GET
##### Summary

运营工具-机器使用情况

##### Description

game lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |
| uid | path | uid | No | integer |
| merchantId | path | merchantId | No | integer |
| startDate | path | 开始时间 | No | string |
| endDate | path | 结束时间 | No | string |
| applyId | path | applyId | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/queue/level

#### GET
##### Summary

排队等级列表

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/queue/details

#### GET
##### Summary

排队情况查看

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/settlement/list

#### GET
##### Summary

商户结算列表

##### Description

商户结算列表

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | query |  | No | integer |
| accountName | query |  | No | string |
| status | query | 状态：0 异常 1 进行中 2 已完成 | No | integer |
| pageSize | query |  | No | integer |
| page | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/settlement/upload-voucher

#### PUT
##### Summary

上传凭证

##### Description

上传凭证

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/settlement/set-status

#### PUT
##### Summary

状态修改

##### Description

状态修改

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/settlement/contact

#### GET
##### Summary

联系方式

##### Description

联系方式

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| accountId | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/my

#### GET
##### Summary

my info

##### Description

my info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-merchants

#### GET
##### Summary

商户列表

##### Description

merchant lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-merchant/save

#### POST
##### Summary

商户配置

##### Description

商户配置

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-merchant/check-status/{mchId}

#### PUT
##### Summary

修改状态

##### Description

修改状态

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| mchId | path | 商户ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-merchant/online-company

#### GET
##### Summary

已上架收款方列表

##### Description

merchant lists

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-merchant/set-company/{mchId}

#### POST
##### Summary

配置收款方

##### Description

配置收款方

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| mchId | path | 商户ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-currencies

#### GET
##### Summary

货币列表

##### Description

currency lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-currency/save

#### POST
##### Summary

货币配置

##### Description

货币配置

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-currency/check-status/{cid}

#### PUT
##### Summary

修改状态

##### Description

修改状态

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| cid | path | 货币ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-companies

#### GET
##### Summary

收款方列表

##### Description

company lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-company/save

#### POST
##### Summary

收款方配置

##### Description

收款方配置

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/pay-company/check-status/{companyId}

#### PUT
##### Summary

修改状态

##### Description

修改状态

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| companyId | path | 收款方ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/{companyId}

#### GET
##### Summary

支付方式列表

##### Description

payment lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| companyId | path |  | Yes | integer |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/save/{companyId}

#### POST
##### Summary

保存支付方式配置

##### Description

保存支付方式配置

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| companyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/constant-config/{companyId}

#### GET
##### Summary

支付方式常量

##### Description

payment lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| companyId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/check-status/{pid}

#### PUT
##### Summary

修改状态

##### Description

修改状态

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pid | path | 支付方式ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/currencies

#### GET
##### Summary

获取所有启用货币

##### Description

payment lists

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/payment/set-currency/{pid}

#### POST
##### Summary

配置支持货币

##### Description

配置支持货币

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pid | path | 支付方式ID | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/recharge-order

#### GET
##### Summary

充值订单列表

##### Description

order lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |
| startTime | query | 时间 | No | string |
| endTime | query | 时间 | No | string |
| merchantId | query | 商户ID | No | integer |
| paymentId | query | 收款方式I | No | integer |
| currencyCode | query | 货币：USD | No | string |
| status | query | 0-创建，10-支付中，11-支付成功，13-支付失败，12-取消订单 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/subscription-order

#### GET
##### Summary

订阅订单列表

##### Description

order lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| page | query |  | No | integer |
| pageSize | query |  | No | integer |
| startTime | query | 时间 | No | string |
| endTime | query | 时间 | No | string |
| merchantId | query | 商户ID | No | integer |
| paymentId | query | 收款方式I | No | integer |
| currencyCode | query | 货币：USD | No | string |
| status | query | CREATE-创建，ACTIVE-订阅已激活，TRIALING-试用中，FAILED-订阅失败，CANCELED-取消订阅 | No | string |
| orderNo | query | 平台订单号 | No | string |
| payOrderNo | query | 支付流水 | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/subscription/detail/{outOrderNo}

#### GET
##### Summary

订阅订单明细

##### Description

order lists

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| outOrderNo | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/pay-center/merchant-config

#### POST
##### Summary

商户配置信息

##### Description

商户配置信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 101 | error |
| 200 | success |

### /en/pay-center/merchant-currency

#### POST
##### Summary

商户支持的货币

##### Description

商户支持的货币

##### Responses

| Code | Description |
| ---- | ----------- |
| 101 | error |
| 200 | success |

### /en/pay-center/order/create | /en/pay-center/recharge-order/create

#### POST
##### Summary

订单支付

##### Description

/en/pay-center/recharge-order/create采用验签，将请求报文ASCII排序组成对象后转换成json string后使用商户RSA私钥进行签名，将签名获得的值放入http header中，key为sign

##### Responses

| Code | Description |
| ---- | ----------- |
| 101 | error |
| 200 | success |

### /en/pay-center/order/info | /en/pay-center/recharge-order/info

#### POST
##### Summary

查询订单信息

##### Description

查询订单信息

##### Responses

| Code | Description |
| ---- | ----------- |
| 101 | error |
| 200 | success |

### /en/pay-center/order/airwallex/{intentId}

#### PUT
##### Summary

airwallex订单信息

##### Description

airwallex订单信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| intentId | path | 订单ID | No | sting |

##### Responses

| Code | Description |
| ---- | ----------- |
| 101 | error |

### /en/pay-center/product/create

#### POST
##### Summary

创建订阅商品

##### Description

创建订阅商品

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | error |

### /en/pay-center/product/update

#### POST
##### Summary

编辑订阅商品

##### Description

编辑订阅商品

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | error |

### /en/pay-center/subscription/create

#### POST
##### Summary

创建订阅

##### Description

创建订阅

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | error |

### /en/pay-center/subscription/cancel

#### POST
##### Summary

取消订阅

##### Description

取消订阅

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | error |

### /en/pay-center/subscription/info

#### POST
##### Summary

查询订阅明细

##### Description

查询订阅明细

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |
| 400 | error |

### /en/resource/services

#### GET
##### Summary

batch get resource.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| idc_id | query |  | No | integer |
| sspc_id | query |  | No | integer |
| image | query |  | No | string |
| res_tags | query |  | No | string |
| number | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /api/index

#### GET
##### Summary

Get homepage modules.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/language

#### GET
##### Summary

Get language

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

### /en/manage/role

#### GET
##### Summary

获取角色列表.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

#### PUT
##### Summary

设置管理员角色 .

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/adminer/role

#### GET
##### Summary

获取管理员角色列表.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| user_name | query |  | No | string |
| role | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/tag/{tagTagId}

#### GET
##### Summary

Get tag

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tagTagId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

### /en/manage/tagCategory

#### GET
##### Summary

Get tag category

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| pageSize | path | 页数 | No | integer |
| page | path | 当前页 | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

#### POST
##### Summary

tagTag create

##### Description

创建tag类别

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

### /en/manage/tagCategory/{tagTagId}

#### PUT
##### Summary

tagTag update

##### Description

修改tag类别

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tagTagId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

#### DELETE
##### Summary

close tag category

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tagTagId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

### /en/manage/tagCategory/open/{tagTagId}

#### PUT
##### Summary

open tag category

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tagTagId | path |  | Yes | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| JWT-manage | |

### /en/develop/workflow/game

#### POST
##### Summary

workflow create game

##### Description

workflow create game

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-develop | |

### /en/manage/workflow/game/little-deploy

#### PUT
##### Summary

game little deploy

##### Description

game little deploy

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/workflow/game/test

#### PUT
##### Summary

game test

##### Description

game test

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/workflow/game/deploy

#### PUT
##### Summary

global deploy

##### Description

global deploy

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/workflow/game/start-setting

#### PUT
##### Summary

start setting

##### Description

start setting

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/workflow/game/charge-setting

#### PUT
##### Summary

charge setting

##### Description

charge setting

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/workflow/game/up

#### PUT
##### Summary

game online

##### Description

game online

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

##### Security

| Security Schema | Scopes |
| --- | --- |
| jwt-manage | |

### /en/manage/task/pending/{processInstantiation}

#### GET
##### Summary

Get need handle task

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Success |
