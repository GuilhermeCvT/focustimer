import * as sounds from './sounds.js'
import * as timer from './timer.js'
import state from './state.js'

export function play() {
  state.isRunning = true
  document.documentElement.classList.add('running')

  timer.countDown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function addMinutes() {
  state.minutes += 5
  timer.updateDisplay()
}

export function rmvMinutes() {
  if (state.minutes - 5 < 0)
    return

  state.minutes -= 5  
  timer.updateDisplay()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function toggleForest() {
  state.soundType = document.documentElement.classList.toggle('forest') 

  if (state.soundType){
    sounds.forest.play()
    return
  }

  sounds.forest.pause()
}

export function toggleRain() {
  state.soundType = document.documentElement.classList.toggle('rain') 

  if (state.soundType){
    sounds.rain.play()
    return
  }

  sounds.rain.pause()
}

export function toggleCoffee() {
  state.soundType = document.documentElement.classList.toggle('coffee') 

  if (state.soundType){
    sounds.coffee.play()
    return
  }

  sounds.coffee.pause()
}

export function toggleFire() {
  state.soundType = document.documentElement.classList.toggle('fire') 

  if (state.soundType){
    sounds.fire.play()
    return
  }

  sounds.fire.pause()
}