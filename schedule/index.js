import schedule from  'node-schedule'
import  request from  'request'
import config from  './config.js'
schedule.scheduleJob('*/5 * * * * *',function () {
    request(config.check_url,{
        method:'POST',
        headers:{
            Referer:config.url,
            cookie:config.cookie
        }
    },function (error,response,body) {
        console.log(body,123)
    })
})