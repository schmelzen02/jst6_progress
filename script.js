(() => {
  // プログレスバー追加
  const wrapper = document.createElement('div')
  wrapper.innerHTML = `
  <style>
  .schmelzen-table-wrapper {
    display: table;
    width: 100%;
  }
  .schmelzen-table-cell {
    display: table-cell;
  }
  .schmelzen-checkbox {
    display: none;
  }
  .schmelzen-checkbox:checked + label {
    color: #333333;
  }
  #schmelzen-progress {
    width: 100%;
  }
  </style>
  <div class='schmelzen-table-wrapper'>
    <input class='schmelzen-checkbox' id='schmelzen-marker0' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker0'>▼.0</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker10' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker10'>▼.10</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker20' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker20'>▼.20</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker30' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker30'>▼.30</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker40' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker40'>▼.40</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker50' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker50'>▼.50</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker60' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker60'>▼.60</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker70' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker70'>▼.70</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker80' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker80'>▼.80</label>
    <input class='schmelzen-checkbox' id='schmelzen-marker90' type='checkbox'>
    <label class='schmelzen-table-cell' for='schmelzen-marker90'>▼.90</label>
  </div>
  <progress id='schmelzen-progress' max='100'></progress>
  `
  document.querySelectorAll('tr')[1].after(wrapper)

  // チェックボックス設定
  for (let i = 0; i < 100; i += 10) {
    const id = `#schmelzen-marker${i}`

    // チェック状態を復元
    document.querySelector(id).checked = !!localStorage.getItem(id)

    // チェック変更イベント設置
    document.querySelector(id).addEventListener('change', (e) => {
      localStorage.setItem(id, e.target.checked ? 'checked': '')
    })
  }

  // プログレスバー起動
  progress = document.querySelector('#schmelzen-progress')
  let timerId;
  new MutationObserver((mutations) => {
    mutations.forEach(function() {
      clearInterval(timerId)
      progress.value = '00'
      const now = Date.now()
      timerId = setInterval(() => {
        progress.value = new Date((Date.now() - now) % 1000).toISOString().slice(20,22)
      }, 10)
    })
  }).observe(document.querySelectorAll('table img')[15], {attributes: true})
})();