'use strict'

const answer = window.prompt('ヘルプを見ますか？')
if (answer == 'yes') {
  window.alert('タップでジャンプ、障害物を避けます。');
}
else if (answer == 'no') {
  window.alert('ゲームを開始します。');
}
else{
  window.alert('yesかnoかでお答えください。');
}