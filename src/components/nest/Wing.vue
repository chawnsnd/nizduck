<template>
    <div class="wing">
        <div class="wing_box">
            <div class="section">
                <div class="title">최애 레이크</div>
                <div class="lakes">
                    <div class="lake">오마이걸</div>
                </div>
            </div>
            <div class="section" style="margin-bottom: 0;">
                <div class="title">관심 레이크</div>
                <div class="lakes">
                    <div class="lake">트와이스</div>
                    <div class="lake">레드벨벳</div>
                    <div class="lake">마마무</div>
                    <div class="lake">여자친구</div>
                    <div class="lake">블랙핑크</div>
                    <div class="lake">오마이걸</div>
                    <div class="lake">러블리즈</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <span>서비스소개</span> |
            <span>광고안내</span> |
            <span>제휴안내</span> |
            <span>후원안내</span> |
            <span>이용약관</span> |
            <span>개인정보처리방침</span> |
            <span>청소년보호정책</span> |
            <span>문의하기</span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'sadf'
    }
  }
}
</script>

<style lang="scss" scoped>
.wing_box {
    border: 1px solid #eaeaea;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
}
.form{
    display: flex;
    margin-bottom: 5px;
    .typing{
        flex: 4;
        input{
            padding-left: 5px;
            margin-right: 5px;
        }
        input[type='text']{
            margin-bottom: 5px;
        }
    }
    .btn{ flex: 1; font-size: 11px;}
}
.btns{
    margin-top: 5px;
    * { cursor: pointer; margin-right: 5px;}
    *:hover{ text-decoration: underline; }
}
.user{
    display: flex;
    cursor: pointer;
    .profile{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        display: inline-block;
        background-image: url(https://lh3.googleusercontent.com/-NTJJG92Ek_s/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pjeQd8704Lo9OwhH3Zt-x8ro1KHA/s192-c-mo/photo.jpg)
    }
    .meta{
        margin-left: 10px;
        .duck{
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 3px;
        }
        .email{
            font-weight: bold;
        }
    }
}

.section {
    margin-bottom: 30px;
}
.title {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
}
.lake{
    cursor: pointer;
    margin: 10px 0;
}
.footer {
    margin-top: 10px;
    span {
        display: inline-block;
        cursor: pointer;
        margin: 0 10px;
    }
    color: lightsalmon;
}
</style>
