const { data } = require("./p4-data.js");


//Returns an array of strings where each array element is a question.
function getQuestions() {
    const questions = [];
    //const & for loop to iterate 
    for (const qn of data) {
        questions.push(qn.question); 
    }
   /* for (var i = 0; i < array.length; i++){
    }
    */
  return questions;
   // return ['Q1','Q2','Q3'];
  // console.log(getQuestions());
  };
  
  //Returns an array of strings where each array element is an answer
  //same as getquestion data
   function getAnswers() {
       const answers = [];
       for (const ans of data) {
           answers.push(ans.answer);
       }
  return answers;
  }
  
  //Returns a copy of the original data array of objects
  //use map function & ellipsis function ?
  //object const response with empty quotes for an/ques & adds data to object array & returns response, sets it to itself
  function getQuestionsAnswers() {
     //const data = [ "", "" ];
     return data.map((arrayValues) => {
       //ellipses
       return {...arrayValues}
     });
     /* 
     getQuestionsAnswers ('Q1', 'A1',...arr, 'Q3', 'A3' );
     */
    };
  
  //Returns an object with the following properties:
  /* 
  question property (string): The question from the data.
  number property (integer): The question number,  not array index value.
  error message property (string): Any error that occurred while getting the question
  */
 //set an object with defaults & depend, assign data to defaults & return object
 //error message = if statement, checking number 
  function getQuestion(number = "") {
   // const questions = [];
    const qnNumError = {
      question:"",
      answer:"",
      error:"",
    };
if( !Number.isInteger(number)) {
  qnNumError.error = " error: '', question: '', number: '' ";
  console.log(" error: '', question: '', number: '' ");
}
else if(number > 3) {
  qnNumError.error = " error: '', question: 'Q1', number: 1";
  console.log(" error: '', question: 'Q1', number: 1");
}
else if(number <= 0) {
  qnNumError.error = "error: Number must be greater than 0";
  console.log("error: Number must be greater than 0");
}
else{
  index = number -1;
  qnNumError.question = data[index].question;
  qnNumError.number = number;
}
return qnNumError;
  };
  // OUTPUT
  /* {
  question: 'Q1',
  number: 1
  error: '',
} */
  
  //Returns an object with the following properties:
  /* 
  answer property (string): The answer from the data.
  number property (integer): The question number,  not array index value.
  error message property (string): Any error that occurred while getting the question
  */
 //same as above & method
 function getAnswer(number = "") {
  let answerObj = {
    answer:"",
    number:"",
    error:"",
  };
  if ( !Number.isInteger(number)) {
    answerObj.error = "error: '', answer: '', number: '' ";
    console.log("error: '', answer: '', number: '' ");
  }
  else if(number > 3) {
    answerObj.error = "error: '', answer: '', number: '' ";
    console.log("error: '', answer: '', number: '' ");
  }
  else if(number <= 0) {
    answerObj.error = "error: ";
    console.log("error: ");
  }
  else{
    index = number -1;
    answerObj.answer = data[index].answer;
    answerObj.number = number;
  }
  return answerObj;
  }
  

  
  //Returns an object with the following properties:
  /*
  question property (string): The question from the data.
  answer property (string): The answer from the data.
  number property (integer): The question number,  not array index value.
  error message property (string): Any error that occurred while getting the question
  */
  
  function getQuestionAnswer(number = "") {
   const questionAnswerObj = {
     question: "",
     answer: "",
     number: "",
     error: "",
   };
   if( !Number.isInteger(number)) {
     questionAnswerObj.error = "error: '' ";
     console.log("error: '' ");
   }
   else if(number > 3) {
     questionAnswerObj.error = "error: Number must be less than 3";
     console.log("error: Number must be less than 3");
   }
   else if(number <= 0) {
     questionAnswerObj.error = "error: Number must be greater than 0";
     console.log("error: Number must be greater than 0");
   }
   else {
     index = number -1;
     questionAnswerObj.number = number;
     questionAnswerObj.question = data[index].question;
     questionAnswerObj.answer = data[index].answer;
   }
   return questionAnswerObj 
  
  };
  console.log(getQuestionAnswer());
  

   module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  }
  


  /*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }