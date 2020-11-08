import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public questionsSource = 'assets/quiz.json';

  public questionsList;

  public follow:number = 0;

  private solutions = new Map();

  public result:string = "";

  public question = {
    "id":undefined,
    "ques":"",
    "a":"",
    "b":"",
    "c":"",
    "d":""
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.questionsSource).subscribe(data =>{
      console.log(data);
      this.questionsList = data;
    },err => {
      console.log(err);
    })
  }

  nextQuestion(nextButton,a,b,c,d){
    console.log(this.solutions);
    console.log("follow value is "+this.follow);
    this.follow++;
    if(this.follow < this.questionsList.length){
      console.log((this.questionsList[this.follow]).ques);
      nextButton.innerText = " Q. "+this.questionsList[this.follow].ques;
      a.innerText  = " A. "+this.questionsList[this.follow].a;
      b.innerText = " B. "+this.questionsList[this.follow].b;
      c.innerText = " C. "+this.questionsList[this.follow].c;
      d.innerText = " D. "+this.questionsList[this.follow].d;    
      console.log(nextButton);

    }else{
      this.follow = 0;
    }
  }

  prevQuestion(prevButton){
    console.log(prevButton);
  }

  radioChangeHandler(radioButton){
    console.log(radioButton.target.value);
    this.solutions.set(this.questionsList[this.follow].id,radioButton.target.value);
  }

  startQuiz(startButton,a,b,c,d){

      startButton.innerText = " Q. "+this.questionsList[this.follow].ques;
      a.innerText  = " A. "+this.questionsList[this.follow].a;
      b.innerText = " B. "+this.questionsList[this.follow].b;
      c.innerText = " C. "+this.questionsList[this.follow].c;
      d.innerText = " D. "+this.questionsList[this.follow].d;
  
    }

  submitAction(){

    let  answerSource = 'assets/answers.json';
    let answerList;
    let result :number = 0;
    this.httpClient.get(answerSource).subscribe(data =>{
      console.log(data);
      console.log(this.solutions);
      answerList = data;
    },err => {
      console.log(err);
    })
 
    for(var val of this.solutions ){
      console.log(val.keys);
     this.result = "Result " + "2/3";
    }
  }

  reviewAction(){

  }

}
