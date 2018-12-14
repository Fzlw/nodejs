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
            const _weather = this.box.find('.weather');
            this.get('/api/getweather').then(res => {
                // 交互效果以及错误提示 TODO
                if (res.success) {
                    let { temperature, weather } = res;
                    _weather.text(parseInt(temperature) + '℃  ' + weather);
                }
            }).catch(err => {
                console.log(err);
            })
        }

    }

    return Nav;

})