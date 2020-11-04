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

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.questionsSource).subscribe(data =>{
      console.log(data);
      this.questionsList = data;
    },err => {
      console.log(err);
    })
  }

}
