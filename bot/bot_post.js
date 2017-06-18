var request = require('request');
var room_id = '56791953';
var message = 'hello wold';

var options = {
    url: 'https://api.chatwork.com/v2/rooms/'+room_id+'/messages',
    headers: {
        'X-ChatWorkToken': '201b8f5101dbb7123590c501f96bf5fc'

    },

    form: { body: message },
    json: true
};

request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
       console.log(body);
    }else{
        console.log('error: '+ response.statusCode);
    }
});
