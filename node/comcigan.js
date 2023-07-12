const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

const Timetable = require('comcigan-parser');
const timetable = new Timetable();

// const test = async () => {
//   await timetable.init({ cache: 1000 * 60 * 60 });
//   const school = await timetable.search('만덕중학교');
//   await timetable.setSchool(school[0].code);
//   console.log(school[0].code);
  
  const schoolFinder = (schoolName, region) => (schoolList) => {
    const targetSchool = schoolList.find((school) => {
      return school.region === region && school.name.includes(schoolName);
    });
    return targetSchool;
  };

  timetable
    .init({ cache: 1000 * 60 * 60 }) // 캐시 1시간동안 보관
    .then(() => timetable.search('만덕중학교'))
    .then(schoolFinder('만덕중학교', '만덕'))
    .then((school) => timetable.setSchool(59955))
    .then(() => {
      Promise.all([timetable.getTimetable()]).then((result) => {
        console.log(result); // 수업시간정보
        // const resjson = JSON.stringify(result[1]);
        // fs.writeFileSync('schedule.json', '');
        // fs.writeFileSync('schedule.json', resjson);
        
        // result[학년][반][요일][교시]
        for (var i = 0; i < 8; i++) {
          if (result[0][1][1][0][i].subject !== '')
            console.log(result[0][1][1][0][i]);
        }

        app.get('/time', function(req, res) {
          // res.send(JSON.stringify(result[0][1][1][0]));
          // JSON.stringify(result, null, 2);
          // for (var i = 0; i < 8; i++) {
          //   if (result[0][1][1][0][i].subject !== '')
          //     res.send(result[0][1][1][0][i]);
          // }
          res.send(result);
        });
      });
      Promise.all([timetable.getClassTime()]).then((result) => {
        app.get('/schedule', function(req, res) {
          res.send(result);
        });
      });
    });

  // 전교 시간표 정보 조회
  // const result = await timetable.getTimetable();
  // console.log(result);
  // const resjson = JSON.stringify(result);
  // fs.writeFileSync('schedule.json', '');
  // fs.writeFileSync('schedule.json', resjson);
// };

// test();


app.get('/main', function(req, res) {
  res.send('main');
});

// await timetable.init();
// const school = await timetable.search('만덕중학교');
// timetable.setSchool(school.code);
// const result = await timetable.getTimetable();
// const time = await timetable.getClassTime();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
