const fastify = require("fastify")();
const fs = require("fs");

//const { fixedModules } = require("module");

const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
} = require("./p4-module.js");

//Route: /cit/question
//Description: Return all questions
// PART 1 response:
 fastify.get("/cit/question", (request, reply) => {
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,questions:getQuestions()});
});

/*
{
    "error": "",
    "statusCode": 200,
    "questions": [
        "Q1",
        "Q2",
        "Q3"
    ]
}
*/

//Route: /cit/answer
//Description: Return all answers
// PART 2 response:
 fastify.get("/cit/answer", (request, reply) => {
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,answer:getAnswers()});
});


/*
{
    "error": "",
    "statusCode": 200,
    "answers": [
        "A1",
        "A2",
        "A3"
    ]
}
*/

//Route: /cit/questionanswer
//Description: Return all questions and answers
// PART 3 response:
 fastify.get("/cit/questionanswer", (request, reply) => {
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,questions_answers:getQuestionAnswer()})
});
/*
{
    "error": "",
    "statusCode": 200,
    "questions_answers": [
        {
            "question": "Q1",
            "answer": "A1"
        },
        {
            "question": "Q2",
            "answer": "A2"
        },
        {
            "question": "Q3",
            "answer": "A3"
        }
    ]
}
*/

// WORK ON THIS ONE
//Route: /cit/question/:number
//Description: Return a specific question
// PART 4 response:
 fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,question:getQuestion()})
});

/*
{
    "error": "",
    "statusCode": 200,
    "question": "Q1",
    "number": 1
}
*/

// WORK ON THIS ONE
//Route: /cit/answer/:number
//Description: Return a specific answer
// PART 5 response:
 fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,answer:getAnswer()})
});

/*{
    "error": "",
    "statusCode": 200,
    "answer": "A2",
    "number": 2
}
*/

// WORK ON THIS ONE
//Route: /cit/questionanswer/:number
//Description: Return a specific question and answer
// PART 6
 fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
//output
.send({error:"",statusCode:200,questionanswer:getQuestionsAnswers()})
//getQuestion(),answer:getAnswer()})
});

/*
{
    "error": "",
    "statusCode": 200,
    "question": "Q3",
    "answer": "A3",
    "number": 3
}
*/

//Route: *
//Description: Unmatched route handler
// PART 7
 fastify.get("*", (request, reply) => {
    reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    //output
    .send({error:"Route not found",statusCode:404});
});

/* {
    "error": "Route not found",
    "statusCode": 404
}
*/

const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});