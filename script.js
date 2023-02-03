function changeColor(){
  var ele1 = document.getElementById('result')
  var sum=0
  var arr=[400,408,416,424,432,440,448,456]
  for (var i=1;i<=8;i++){
    var ele2 = document.getElementById('t'+i)
    var sVal = parseInt(ele2.value);
    sum+=sVal*arr[i-1];
  }
  ele1.textContent=sum+"公尺";
}