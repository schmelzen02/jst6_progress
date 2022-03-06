// ミリ秒プログレスバー追加
const timer = document.createElement('progress')
timer.style.width = '100%'
timer.max = '100'
document.querySelectorAll('tr')[1].after(timer)

// マーカー追加
const marker = document.createElement('div')
marker.style.width = '100%'
marker.style.marginLeft = '70%'
marker.textContent = '▼'
document.querySelectorAll('tr')[1].after(marker)

// ミリ秒タイマー起動
let timerId;
new MutationObserver((mutations) => {
  mutations.forEach(function() {
    clearInterval(timerId)
    timer.value = '00'
    const now = Date.now()
    timerId = setInterval(() => {
      timer.value = new Date((Date.now() - now) % 1000).toISOString().slice(20,22)
    }, 10)
  })
}).observe(document.querySelectorAll('table img')[15], {attributes: true})
