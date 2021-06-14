'use strict'

const number = Math.floor(Math.random() * 6);

const answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね。'));
let message;
if (answer == number){
  message = '正解';
}
else if (answer < number){
  message = '数字はもっと大きいです。';
}
else if (answer >number){
  message = '数字はもっと小さいです。';
}
else {
  message = '数字を入力してください。'
}
window.alert(message);
