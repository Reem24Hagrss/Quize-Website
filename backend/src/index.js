require('./db/mongoose')
const User = require('./models/user')
const Test = require('./models/test')
const Question = require('./models/question')
const UserTest = require('./models/usertests')
const TestQuestion = require('./models/testquestuins')

const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello in backend server!</h1>')
})

// show all students
app.get('/getusers',(req,res)=>{
  User.find({}).then((users)=>{
    res.status(200).send(users)
  }).catch((e)=>{
    res.status(500).send(e)
  })
})

// show all tests
app.get('/gettests',(req,res)=>{
  Test.find({}).then((tests)=>{
    res.status(200).send(tests)
  }).catch((e)=>{
    res.status(500).send(e)
  })
})

// show all questions
app.get('/getquestions',(req,res)=>{
  Question.find({}).then((questions)=>{
    res.status(200).send(questions)
  }).catch((e)=>{
    res.status(500).send(e)
  })
})

// show the full quize
app.get('/gettestquestion/:testid',(req,res)=>{
  const testID = req.params.testid
  TestQuestion.findById({testID}).then((questions)=>{
    if(!questions){
      return res.status(404).send(e)
    }
    res.status(200).send(questions)
  }).catch((e)=>{
    res.status(500).send(e)
  })
})

// show tests for the student
app.get('/getuserTests/:userid',(req,res)=>{
  const userID = req.params.userid
  UserTest.findById({userID}).then((test)=>{
    if(!test){
      return res.status(404).send(e)
    }
    res.status(200).send(test)
  }).catch((e)=>{
    res.status(500).send(e)
  })
})

// add new user
app.post('/adduser',(req, res)=>{
  const user = new User(req.body)
  user.save().then(()=>{
      res.status(201).send(user)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// add new test
app.post('/addtest',(req, res)=>{
  const test = new Test(req.body)
  test.save().then(()=>{
      res.status(201).send(test)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// add new question
app.post('/addquestion',(req, res)=>{
  const question = new Question(req.body)
  question.save().then(()=>{
      res.status(201).send(question)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// add question to the test
app.post('/addtestquestion',(req, res)=>{
  const question = new TestQuestion(req.body)
  question.save().then(()=>{
      res.status(201).send(question)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// add new test for user
app.post('/addusertest',(req, res)=>{
  const test = new UserTest(req.body)
  test.save().then(()=>{
      res.status(201).send(test)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// // delete user
// app.delete('/deleteuser/:id',(req,res)=>{
//   const _id = req.params.id
//   User.remove(_id).then(()=>{
//     res.send('user deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })
//   UserTest.remove(userID: _id).then(()=>{
//     res.send('user deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })
// })

// // delete test
// app.delete('/deletetest/:id',(req,res)=>{
//   const _id = req.params.id
//   Test.remove(_id).then(()=>{
//     res.send('Test deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })

//   TestQuestion.remove(testID: _id).then(()=>{
//     res.send('Test deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })
// })

// // delete question
// app.delete('/deletequestion/:id',(req,res)=>{
//   const _id = req.params.id
//   Question.remove(_id).then(()=>{
//     res.send('Question deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })

//   TestQuestion.remove(testID: _id).then(()=>{
//     res.send('Test deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })
// })
// // delete question from test
// app.delete('/deletetestquestion/:id',(req,res)=>{
//   const _id = req.params.id
//   TestQuestion.remove(_id).then(()=>{
//     res.send('Question deleted succesfully')
//   }).catch((error)=>{
//     console.log(error);
//   })
// })

app.listen(port, () => {
  console.log(`Backend server up on port ${port}`)
})