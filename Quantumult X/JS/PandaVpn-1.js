var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/info';

if (url.indexOf(vip) != -1) {
    obj.data.expireAt = "2077-07-07T12:17:13Z";
    obj.data.maxDeviceCount = 3;
    obj.data.expireRemindType = "MANDATORY",
    obj.data.leftDays = 0;
    obj.data.role = "NORMAL";
    obj.data.rewardPoints = 240;
    body = JSON.stringify(obj);
}
$done({body});
