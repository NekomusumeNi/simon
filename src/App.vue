<template>
  <div id="app">
    <div class="container">
      <QuarterCircle 
      v-for='block of blocks' 
      :key='block.id'
      :block='block'
      @quarter-circle-click="quarterCircleClick"
      />
      <hr>
    </div>
    <div v-if="(roundState =='pause' || roundState =='fail')">
      <span v-if="(roundState =='fail')">Вы ошиблись, начните заново</span>
      <button @click='startGame'>Начать игру</button><br>
      <span>Уровень сложности:</span>
      <span><input  type="radio" name="radio" value="1500" id="easy" v-model='complexity'><label for="easy">Легкий</label></span>
      <span><input  type="radio" name="radio" value="1000" id="normal" v-model='complexity'><label for="normal">Средний</label></span>
      <span><input  type="radio" name="radio" value="400" id="hard" v-model='complexity'><label for="hard">Сложный</label></span>
    </div>
    <span v-else-if="(roundState =='show')">Наблюдайте за последовательностью</span>
    <span v-else-if="(roundState =='repeat')">Повторите последовательность</span>
    <span v-if="!(roundState =='pause' || roundState =='fail')">Раунд: {{soundQuantity}}</span>
  </div>
</template>

<script>
import QuarterCircle from '@/components/QuarterCircle.vue'

export default {
  name: 'App',
  data() {
    return{
      blocks: [
        {id: '1', color: '#ffd700', },
        {id: '2', color: '#007fff', },
        {id: '3', color: '#ff0000', },
        {id: '4', color: '#32cd32', },
      ],
      roundState: 'pause',
      soundChain: [],
      soundQuantity: 0,
      chainPhase: 0,
      complexity: '1500'
    }
  },
  components: {
    QuarterCircle
  },
  methods: {
    buttonSound(id){
      var audio = new Audio(require('@/audio/button' + id +'.mp3'))
      document.getElementById(id).classList.toggle('active')
      audio.play()
      setTimeout(()=>{document.getElementById(id).classList.toggle('active')}, 300)
        
    },
    quarterCircleClick(id){
      if(this.roundState == 'repeat') {
        this.buttonSound(id)
        if(id == this.soundChain[this.chainPhase]){
          if(this.chainPhase + 1 < this.soundQuantity){
            this.chainPhase++
          }
          else{
            this.chainPhase = 0
            setTimeout(()=>{this.startGame()}, 1000)
            }
        }
        else{
          this.roundState = 'fail'
          this.soundChain = []
          this.soundQuantity = 0
          this.chainPhase = 0
        }
      }
    },
    soundChainUp(){
      this.soundChain.push(Math.floor(Math.random() * (5 - 1)) + 1)
      this.soundQuantity = this.soundChain.length
    },
    startGame(){
      this.roundState = 'show'
      this.soundChainUp()
      for (let index = 0; index < this.soundQuantity; index++) {
        setTimeout(()=>{this.buttonSound(this.soundChain[index])}, (index) * this.complexity) 
        if((this.soundQuantity - index) == 1){setTimeout(()=>{this.roundState = 'repeat'}, (index) * this.complexity)}
      }
      
    }
  }
}
</script>

<style>
  .container{
    width: 368px;
    display: flex;
    flex-wrap: wrap;
    margin: 200px auto 0;
  }
  .container div{
    width: 180px; 
    height: 180px;
    margin: 2px;
    box-sizing: border-box;
    transition: 0.5s;
    position: relative;
  }
  .container div:nth-child(1){
    border-radius: 100% 0% 0% 0% / 100% 0% 0% 0%;
    border-top:3px inset white;
    border-left:3px inset white;
  }
  .container div:nth-child(2){
    border-radius: 0% 100% 0% 0% / 0% 100% 0% 0%;
    border-top:3px inset white;
    border-right:3px outset white;
  }
  .container div:nth-child(3){
    border-radius: 0% 0% 0% 100% / 0% 0% 0% 100%;
    border-bottom:3px outset white;
    border-left:3px inset white;
  }
  .container div:nth-child(4){
    border-radius: 0% 0% 100% 0% / 0% 0% 100% 0%;
    border-bottom:3px outset white;
    border-right:3px outset white;
  }
  .container div:hover{
    border-color:#000000;
    cursor: pointer;
  }
  hr{
    width: 100%;
    margin-top: 30px
  }
  button{
    width: 100px;
    margin: 20px auto 0;
    display: block;
  }
  label{
    width: 100px;
    display: inline-block;
  }
  span{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
