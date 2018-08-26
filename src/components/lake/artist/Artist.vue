<template>
    <div class="artist">
        <div class="left">
            <div class="top">
                <div class="profile">
                    <img v-if="!artist.profile_image" src="../../../assets/logo.png" width="100px" height="100px" />
                    <img v-else :src="artist.profile_image" width="100px" height="100px" />
                </div>
                <div class="meta">
                    <div class="name">{{artist.ko_name}}</div>
                    <div class="count">
                        <span class="sub_title">최애</span><span>{{artist.bias}}</span>
                        <span class="sub_title">관심</span><span>{{artist.interest}}</span>
                    </div>
                </div>
            </div>
            <div class="bottom">
                {{artist.status_message}}
            </div>
        </div>
        <div class="right">
            <div class="row">
                <div class="box musicchart">
                    <div class="title"><div class="sub_title">실시간 음원차트</div><div class="right">자세히 보기</div></div>
                    <div class="chart">
                        <img src="https://www.melon.com/favicon.ico"/>
                        <div class="music"><span class="rank">3</span><span class="artist_name">오마이걸</span> - <span class="music_name">바나나 알러지 원숭이바나나 알러지 원숭이바나나 알러지 원숭이바나나 알러지 원숭이</span></div>
                    </div>
                    <div class="chart">
                        <img src="https://www.genie.co.kr/resources/favicon_32.ico"/>
                        <div class="music"><span class="rank">3</span><span class="artist_name">오마이걸</span> - <span class="music_name">바나나 알러지 원숭이</span></div>
                    </div>
                    <div class="chart">
                        <img src="https://music.naver.com/favicon.ico"/>
                        <div class="music"><span class="rank">3</span><span class="artist_name">오마이걸</span> - <span class="music_name">바나나 알러지 원숭이</span></div>
                    </div>
                    <div class="chart">
                        <img src="http://mnetimg.mnet.com/common/favicon.ico"/>
                        <div class="music"><span class="rank">3</span><span class="artist_name">오마이걸</span> - <span class="music_name">바나나 알러지 원숭이</span></div>
                    </div>
                    <div class="chart">
                        <img src="https://file.bugsm.co.kr/wbugs/common/faviconBugs.ico"/>
                        <div class="music"><span class="rank">3</span><span class="artist_name">오마이걸</span> - <span class="music_name">바나나 알러지 원숭이</span></div>
                    </div>
                </div>
                <div class="box calendar">
                    <div class="title"><div class="sub_title">다가오는 일정</div><div class="right">전체보기</div></div>
                    <div class="schedule" v-for="schedule in 5" :key="schedule">
                        <span class="date">2018-07-21</span><span class="kind">[TV/라디오]</span><span class="schedule_name">라디오스타(아린, 미미)</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="box notice">
                    <div class="title"><div class="sub_title">공지</div><div class="right">전체보기</div></div>
                    <div class="post" v-for="post in 5" :key="post">
                        <span class="post_title">김도아 분량이 적은 이유.fact</span><span class="picture"><i class="fas fa-image"></i></span><span class="comment">[3]</span>
                    </div>
                </div>
                <div class="box hot">
                    <div class="title"><div class="sub_title">인기 게시물</div><div class="right">전체보기</div></div>
                    <div class="post" v-for="post in 10" :key="post">
                        <span class="post_title">김도아 분량이 적은 이유.fact</span><span class="picture"><i class="fas fa-image"></i></span><span class="comment">[3]</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Artist from '../../../models/artist'
export default {
  data () {
    return {
      msg: '',
      artist: {}
    }
  },
  methods: {
  },
  mounted() {
    this.artist = Artist.current;
  }
}
</script>

<style lang="scss" scoped>
.artist{
    display: flex;
    margin: 20px 0;
}
.left{
    flex: 1;
    background-color: white;
    min-height: 500px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 20px;
}
.right{
    flex: 3;
    margin-left: 20px;
}
.top{
    display: flex;
    .profile{
        flex: 1;
    }
    .meta{
        flex: 3;
        display: flex;
        width: 180px;
        height: 100px;
        margin-left: 20px;
        flex-direction: column;
    }
    .name{
        flex: 2;
        font-size: 30px;
    }
    .count{
        flex: 1;
        font-size: 15px;
    }
    .sub_title{
        font-weight: bold;
        margin-right: 3px;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
}
.bottom{
    white-space: pre-line;
}
.box{
    display: inline-block;
    background-color: white;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 20px;
    .title{ margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid grey;}
    .title > * {
        display: inline-block;
    }
    .sub_title{
        font-weight: bold;
    }
    .right{
        cursor: pointer;
        float: right;
        color: grey;
    }
    .right:hover{
        text-decoration: underline;
    }
}
.row{
    display: flex;
}
.musicchart{
    height: 150px;
}
.chart{
    margin: 5px 0;
    flex: 1;
    img{ width: 16px; height: 16px; display: inline-block;}
    .music{
        cursor: pointer;
        display: inline-block;
        text-align: right;
        display: inline-block;
        span{ display: inline-block; }
        .rank{
            font-weight: bold;
            font-size: 15px;
            margin-right: 10px;
        }
        padding-left: 30px;
        float: right;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.calendar{
    flex: 3;
    vertical-align: top;
    height: 150px;
    margin-left: 20px;
    .schedule{
        cursor: pointer;
        * {display: inline-block; vertical-align: middle;}
        margin: 10px 0;
        .date{
            font-weight: bold;
            margin-right: 10px;
        }
        .kind{
            margin-right: 5px;
        }
        .schedule_name{
            max-width: 370px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
.notice{
    flex: 1;
    .post{ margin: 10px 0; cursor: pointer;}
    .post:hover{ text-decoration: underline; }
    height: 300px;
    margin-top: 20px;
    margin-right: 20px;
    .picture{
      margin-left: 3px;
      color: green;
    }
    .comment{
      margin-left: 3px;
      color: orange;
      font-weight: bold;
    }
}
.hot{
    flex: 1;
    margin-top: 20px;
    height: 300px;
    .post{ margin: 10px 0; cursor: pointer; }
    .post:hover{ text-decoration: underline; }
    .picture{
      margin-left: 3px;
      color: green;
    }
    .comment{
      margin-left: 3px;
      color: orange;
      font-weight: bold;
    }
}
</style>
