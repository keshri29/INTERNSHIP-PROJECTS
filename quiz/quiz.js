var quizdata = {
    {
        question: 'which frame work is relate to javascript',
        a; '.net',
        b; 'flask',
        c; 'jango',
        d; 'react',
        correct;'c'
    }

    {
        question: 'HTML stands for',
        a; 'hypertext markup language',
        b; 'hyperlink markup language',
        c; 'hupertext makerup language',
        d; 'hyperlink makerup language',
        correct;'a'
    }

    {
        question: 'CSS stands for',
        a; 'casscading style',
        b; 'casshading stytle',
        c; 'casssing style',
        d; 'cassing state',
        correct;'a'
    }

    {
        question: ' what is computer',
        a; 'hardware',
        b; 'sotware',
        c; 'softcopy',
        d; 'machine',
        correct;'a'
    }
}
 var quiz = document.getElementById9('quiz')
 var answer = document.querySelectorAll('.answer')
 var question = document.getElementById('question')
 var question_a=document.getElementById('a_value')
 var question_b=document.getElementById('b_value')
 var question_c=document.getElementById('c_value')
 var question_d=document.getElementById('d_value')


 var submitbtn = document.getElementById('submit')
var currentQuestion = 0
var quizScore = 0

 loadQuiz()

 function loadQuiz()
 {
   deselect()

    question.innerHTML = quizdata[currentQuestion].question
    Option_a.innerText = quizdata[currentQuestion].a
    Option_b.innerText = quizdata[currentQuestion].b
    Option_c.innerText = quizdata[currentQuestion].c
    Option_d.innerText = quizdata[currentQuestion].d
}
  function deselect()
  {
    answer.forEach(answer=>answer.checked=false)
  }

   submitbtn.addEventListener('clicl' , ()=>{
    var selectedoption;
    answer.forEach(answer =>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1
    }
     currentQuestion=currentQuestion+1
   
     if(currentQuestion==quizdata.length)
     {
     document.getElementById('quizdiv').innerHTML = '<h1> you have answered ${quizscore} correctly out of ${quizdata.length}</h1>'
     }
     else{
        loadQuiz()
     }
   })
