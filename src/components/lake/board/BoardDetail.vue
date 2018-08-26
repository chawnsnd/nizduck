<template>
<div class="board_detail">
  <div class="detail">
    <div class="header">
      <div class="profile"></div>
      <div class="meta">
        <div class="title">{{item.title}}</div>
        <span class="duck">{{item.author}}</span>
        <span class="lake">{{artist.ko_name}}</span>
        <span class="time">{{item.reg_date}}</span>
      </div>
      <div class="btns">
        <span><i class="fas fa-thumbs-up"></i>{{item.like}}</span>
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
    <div class="content" v-html="item.content"></div>
    <div class="comments">
      <div class="count">댓글 231개</div>
      <div class="comment" v-for="comment in 3" :key="comment">
        <span class="duck">닉네임2닉네</span>
        <span class="ccontent">지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀지랄 자제 좀</span>
        <span class="time">3시간 전</span>
      </div>
      <div class="comment_form comment">
        <span class="duck">웅치킨</span>
        <span class="input_box ccontent"><textarea placeholder="댓글을 입력하세요" rows="3" style="width: 100%; resize: none; border:0; outline: none; background-color: none;"></textarea></span>
        <btn class="salmon submit">등록</btn>
      </div>
    </div>
  </div>
  <div class="bottom">
    <router-link :to="`/lake/${artist.en_name}/board`"><btn>전체목록</btn></router-link>
    <btn class="red right" @click="clickDelete">삭제</btn>
    <router-link :to="`/lake/${artist.en_name}/board/${bno}/modify`"><btn class="orange right">수정</btn></router-link>
  </div>
  <board-list :bno="bno" />
</div>
</template>

<script>
/* eslint-disable */
import Artist from "../../../models/artist";
import Board from "./Board";

export default {
  components: {
    "board-list": Board
  },
  data() {
    return {
      artist: {},
      item: {},
      loading: false,
      bno: this.$route.params.bno
    };
  },
  created() {
    this.artist = Artist.current;
    this.init(this.$route.params.bno);
  },
  watch: {
    '$route': function() {
      this.fetchDetail(this.$route.params.bno)
        .then((res) => {
          this.item = res;
          this.bno = this.$route.params.bno;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  methods: {
    init(bno) {
      this.fetchDetail(bno)
        .then((res) => {
          this.item = res;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    clickDelete() {
      if (confirm("글을 삭제하시겠습니까?")) {
        // 처리
        alert("글이 삭제되었습니다.");
        this.$router.push(`/lake/${this.artist}/board`);
      }
    },
    fetchDetail(bno) {
      return new Promise((resolve, reject) => {
        this.axios
          .get(`/board/${this.artist._id}/${bno}`)
          .then(res => {
            if (!res.data.success) return reject(res.data.message)
            resolve(res.data.item)
          })
          .catch(err => {
            reject(res.data.message)
          });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
.header {
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
  .profile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: inline-block;
    background-image: url(https://lh3.googleusercontent.com/-NTJJG92Ek_s/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pjeQd8704Lo9OwhH3Zt-x8ro1KHA/s192-c-mo/photo.jpg);
  }
  .meta {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .duck {
      font-weight: bold;
      color: #365899;
      cursor: pointer;
      margin-right: 10px;
    }
    .lake {
      font-weight: bold;
      color: pink;
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .btns {
    display: inline-block;
    float: right;
    font-size: 20px;
    color: grey;
    * {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
.content {
  padding: 10px 10px 10px 10px;
  overflow: hidden;
}
.comments {
  border-top: 1px solid grey;
  padding: 10px 0 10px 0;
  .count {
    color: grey;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .comment {
    margin: 10px 0;
    display: flex;
    .duck {
      flex: 1;
      color: #365899;
      cursor: pointer;
      font-weight: bold;
    }
    .ccontent {
      flex: 10;
    }
    .time {
      flex: 1;
      text-align: right;
    }
    .submit {
      flex: 0.5;
    }
  }
  .comment_form {
    background-color: rgba(255, 192, 203, 0.3);
    padding: 5px;
    .duck {
      color: black;
      text-align: center;
      margin: auto;
    }
    .input_box {
      background-color: white;
    }
  }
}
.bottom {
  margin-top: 15px;
}
.right {
  margin-left: 10px;
  float: right;
}
</style>
