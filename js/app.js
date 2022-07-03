
$(function(){
  // 페이지 업데이트(시작페이지 query 갱신)
  location.reload = './?category=dog&age=1';
  
  fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
    .then(function(res){
      return res.json(); // JSON 객체 변환
    })
    .then(function(data){
      // 최종 데이터 출력(object)
      let name = data[0].name;
      let category = data[0].category;

      // 페이지 요청 변수(?query=category) 확인
      const url = location.search;
      // 파라미터 키값 확인
      let params = new URLSearchParams(url).get('category');
      showAnimalList(params, data);
    });

});

// animal 정보 출력(category, data)
function showAnimalList(category, data) {
  let html = '';
  // 해당 동물 category만 출력
  data.forEach(animal => {
    if(category == animal.category)
    html += `
      <div class="col">
        <img src=${animal.imgUrl} alt=${animal.imgUrl}>
        <p class="name">${animal.name}</p>
      </div>  
    `
  })

  $('#contents .row').append(html);

}


