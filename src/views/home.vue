<template>
    <div class="home">
        <div class="header">
            <div class="h_left">
                <img src="https://suola-1300285550.cos.ap-nanjing.myqcloud.com/wedding/others/1.jpg" />
                <div @click="goPhotos(1)">电影空间</div>
            </div>
            <div class="h_center">
                囍
            </div>
            <div class="h_right">
                <img src="https://suola-1300285550.cos.ap-nanjing.myqcloud.com/wedding/others/2.jpg" />
                <div @click="goPhotos(2)">公园外景</div>
            </div>
        </div>
        <div class="middle">
            <div class="m_left">
                <div>执子之手</div>
            </div>
            <div class="m_center">
                <img class="xuanguan" src="https://suola-1300285550.cos.ap-nanjing.myqcloud.com/wedding/others/0.jpg" />
            </div>
            <div class="m_right">
                <div>与子偕老</div>
            </div>
        </div>
        <div class="flooter">
            <div class="f_left">
                <img src="https://suola-1300285550.cos.ap-nanjing.myqcloud.com/wedding/others/3.jpg" />
                <div @click="goPhotos(3)">国风中式</div>
            </div>
            <div class="f_center">
                ❤
            </div>
            <div class="f_right">
                <img src="https://suola-1300285550.cos.ap-nanjing.myqcloud.com/wedding/others/4.jpg" />
                <div @click="goPhotos(4)">欢喜花嫁</div>
            </div>
        </div>
        <!-- <Texiao style="overflow: hidden"></Texiao> -->
        <div>
            <div style="font-size: 40px;text-align: right;margin-top: 60px;margin-right: 30px;">
                <img style="width: 120px;margin-right: 60px;" src="@/assets/images/icon/qingshu.png" @click="go()" />
                <div><a>一纸情书</a><img style="width: 60px;" src="@/assets/images/icon/click.png" @click="go()" /></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import Texiao from "./texiao.vue"
import router from "@/router";

function goPhotos(ind: number) {
    if (ind == 1) {
        router.push("/photos/filmSpace")
    } else if (ind == 2) {
        router.push("/photos/parkExterior")
    } else if (ind == 3) {
        router.push("/photos/chineseStyle")
    } else if (ind == 4) {
        router.push("/photos/hanayome")
    }
}

function go() {
    router.push("/shiyan")
}

</script>
<style lang="less" scoped>
.home {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .header,
    .flooter {
        background-color: pink;
        width: 100%;
        height: 41.25vw;
        display: flex;

        .h_left,
        .h_center,
        .h_right,
        .f_left,
        .f_center,
        .f_right {
            height: 100%;
            justify-content: center;
        }

        .h_left,
        .h_right,
        .f_left,
        .f_right {
            width: 27.5vw;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            div {
                position: absolute;
                font-size: 52px;
                bottom: 4px;
                left: 0;
                text-align: center;
                width: 27.5vw;
                text-shadow: 0px 2px 0px #fff, 0px -2px 0px #9da181, 2px 0px 0px #fff, -2px 0px 0px #9da181;
                text-decoration: underline;
            }
        }

        .h_center,
        .f_center {
            width: 45vw;
            font-size: 240px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(221, 70, 19);
        }

        .h_center {
            text-shadow: 0px 4px 0px #fff, 0px -4px 0px #9da181, 4px 0px 0px #fff, -4px 0px 0px #9da181;
        }
    }

    .middle {
        background-color: pink;
        width: 100%;
        height: 67.5vw;
        display: flex;

        .m_left,
        .m_center,
        .m_right {
            height: 100%;
            justify-content: center;
        }

        .m_left,
        .m_right {
            width: 27.5vw;
            padding-top: 60px;
            width: 100%;
            height: 100%;
            writing-mode: vertical-lr;
            font-size: 68px;
            letter-spacing: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-shadow: 0px 4px 0px #fff, 0px -4px 0px #9da181, 4px 0px 0px #fff, -4px 0px 0px #9da181;
            color: rgb(255, 225, 0);
        }

        .m_center {
            width: 45vw;

            .xuanguan {
                width: 45vw;
                height: 67.5vw;
            }
        }
    }


}
</style>