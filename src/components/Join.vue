<template>
    <div class="join">
        <div class="join_box">
            <div class="title">NIZDUCK</div>
            <div class="progress">
                <span class="active">약관</span>
                <span>기본정보</span>
                <span>추가정보</span>
                <span>가입완료</span>
            </div>
            <div class="form terms disabled">
                <div class="section">
                    <div class="name">니즈덕 이용약관 동의</div>
                    <div class="terms_box">
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                    </div>
                    <div class="agree"><label><input type="checkbox"/>약관에 동의합니다.</label></div>
                </div>
                <div class="section">
                    <div class="name">개인정보 수집 및 이용에 대한 안내</div>
                    <div class="terms_box">
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라
                        불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                        라울라불라울라불라울라불라울라불라울라불라울라불라울라불라울라불라
                    </div>
                    <div class="agree"><label><input type="checkbox"/>약관에 동의합니다.</label></div>
                </div>
                <div class="selection">
                    <div class="name">이벤트 등 프로모션 알림 메일 수신</div>
                    <div class="agree"><label><input type="checkbox"/>약관에 동의합니다.</label></div>
                </div>
                <btn class="pink">다음으로</btn>
            </div>
            <div class="form default disabled">
                <div class="section">
                    <div class="name">이메일</div>
                    <div class="typing"><input type="text" placeholder="이메일"/></div>
                    <div class="notify warning">이미 등록된 이메일입니다.</div>
                    <div class="notify ok">사용가능한 이메일입니다.</div>
                </div>
                <div class="section">
                    <div class="name">덕네임</div>
                    <div class="typing"><input type="text" placeholder="덕네임"/></div>
                    <div class="notify warning">이미 등록된 덕네임입니다.</div>
                    <div class="notify ok">사용가능한 덕네임입니다.</div>
                </div>
                <div class="section">
                    <div class="name">패스워드 (숫자, 특수문자 포함 6글자 이상)</div><div class="typing"><input type="password" placeholder="패스워드"/></div>
                    <div class="notify warning">좀 더 안전한 패스워드를 설정하세요. (숫자, 특수문자 포함 6글자 이상)</div>
                    <div class="notify ok">사용가능한 패스워드입니다.</div>
                </div>
                <div class="section">
                    <div class="name">패스워드 재확인</div><div class="typing"><input type="password" placeholder="패스워드 재확인"/></div>
                    <div class="notify warning">패스워드가 일치하지 않습니다.</div>
                    <div class="notify ok">패스워드가 일치합니다.</div>
                </div>
                <div class="section">
                    <div class="name">이름</div>
                    <div class="typing"><input type="text" placeholder="이름"/></div>
                    <div class="notify warning">필수정보입니다.</div>
                </div>
                <div class="section">
                    <div class="name">생년월일</div>
                    <div class="flex">
                        <div class="typing" style="flex: 1;">
                            <input type="text" placeholder="년 (4자)"/>
                        </div>
                        <div class="typing" style="flex: 1;">
                            <select>
                                <option selected>월</option>
                                <option>1월</option>
                                <option>2월</option>
                                <option>3월</option>
                                <option>4월</option>
                                <option>5월</option>
                                <option>6월</option>
                                <option>7월</option>
                                <option>8월</option>
                                <option>9월</option>
                                <option>10월</option>
                                <option>11월</option>
                                <option>12월</option>
                            </select>
                        </div>
                        <div class="typing" style="flex: 1;">
                            <select>
                                <option selected>일</option>
                                <option>1일</option>
                                <option>2일</option>
                                <option>3일</option>
                                <option>4일</option>
                                <option>5일</option>
                                <option>6일</option>
                                <option>7일</option>
                                <option>8일</option>
                                <option>9일</option>
                                <option>10일</option>
                                <option>11일</option>
                                <option>12일</option>
                                <option>13일</option>
                                <option>14일</option>
                                <option>15일</option>
                                <option>16일</option>
                                <option>17일</option>
                                <option>18일</option>
                                <option>19일</option>
                                <option>20일</option>
                                <option>21일</option>
                                <option>22일</option>
                                <option>23일</option>
                                <option>24일</option>
                                <option>25일</option>
                                <option>26일</option>
                                <option>27일</option>
                                <option>28일</option>
                                <option>29일</option>
                                <option>30일</option>
                                <option>31일</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="name">성별</div>
                    <div class="sex_typing typing">
                        <span class="sex active">남자</span>
                        <span class="sex">여자</span>
                    </div>
                    <div class="notify warning">필수정보입니다.</div>
                </div>
                <div class="section">
                    <div class="name">휴대전화</div>
                    <btn>인증받기</btn>
                    <div class="notify warning">휴대전화 인증을 완료해주세요.</div>
                </div>
                <div class="submit"><btn class="pink">다음으로</btn></div>
            </div>
            <div class="form addition">
                <div class="section">
                    <div class="name">최애 아티스트 (하나만 선택 가능합니다.)</div>
                    <div class="artist_box">
                        <div class="artist" v-for="artist in 20" :key="artist">오마이걸({{artist}})</div>
                    </div>
                </div>
                <div class="section">
                    <div class="name">관심 아티스트 (여러개 선택 가능합니다.)</div>
                    <div class="artist_box">
                        <div class="artist" v-for="artist in 20" :key="artist">오마이걸({{artist}})</div>
                    </div>
                </div>
                <div class="section">
                    <i class="fas fa-exclamation-circle"></i> 추가 정보는 추후에 등록 및 변경이 가능합니다.
                </div>
                <btn class="pink">등록하기</btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'join'
    }
  },
  methods: {
    goJoin () {
      alert('asfd')
      this.$router.push('/join')
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled{
    display: none;
}
.join{
    width: 1000px;
    margin: auto;
}
.progress{
    background-color: white;
    border: 1px solid #eaeaea;
    display: flex;
    span{
        flex: 1;
        font-size: 20px;
        padding: 10px 0;
    }
    .active{
        background-color: pink;
        color: white;
    }
}
.join_box{
    padding: 50px 100px 50px 100px;
    width: 500px;
    margin: auto;
    text-align: center;
}
.title{
    color: salmon;
    font-weight: bold;
    font-size: 80px;
}
.form{
    margin-top: 30px;
}
.terms_box{
    background-color: white;
    border: 1px solid grey;
    height: 130px;
    overflow-y: auto;
    padding: 10px;
    text-align: left;
}
input[type='text'], input[type='password'], select{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
.typing{
    height: 40px;
    padding: 10px;
    background-color: white;
    border: 1px solid grey;
}
.typing:hover{
    border: 1px solid pink;
}
.sex_typing{
    display: flex;
    padding: 0;
    height: 50px;
    span{
        padding: 10px;
        line-height: 30px;
        vertical-align: center;
        flex: 1;
        cursor: pointer;
    }
    .active{
        background-color: orange;
        color: white;
    }
}
.btn{
    width: 100%;
    height: 50px;
    font-size: 20px;
}
.name{
    font-weight: bold;
    text-align: left;
    margin-bottom: 5px;
}
.flex{
    display: flex;
    > *{
        display: inline-block;
    }
}
.section{
    margin: 20px 0;
}
.agree, .notify{
    text-align: left;
    &.ok{
        color: green;
    }
    &.warning{
        color: red;
    }
}
.artist_box{
    background-color: white;
    border: 1px solid grey;
    height: 300px;
    overflow-y: auto;
    text-align: center;
    .artist{
        display: inline-block;
        width: 100px;
        height: 100px;
        line-height: 100px;
        vertical-align: center;
        background-color: grey;
        color: white;
        font-weight: bold;
        border-radius: 100%;
        margin: 5px;
        text-align: center;
        cursor: pointer;
    }
    .active{
        background-color: pink;
    }
}
</style>
