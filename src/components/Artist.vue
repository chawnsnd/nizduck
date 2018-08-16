<template>
<div>
    <h1>아티스트 관리 페이지</h1>
    <h2>아티스트 추가</h2>
    <label>국문이름<input type="text" v-model="form.ko_name"/></label>
    <label>영문이름<input type="text" v-model="form.en_name"/></label>
    <label>프로필사진<input type="image" v-model="form.profile"/></label>
    <label>메인사진<input type="image" v-model="form.main_image"/></label>
    <label>분류
        <select v-model="form.kind">
            <option value="group">그룹</option>
            <option value="private">개인</option>
            <option value="etc">기타</option>
        </select>
    </label>
    <label>상태메시지
        <textarea v-model="form.status_message"/>
    </label>
    <input @click="postArtist()" type="submit" value="등록">
</div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            form: {
                ko_name: null,
                en_name: null,
                profile_image: null,
                main_image: null,
                status_message: null
            }
        }
    },
    methods: {
        postArtist () {
            this.axios
            .post('/artist', this.form)
            .then(res => {
                if(!res.data.success) return console.log('등록에 실패했습니다.')
                this.$router.push('/')
            })
            .catch(err => {
                console.log('등록에 실패했습니다.', err)
            })
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
