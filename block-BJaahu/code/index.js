let quesmethod = {
    isAnswerCorrect: function(index){
  
      return index === this.correctAnswrIndex;
  
    }
    getCorrectAnswer: function(){
      return this.options[this.correctAnswerIndex];
    }
  
  
  };
  
  function createQuestions(title,options,correctAnswerIndex){
    let question = object.Create(quesmethod)
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
  
    return question;
  }