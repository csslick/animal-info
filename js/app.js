

fetch('https://raw.githubusercontent.com/csslick/animal-info/master/animal.json')
  .then(function(res){
    return res.json(); // JSON 객체 변환
  })
  .then(function(data){
    // 최종 데이터 출력(object)
    console.log(data);
    let name = data[0].name;
    let category = data[0].category;
    console.log(`name = ${name}`);
    console.log(`category = ${category}`);

});