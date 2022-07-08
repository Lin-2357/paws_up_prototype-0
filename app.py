from flask import Flask, request, json
import json
app = Flask(__name__)


#import config, os
#from flask_cors import *


#CORS(app, supports_credentials = True)

#app.config.from_object(config)

#db.init_app(app)
#html里一个js script调取, wx.request(url = https://后台服务器地址//story,
#method = "GET", success: function(res) {....})

url = 'http://127.0.0.1:5000/'

#用用户id从database调用/编辑pet diary里的某一条post
#然后type表示0是story 1是活动（原来的cloud） 2是diary
@app.route('/posts', methods=["GET"])
def get_posts():
    result = dict(request.args).get('0')     # Get the string version of requested data
    result_dic =  json.loads(result)     # Changing the string into dictionary
    final_result = result_dic.get('date')     # Get desired feature
    return final_result


if __name__ == '__main__':
    app.run(debug = True)

