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
                  _date = this.box.find('.date'),
                  _weather = this.box.find('.weather');
            this.get('/api/getweather').then(res => {
                // 交互效果以及错误提示 TODO
                if (res.success) {
                    let { province, city, date, temperature, weather } = res;
                    info.text(province + '_' + city);
                    _date.text(date);
                    _weather.text(parseInt(temperature) + '℃ ' + weather);
                }
            }).catch(err => {
                console.log(err);
            })
        }

    }

    return Nav;

})