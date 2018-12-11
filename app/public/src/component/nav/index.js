define([ 
    'zepto',
    'utils/tools'
 ], function($, Tools) {
    
    class Nav extends Tools {

        constructor(box) {
            super();
            this.box = box;
            this.getWeather();
        }

        getWeather() {
            const info = this.box.find('.info'),
                  date = this.box.find('.date'),
                  weather = this.box.find('.weather');
            this.get('/api/getweather').then(res => {
                // 交互效果以及错误提示 TODO
                if (res.success) {
                    info.text(res.province + '_' + res.city);
                    date.text(res.date);
                    weather.text(res.temperature + ' ' + res.weather);
                }
            }).catch(err => {
                console.log(err);
            })
        }

    }

    return Nav;

})