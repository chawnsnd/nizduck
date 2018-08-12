<template>
    <div class="join">
        <div class="join_box">
            <div class="title" @click="goMain">NIZDUCK</div>
            <div class="progress">
                <span @click="to('terms')" :class="{active: show.terms}">약관</span>
                <span @click="clickAtTerms()" :class="{active: show.default}">기본정보</span>
                <span @click="clickAtDefault()" :class="{active: show.addition}">추가정보</span>
            </div>
            <div v-if="show.terms" class="form terms">
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
                    <div class="agree"><label><input v-model="terms.use" type="checkbox"/>약관에 동의합니다.</label></div>
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
                    <div class="agree"><label><input v-model="terms.privacy" type="checkbox"/>약관에 동의합니다.</label></div>
                </div>
                <div class="selection">
                    <div class="name">이벤트 등 프로모션 알림 메일 수신(선택)</div>
                    <div class="agree"><label><input v-model="form.promotion" type="checkbox"/>약관에 동의합니다.</label></div>
                </div>
                <div class="submit"><btn @click="clickAtTerms()" class="pink">다음으로</btn></div>
            </div>
            <div v-if="show.default" class="form default">
                <div class="section">
                    <div class="name">이메일</div>
                    <div class="typing"><input v-model="form.email" @keyup="emailCheck()" type="text" placeholder="이메일" id="email" /></div>
                    <div v-if="caution.email_duplicate" class="notify warning">이미 등록된 이메일입니다.</div>
                    <div v-if="caution.email_form" class="notify warning">이메일 형식에 맞지 않습니다.</div>
                    <div v-if="caution.email_ok" class="notify ok">사용가능한 이메일입니다.</div>
                </div>
                <div class="section">
                    <div class="name">덕네임</div>
                    <div class="typing"><input v-model="form.duckname" @keyup="ducknameCheck()" type="text" placeholder="덕네임" id="duckname"/></div>
                    <div v-if="caution.duckname_duplicate" class="notify warning">이미 등록된 덕네임입니다.</div>
                    <div v-if="caution.duckname_ok" class="notify ok">사용가능한 덕네임입니다.</div>
                </div>
                <div class="section">
                    <div class="name">패스워드 (숫자, 특수문자 포함 6글자 이상)</div><div class="typing"><input @keyup="passwordCheck()" v-model="form.password" type="password" placeholder="패스워드" id="password"/></div>
                    <div v-if="caution.password_form" class="notify warning">패스워드 형식에 맞지 않습니다. (영어, 숫자, 특수문자 포함 8글자 이상)</div>
                    <div v-if="caution.password_ok" class="notify ok">사용가능한 패스워드입니다.</div>
                </div>
                <div class="section">
                    <div class="name">패스워드 재확인</div><div class="typing"><input @keyup="repasswordCheck()" v-model="repassword" type="password" placeholder="패스워드 재확인" id="repassword"/></div>
                    <div v-if="caution.passcheck_warning" class="notify warning">패스워드가 일치하지 않습니다.</div>
                    <div v-if="caution.passcheck_ok" class="notify ok">패스워드가 일치합니다.</div>
                </div>
                <div class="section">
                    <div class="name">이름</div>
                    <div class="typing"><input type="text" v-model="form.name" placeholder="이름" id="name"/></div>
                </div>
                <div class="section">
                    <div class="name">생년월일</div>
                    <div class="flex" id="birthday">
                        <div class="typing" style="flex: 1;">
                            <input type="number" v-model="birthday.year" placeholder="년 (4자)"/>
                        </div>
                        <div class="typing" style="flex: 1;">
                            <select v-model="birthday.month">
                                <option>월</option>
                                <option value="01">1월</option>
                                <option value="02">2월</option>
                                <option value="03">3월</option>
                                <option value="04">4월</option>
                                <option value="05">5월</option>
                                <option value="06">6월</option>
                                <option value="07">7월</option>
                                <option value="08">8월</option>
                                <option value="09">9월</option>
                                <option value="10">10월</option>
                                <option value="11">11월</option>
                                <option value="12">12월</option>
                            </select>
                        </div>
                        <div class="typing" style="flex: 1;">
                            <select v-model="birthday.day">
                                <option>일</option>
                                <option value="01">1일</option>
                                <option value="02">2일</option>
                                <option value="03">3일</option>
                                <option value="04">4일</option>
                                <option value="05">5일</option>
                                <option value="06">6일</option>
                                <option value="07">7일</option>
                                <option value="08">8일</option>
                                <option value="09">9일</option>
                                <option value="10">10일</option>
                                <option value="11">11일</option>
                                <option value="12">12일</option>
                                <option value="13">13일</option>
                                <option value="14">14일</option>
                                <option value="15">15일</option>
                                <option value="16">16일</option>
                                <option value="17">17일</option>
                                <option value="18">18일</option>
                                <option value="19">19일</option>
                                <option value="20">20일</option>
                                <option value="21">21일</option>
                                <option value="22">22일</option>
                                <option value="23">23일</option>
                                <option value="24">24일</option>
                                <option value="25">25일</option>
                                <option value="26">26일</option>
                                <option value="27">27일</option>
                                <option value="28">28일</option>
                                <option value="29">29일</option>
                                <option value="30">30일</option>
                                <option value="31">31일</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="name">성별</div>
                    <div class="sex_typing typing" id="sex">
                        <span class="sex" @click="form.sex = 'm'" :class="{active: form.sex === 'm'}">남자</span>
                        <span class="sex" @click="form.sex = 'f'" :class="{active: form.sex === 'f'}">여자</span>
                    </div>
                </div>
                <div class="section disabled">
                    <div class="name">휴대전화</div>
                    <btn>인증받기</btn>
                    <div class="notify warning">휴대전화 인증을 완료해주세요.</div>
                </div>
                <div class="submit"><btn @click="clickAtDefault()" class="pink">다음으로</btn></div>
            </div>
            <div v-if="show.addition" class="form addition">
                <div class="section">
                    <div class="name">최애 아티스트 (하나만 선택 가능합니다.)</div>
                    <div class="artist_box">
                        <div class="artist" :class="{active: form.bias === artist}" @click="clickBias(artist)" v-for="artist in 20" :key="artist">오마이걸({{artist}})</div>
                    </div>
                </div>
                <div class="section">
                    <div class="name">관심 아티스트 (여러개 선택 가능합니다.)</div>
                    <div class="artist_box">
                        <div class="artist" :class="{active: form.interest.includes(artist)}" @click="clickInterest(artist)" v-for="artist in 20" :key="artist">오마이걸({{artist}})</div>
                    </div>
                </div>
                <div class="section">
                    <i class="fas fa-exclamation-circle"></i> 추가 정보는 추후에 등록 및 변경이 가능합니다.
                </div>
                <div class="submit"><btn @click="clickAtAddition()" class="pink">회원가입</btn></div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      msg: 'join',
      terms: {
        use: false,
        privacy: false
      },
      show: {
        terms: true,
        default: false,
        addition: false
      },
      form: {
        email: null,
        duckname: null,
        password: null,
        name: null,
        birthday: null,
        sex: null,
        bias: null,
        interest: [],
        promotion: false
      },
      repassword: null,
      birthday: {
        year: null,
        month: "월",
        day: "일"
      },
      caution: {
        email_duplicate: false,
        email_form: false,
        email_ok: false,
        duckname_duplicate: false,
        duckname_ok: false,
        password_form: false,
        password_ok: false,
        passcheck_warning: false,
        passcheck_ok: false
      }
    }
  },
  methods: {
    goMain () {
      this.$router.push('/')
    },
    to (str) {
      if (str === 'terms') {
        this.show.terms = true
        this.show.default = false
        this.show.addition = false
      } else if (str === 'default') {
        this.show.terms = false
        this.show.default = true
        this.show.addition = false
      } else if (str === 'addition') {
        this.show.terms = false
        this.show.default = false
        this.show.addition = true
      } else {
        return null
      }
    },
    clickAtTerms () {
      if(this.checkTerms()){
          this.to('default')
      }
    },
    clickAtDefault () {
      if(this.checkTerms() && this.checkForm()){
        this.to('addition')
      }
    },
    clickAtAddition () {
      if(this.checkTerms() && this.checkForm() && this.checkAddtion()){
        this.join();
      }
    },
    checkTerms () {
        if (!this.terms.use || !this.terms.privacy){
            this.to('terms')
            alert('이용약관에 동의해주세요.')
            return false;
        }
        return true;
    },
    emailCheck () {
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        if(this.form.email.match(regExp) != null){
            this.caution.email_form = false;
            return new Promise(resolve => {
                this.axios
                .post("/user/verify", {
                    email: this.form.email
                })
                .then(res => {
                    if(res.data.success){
                        this.caution.email_duplicate = false;
                        this.caution.email_ok = true;
                        return true;
                    } else{
                        this.caution.email_ok = false;
                        this.caution.email_duplicate = true;
                        return false;
                    } 
                })
            })
        }else{
            this.caution.email_form = true;
            this.caution.email_ok = false;
            return false;
        }
    },
    ducknameCheck () {
        return new Promise(resolve => {
            this.axios
            .post("/user/verify", {
                duckname: this.form.duckname
            })
            .then(res => {
                if(res.data.success){
                    this.caution.duckname_duplicate = false;
                    this.caution.duckname_ok = true;
                    return true;
                } else{
                    this.caution.duckname_ok = false;
                    this.caution.duckname_duplicate = true;
                    return false;
                } 
            })
        })
    },
    passwordCheck () {
        var regExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i
        if(this.form.password.match(regExp) != null){
            this.caution.password_form = false;
            this.caution.password_ok = true;
            return true;
        }else{
            this.caution.password_form = true;
            this.caution.password_ok = false;
            return false;
        }
    },
    repasswordCheck () {
        if(this.form.password === this.repassword){
            this.caution.passcheck_warning = false;
            this.caution.passcheck_ok = true;
            return true;
        }else{
            this.caution.passcheck_warning = true;
            this.caution.passcheck_ok = false;
            return false;
        }
    },
    checkForm () {
        if (!this.form.email || !this.emailCheck()) {
            alert('이메일을 확인하세요')
            this.to('default')
            document.getElementById('email').focus()
            return false
        }
        if (!this.form.duckname || !this.ducknameCheck()) {
            alert('덕네임을 확인하세요')
            this.to('default')
            document.getElementById('duckname').focus()
            return false
        }
        if (!this.form.password || !this.passwordCheck()) {
            alert('패스워드를 확인하세요')
            this.to('default')
            document.getElementById('password').focus()
            return false
        }
        if (!this.repassword || !this.repasswordCheck()) {
            alert('패스워드를 재확인하세요')
            this.to('default')
            document.getElementById('repassword').focus()
            return false
        }
        if (!this.form.name) {
            alert('이름을 확인하세요')
            this.to('default')
            document.getElementById('name').focus()
            return false
        }
        if (!this.setBirthday()) {
            return false
        }
        if (!this.form.sex) {
            alert('성별을 확인하세요')
            this.to('default')
            document.getElementById('sex').focus()
            return false
        }
        return true
    },
    setBirthday () {
        if (!this.birthday.month || !this.birthday.month || !this.birthday.day) {
            alert('생년월일을 확인하세요.')
            this.to('default')
            document.getElementById('birthday').focus()
            return false
        }
        if (this.birthday.month === '월' || this.birthday.day === '일') {
            alert('생년월일을 확인하세요.')
            this.to('default')
            document.getElementById('birthday').focus()
            return false
        }
        if (this.birthday.year.toString().length != 4 || this.birthday.year <= 0){
            alert('출생년도는 4자리로 맞춰주세요.')
            this.to('default')
            document.getElementById('birthday').focus()
            return false
        }
        this.form.birthday = this.birthday.year.toString()+"-"+this.birthday.month+"-"+this.birthday.day
        return true
    },
    checkAddtion () {
        if (!this.form.bias) {
            this.to('addition')
            alert('최애 아티스트를 선택해주세요.')
            return false
        }
        return true
    },
    clickBias (artist) {
        this.form.bias = artist
    },
    clickInterest (artist) {
        if (this.form.interest.includes(artist)) {
            this.form.interest.splice(this.form.interest.indexOf(artist), 1)
            return
        }
        this.form.interest.push(artist)
    },
    join () {
        this.axios
        .post("/user", this.form)
        .then(res => {
            if(res.data.success){
                alert("회원가입이 완료되었습니다.")
                this.$router.push('/');
            }else{
                alert("회원가입에 실패했습니다.")
                console.log(res.data.message)
            }
        })
        .catch(err => {
            alert("회원가입에 실패했습니다.", err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
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
        cursor: pointer;
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
    cursor: pointer;
    margin-bottom: 20px;
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
input[type='text'], input[type='password'],  input[type='number'], select{
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
// .typing:hover{
//     border: 1px solid pink;
// }
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
    margin: 10px 0 10px 0;
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
