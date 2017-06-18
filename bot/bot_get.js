var request = require('request');
var room_id = '56791953';
var message_id = '925393438436773888'

var options = {
    url: 'https://api.chatwork.com/v2/rooms/'+room_id+'/messages/'+message_id,
    headers: {
        'X-ChatWorkToken': '201b8f5101dbb7123590c501f96bf5fc'
    },
    json: true
};

request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
       console.log(body);
    }else{
        console.log('error: '+ response.statusCode);
    }
});