import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

declare var ace : any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  editor: any;
  answer: string;
  problemId: string = '';
  sessionId: string = '';
  submitted: boolean;

  theme_dracula = "ace/theme/dracula";
  theme_eclipse = "ace/theme/eclipse";

  public languages : string[] = ["Java", "C++", "Python"];
  language: string = "Java";
  languageMap = {
    'Java': 'java',
    'C++': 'c_cpp',
    'Python': 'python'
  }

  output: string;

  defaultContent = {
    'Java': `public class Example {
    public static void main(String[] args) {
        // Type your Java code here
    }
}`,
    'C++': `#include <iostream>
    using namespace std;
    int main() {
      // Type your C++ code here
      return 0;
    }`,
    'Python': `class Solution:
   def example():
       # Write your Python code here`
  }

  constructor(@Inject("collaboration") private collaboration,
              private route: ActivatedRoute,
              @Inject('data') private data,
              @Inject('auth') private auth) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.problemId = params['id'];
      this.sessionId = params['sessionId'];
      if (this.sessionId != undefined) {
        this.initEditor();
      } else {
        this.initProblemEditor();
      }
      this.submitted = true;
    });
  }

  initProblemEditor(): void {
    this.editor = ace.edit("editor");
    this.editor.setTheme(this.theme_eclipse);
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;

    document.getElementsByTagName('textarea')[0].focus();
    this.editor.lastAppliedChange = null;

    this.data.restoreSubmittedAnswer();
  }

  initEditor(): void {
    this.editor = ace.edit("editor");
    this.editor.setTheme(this.theme_dracula);
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;

    document.getElementsByTagName('textarea')[0].focus();

    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    this.editor.on('change', (e) => {
      console.log('editor changes ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });

    this.editor.session.getSelection().on("changeCursor", () => {
      let cursor = this.editor.session.getSelection().getCursor();
      console.log('curso moves: ' + JSON.stringify(cursor));
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });

    this.collaboration.restoreBuffer();
  }

  setLanguage(language: string) : void {
    this.language = language;
    this.resetEditor();
  }

  resetEditor(): void {
    this.editor.session.setMode("ace/mode/" + this.languageMap[this.language]);
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = '';
  }

  submit(): void {
    let userCode = this.editor.getValue();
    let data = {
      user_code: userCode,
      lang: this.language.toLowerCase()
    };
    this.data.buildAndRun(data)
              .then(res => {
                this.output = res.text;
                this.answer = this.output;
                // this.submitted = true;
              });


    // if (this.auth.isAuthenticated() && this.problemId !== null) {
    //   let answer = {
    //     data: data,
    //     id: this.problemId,
    //     email: this.auth.getProfile().email
    //   }
    //   this.data.addAnswer(answer);
    // }
  }

  hasSubmitted(): boolean {
    return this.submitted;
  }
}
