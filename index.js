// const express = require('express')

// const PORT = 3000;
// const app = express();

// app.use(express.json({extended: false}));
// app.use(express.static('./views'))

// //config view
// app.set('view engine', 'ejs');
// app.set('views' , './views');



// // const multer = require('multer');

// // const AWS = require('aws-sdk');

// // require('doten v').config(); const path = require('path');






// //routers
// app.get('/' , (req, resp) => {
//     const courses = [
//         {
//             id: 1,
//             name: 'Co So du  lieu',
//             course_type: 'Co So',
//             semester: 'HK1-2020-2021',
//             department: 'K.CNTT'
//         },
//         {
//             id: 2,
//             name: 'Cong nghe phan mem',
//             course_type: 'Co So',
//             semester: 'HK1-2020-2021',
//             department: 'K.CNTT'
//         },
//         {
//             id: 3,
//             name: 'Cong nghe phan mem',
//             course_type: 'Co So nganh',
//             semester: 'HK1-2020-2021',
//             department: 'K.CNTT'
//         },
//         {
//             id: 4,
//             name: 'Cong nghe moi',
//             course_type: 'Chuyen nganh',
//             semester: 'HK1-2020-2021',
//             department: 'K.CNTT'
//         },
//         {
//             id: 5,
//             name: 'Do an mon hoc',
//             course_type: 'Chuyen nganh',
//             semester: 'HK1-2020-2021',
//             department: 'K.CNTT'
//         },
//     ]
//     return resp.render('index', {courses})
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on post $ {PORT}`);
// })