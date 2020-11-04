import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.follow++;
    if(this.follow < this.questionsList.length){
      console.log((this.questionsList[this.follow]).ques);
      nextButton.innerText = this.questionsList[this.follow].ques;
      a.innerText  = this.questionsList[this.follow].a;
      b.innerText = this.questionsList[this.follow].b;
      c.innerText = this.questionsList[this.follow].c;
      d.innerText = this.questionsList[this.follow].d;    
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
  }

}
