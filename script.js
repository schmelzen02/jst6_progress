// ミリ秒プログレスバー追加
const timer = document.createElement('progress')
timer.style.width = '100%'
timer.max = '100'
document.querySelectorAll('tr')[1].after(timer)

// マーカー追加
const markerWrapper = document.createElement('div')
markerWrapper.style.display = 'table'
markerWrapper.style.width = '100%'
for (let i = 0; i < 100; i += 10) {
  const marker = document.createElement('div')
  marker.style.display = 'table-cell'
  marker.textContent = `▼.${i}`
  markerWrapper.append(marker)
}
document.querySelectorAll('tr')[1].after(markerWrapper)

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
