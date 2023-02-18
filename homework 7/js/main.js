window.onload = () => {
  const [...liElement] = document.querySelectorAll('li');
  console.log(liElement);

  const [...classActive] = document.querySelectorAll('.active');
  console.log(classActive);

  function arr(i) {
    for (i = 0; i < classActive.length; i++) {
      classActive[i].innerHTML = '<a  href="#">About(Test innerHTML)</a>'
    }
  }
  arr();

  const  element = document.querySelector('ul');
  console.log(element);
  const  perentElement = element.parentNode;
  console.log(perentElement);

 
  const [...classActive2] = document.querySelectorAll('.active')
  console.log(classActive2);

const newSiblingArr = [];

function nextSiblibg() {
    for(const i of classActive2){
      newSiblingArr.push(i.nextElementSibling)
  }
}
nextSiblibg()
  console.log(newSiblingArr);



  function FimlConstructor(year,ganre,name,views) {
    this.year= year;
    this.ganre = ganre;
    this.name = name;
    this.views = views;
  }

  let year = prompt('Введите год фильма','1990')
  let ganre = prompt('Введите жанр фильма', 'Боевик')
  let name = prompt('Введите имя фильма','Халк')
  let views = prompt('Количество просмотров','1000')

  const film = new FimlConstructor('1992', 'Боевик', "Черепашки-ниндзя",'22133' );
  const film2 = new FimlConstructor('1993', 'Боевик','Тор', '1111'  );
  const film3 = new FimlConstructor('1990', 'Боевик','Мстители', '12222');
  const film4 = new FimlConstructor(year,ganre,name,views);
  const FilmArr = [film,film2,film3,film4];
  const [...FilmArr2] = FilmArr

   function SortFilmYears(arr) {
   arr.sort((a,b)=> {
    return a.year - b.year
  } )  
  }
  SortFilmYears(FilmArr)
  console.log(FilmArr)


  function sortFilmVievs(arr) {
    arr.sort((a, b) => {
      return a.views - b.views
    })
  }
  sortFilmVievs(FilmArr2)
  console.log(FilmArr2)


  const arr2 = [document.querySelector('header'), document.querySelector('footer'), document.querySelector('nav')]
  console.log(arr2);

}