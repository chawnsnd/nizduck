<template>
<div class="calendar">
  <div class="nav">
    <span><i class="fas fa-calendar-alt"> C</i></span>
    <span><i class="fas fa-history"> H</i></span>
  </div>
  <div class="query_bar">
    <div class="prev" @click="prevMonth"><i class="fas fa-chevron-left"></i></div>
    <div class="year"><input type="number" v-model="date.year" min="1" @change="setCalendar"/>년</div>
    <div class="month"><input type="number" v-model="date.month" min="1" max="12" @change="setCalendar"/>월</div>
    <btn class="white" @click="setToday">오늘</btn>
    <div class="next" @click="nextMonth"><i class="fas fa-chevron-right"></i></div>
  </div>
  <div class="calendar_table">
    <table width="100%" style="border-collapse: collapse;">
      <thead>
        <th class="sunday" style="border: 1px solid #eaeaea;">일</th>
        <th style="border: 1px solid #eaeaea;">월</th>
        <th style="border: 1px solid #eaeaea;">화</th>
        <th style="border: 1px solid #eaeaea;">수</th>
        <th style="border: 1px solid #eaeaea;">목</th>
        <th style="border: 1px solid #eaeaea;">금</th>
        <th class="saturday" style="border: 1px solid #eaeaea;">토</th>
      </thead>
      <tbody>
        <tr v-for="week in weeks" :key="week">
          <td v-for="day in 7" :key="day" @click="openWindow(date.year, date.month, day+7*(week-1)-date.firstDayOfTheWeek)" :class="{today: day+7*(week-1)-date.firstDayOfTheWeek == date.day && date.month == now.getMonth() + 1 && date.year == now.getFullYear()}">
            <span v-if="calendarIn()" :class="{sunday: day == 1, saturday: day == 7}">{{no}}</span>
            <span v-if="calendarOut()"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import btn from '../../Button'
export default {
  data () {
    return {
      artist: this.$route.params.artist,
      date: {
        year: null,
        month: null,
        day: null
      },
      weeks: null,
      now: new Date()
    }
  },
  components: {
    'btn': btn
  },
  methods: {
    setCalendar () {
      var setDate = new Date(this.date.year, this.date.month - 1, 1)
      this.date.firstDayOfTheWeek = setDate.getDay()
      var lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.date.year % 4 === 0 % this.date.year % 100 !== 0 || this.date.year % 400 === 0) lastDays[1] = 29
      this.date.lastDay = lastDays[this.date.month - 1]
      this.weeks = Math.ceil((this.date.lastDay + this.date.firstDayOfTheWeek) / 7)
      this.no = 0
      this.curCell = 0
    },
    prevMonth () {
      if (this.date.month - 1 <= 0) {
        this.date.month = 12
        this.date.year--
      } else {
        this.date.month--
      }
      this.setCalendar()
    },
    nextMonth () {
      if (this.date.month + 1 >= 13) {
        this.date.month = 1
        this.date.year++
      } else {
        this.date.month++
      }
      this.setCalendar()
    },
    calendarOut () {
      var result = false
      if (this.curCell < this.date.firstDayOfTheWeek || this.no > this.date.lastDay) {
        this.curCell++
        result = true
      }
      return result
    },
    calendarIn () {
      var result = false
      if (this.curCell >= this.date.firstDayOfTheWeek && this.no < this.date.lastDay) {
        this.no++
        result = true
      }
      return result
    },
    openWindow (year, month, day) {
      if (day <= 0 || day > this.date.lastDay) return
      window.open(`/calendar/${this.artist}/${year}_${month}_${day}`, '일정', 'width=500, height=800, resizable=no')
    },
    setToday () {
      this.date.year = this.now.getFullYear()
      this.date.month = this.now.getMonth() + 1
      this.date.day = this.now.getDate()
      this.setCalendar()
    }
  },
  mounted () {
    this.setToday()
  },
  updated () {
    this.setCalendar()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.calendar{
  width: 700px;
  margin-top: 20px;
}
.message{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  height: 500px;
}
.nav{
  text-align: right;
  font-size: 20px;
  * { margin-right: 10px; cursor: pointer; }
  padding: 5px 0;
}
.query_bar{
  position: relative;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
  border-bottom: 1px solid grey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  * { display: inline-block; }
  .prev{
    cursor: pointer;
    margin-left: 30px;
    float: left;
  }
  .next{
    cursor: pointer;
    margin-right: 30px;
    float: right;
  }
  input{
    width: 100px;
    margin-right: 10px;
    height: 100%;
    font-size: 20px;
    background-color: #eaeaea;
    text-align: right;
    border: none;
    outline: none;
  }
  .btn{
    right: 100px;
    top: 5px;
    position: absolute;
  }
}
.calendar_table{
  border: 1px solid #eaeaea;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
  border-collapse: collapse;
  th{
  height: 30px;
  }
  td{
    height: 90px;
    vertical-align: top;
    border: 1px solid #eaeaea;
    padding: 5px;
    span{
      display: inline-block;
      padding: 5px;
    }
  }
  .sunday { color: red; }
  .saturday { color: blue; }
  .today{
    background-color: #eaeaea;
    span{
      background-color: navy;
      color: white;
      border-radius: 100%;
    }
  }
}

</style>
