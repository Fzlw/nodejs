'use strict';

define([
    'zepto'
], function($) {

    const defaultConfig = {
        width: 200,
        height: 200,
        bgColor: '#000',
        bgOpacity: 0.7,
        closeBtn: {
            width: 30,
            height: 30,
            top: 0,
            right: 0,
            img: '//img.cnhash.com/0ef19aa6-f840-4126-82d2-44401374da1e.svg'
        }
    }

    class Dialog {

        constructor(options) {
            this.params = Object.assign({}, defaultConfig, options || {});
            this.params.top = ($(window).height() - this.params.height) / 2;
            this.id = this.uuid();
            return "#" + this.id;
        }

        // 生成唯一标示
        uuid() {
            const v4 = () => {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
            return (v4()+v4()+"-"+v4()+"-"+v4()+"-"+v4()+"-"+v4()+v4()+v4());
        }

        /**
         * 创建弹层
         * @return {jq}  放回创建弹层的jq对象
         */
        create() {
            let {
                body,
                top,
                width,
                height,
                bgColor,
                bgOpacity,
                closeBtn
            } = this.params;
            // 转换body
            body = body instanceof $ ? body.html() : typeof body === 'string' ? body : '';

            const dialog = `
                <div id=${this.id} style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100;">
                    <div class="dialog-container" 
                    style="position: absolute; top:${top}px; width:${width}px; height:${height}px; margin: 0 auto;
                    left: 0; right: 0; bottom: 0; z-index: 102; /*background: red;*/
                    ">
                        <div class="dialog-body">${body}</div>
                        <img class="close" src="${closeBtn.img}" alt="弹层关闭按钮" style="position: absolute; 
                        top:${closeBtn.top}px; right:${closeBtn.right}px; width:${closeBtn.width}px; height:${closeBtn.height}px;
                        cursor: pointer; " />
                    </div>
                    <div class="dialog-bg"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color:${bgColor}; 
                    opacity:${bgOpacity}; z-index: 101;"
                    ></div>
                </div>
            `;
            return $(dialog);
        }

        // 开启当前弹层
        open() {
            this.close();
            let dialog = this.create();
            // 添加默认关闭事件
            dialog.find('.close').on('click', () => {
                this.close();
                dialog.find('.close').off('click');
            })
            $('body').append(dialog);
        }

        // 关闭当前弹层
        close() {
            let d = $('#' + this.id);
            if (d && d.length !== 0) {
                d.remove();
            }
        }

    }

    return Dialog;

})