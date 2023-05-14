const Timetable = require('comcigan-parser');
const timetable = new Timetable();
const http = require('http');
var fs = require('fs');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const test = async () => {
  await timetable.init();
  const school = await timetable.search('만덕중학교');
  await timetable.setSchool(school[0].code);

  // 전교 시간표 정보 조회
  const result = await timetable.getTimetable();
  console.log(result[1][1][0]);
  res.end(result[1][1][0]);

  // 각 교시별 수업 시작/종료 시간 정보 조회
  const time = await timetable.getClassTime();
  console.log(time);
};

test();

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const test = async () => {
    await timetable.init();
    const school = await timetable.search('만덕중학교');
    await timetable.setSchool(school[0].code);
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable();
    console.log(result[1][1][0]);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`${JSON.stringify(test().result[1][1][0])}`);
  
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = await timetable.getClassTime();
    console.log(time);
  };
  test();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});