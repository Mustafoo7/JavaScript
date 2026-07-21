// let obj = {
//     id: 1,
//     ism:"Abubakr",
//     familya:"Turdaliyev",
//     NimaQilyapti:"Kursda o'yin o'nab o'tiribdi"
// };

// let obj2 = Object.assign({}, obj)
    
// obj2.id = 2;
// obj2.ism = "Olimjon",
// obj2.familya = "Qodirov",
// obj2.NimaQilyapti = "Kursda Dars o'raganiyapti",
// obj2.NimalarniBiladi = "Scratch, Python, HTML,CSS"


// let obj3 =structuredClone(obj)
  

// obj3.id  = 3,
// obj3.ism = "Mustafo",
// obj3.familya = "Saidrahmonov",
// obj3.NimaQilyapti = "Kursda Dars o'raganiyapti",
// obj3.NimalarniBiladi = "Scratch, Python, HTML , CSS"


// console.log(obj);
// console.log(obj2);
// console.log(obj3);




let obj = {
    ism: "Eshmat",
    yosh: 50,
    child: {
      ism: "Toshmat",
      yosh: 25,
    },
  };
  

  let obj2 = structuredClone(obj);
  obj2.ism = "Ali";
  obj2.child.ism = "Vali";
  
  console.log(obj2);
  console.log(obj);

   



  let obj3 = {
    ism: "olim",
    yosh: 11,
    child: {
      ism: "Abubakr",
      yosh: 2,
    },
  };
  

  let obj11 = structuredClone(obj3);
  obj2.ism = "Vali";
  obj2.child.ism = "Ali";
  
  console.log(obj11);
  console.log(obj3);





  let objj = {
    ism: "Mustafo",
    yosh: 50,
    child: {
      ism: "sodiq",
      yosh: 25,
    },
  };
  

  let objh = structuredClone(objj);
  objh.ism = "Azam";
  objh.child.ism = "Ikrom";
  
  console.log(objh);
  console.log(objj);




  let objr = {
    ism: "Tarzan",
    yosh: 50,
    child: {
      ism: "G'inni",
      yosh: 25,
    },
  };
  

  let objk = structuredClone(objr);
  objk.ism = "Binni";
  objk.child.ism = "Jinni";
  
  console.log(objk);
  console.log(objr);


  

  let objt = {
    ism: "G'arzan",
    yosh: 50,
    child: {
      ism: "Dalban",
      yosh: 25,
    },
  };
  

  let objp = structuredClone(objt);
  objp.ism = "Yiban";
  objp.child.ism = "Manqa";
  
  console.log(objp);
  console.log(objt);
  
