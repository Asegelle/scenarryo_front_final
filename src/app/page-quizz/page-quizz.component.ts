import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../webservices/quizz/quizz.service';

@Component({
  selector: 'app-page-quizz',
  templateUrl: './page-quizz.component.html',
  styleUrls: ['./page-quizz.component.scss']
})
export class PageQuizzComponent implements OnInit {

  numberOfQuestions: number=0;
  questionList: string[] = [];
  responseList: string[] = [];
  indexQuestion: number = 0;
  scoreFinal: number;
  score: number=0;
  numberOfQuestion: number = 0;
  potterAPIList:any;
  accueilQuizz = 0;

  constructor(private http: HttpClient, private quizzWebservice: QuizzService ) {
    
  }

  ngOnInit(): void {
////////////////////////////
///// API PAS DE CLE //////
///////////////////////////
    // let urlHarryAPI = 'https://www.kiwime.com/oqdb/files/1003884477/OpenQuizzDB_003/openquizzdb_3.json';

    // //Gère les problèmes d'accès
    // const headers= new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*');

    // this.http.get<any>(urlHarryAPI, { 'headers': headers }
    // ).subscribe(
    //   (response) => {

    //     this.potterAPIList = response;
    //     console.log(this.potterAPIList + '------------------------------------------------------')
    // });

    // //affichage du Quizz
    // this.quizzWebservice.getQuestion().subscribe(data => {
    //   this.potterAPIList = data;
    //   console.log('data :' + data);
    // });

    this.questionList[0] = "Quelle est le prénom du chat d'Hermione Granger ?";
    this.questionList[1] = "Quelles sont les reliques de la mort ?";
    this.questionList[2] = "Ou se situe l'école du directeur Albus Dumbledore ?";
    this.questionList[3] = "Quel est le sport le plus célèbre du monde des sorciers ?";
    this.questionList[4] = "Quel est le nom des quatres maisons de Poudlard ?";
    this.questionList[5] = "Quel est le nom du deuxieme Tome d'Harry Potter ?";
    this.questionList[6] = "Quel est le nom du premier Horcrux qui est détruit par Harry ?";
    this.questionList[7] = "Qui est le rival d'Harry ?";
    this.questionList[8] = "Comment s'appelle le serpent de Voldemort ?";
    this.questionList[9] = "Quel est le nom complet de Dumbledore ?";

    this.responseList[0] = "Pattenbond";
    this.responseList[1] = "Caramel";
    this.responseList[2] = "Pattengrond";
    this.responseList[3] = "Pattenrond";
    this.responseList[4] = "la baguette de sureau, la pierre philosophale, la cape d'invisibilité";
    this.responseList[5] = "la baguette de sureau, la pierre philosophale, boufftou";
    this.responseList[6] = "la baguette de sureau, la pierre philosophale, le dragon d'or";
    this.responseList[7] = "la baguette de sureau, la pierre philosophale, le journal de Jedusor";
    this.responseList[8] = "Poodlard";
    this.responseList[9] = "Londres";
    this.responseList[10] = "Poudlard";
    this.responseList[11] = "Poudlart";
    this.responseList[12] = "Le basketball";
    this.responseList[13] = "Le quiddich";
    this.responseList[14] = "Le foot";
    this.responseList[15] = "Le lancer de nain";
    this.responseList[16] = "Pouttsouffle, Serdangle, Gryffondore, Serpentard";
    this.responseList[17] = "Pouttsouffle, Serdaigle, Griffondor, Serbatard";
    this.responseList[18] = "Proutsouffle, Serdaigle, Gryffondord, Serpentard";
    this.responseList[19] = "Poufsouffle, Serdaigle, Gryffondor, Serpentard";
    this.responseList[20] = "Harry Potter à l'ecole des sorciers";
    this.responseList[21] = "Harry Pooter et la coupe de feu";
    this.responseList[22] = "Harry Potter et la chambre des secrets";
    this.responseList[23] = "Harry Potter et les reliques de la mort";
    this.responseList[24] = "Le journal de Jédusor";
    this.responseList[25] = "Le pendentif";
    this.responseList[26] = "Le serre tête de Roewna Serdaigle";
    this.responseList[27] = "Le dragon aux yeux rouges";
    this.responseList[28] = "Ron Wheisley";
    this.responseList[29] = "Drago Malefoy";
    this.responseList[30] = "Ginger";
    this.responseList[31] = "Neville Londuba";
    this.responseList[32] = "Boutchou";
    this.responseList[33] = "Naguini";
    this.responseList[34] = "Nagui";
    this.responseList[35] = "Bernard";
    this.responseList[36] = "Albus Perceval Julius Dumbledore";
    this.responseList[37] = "Albus Perceval Julius Syrius Dumbledore";
    this.responseList[38] = "Albus Perceval Julius Alfred Dumbledore";
    this.responseList[39] = "Albus Perceval Wulfric Brian Dumbledore";

  }

  // getInfoQuizz(){
  //   let urlHarryAPI = 'https://www.kiwime.com/oqdb/files/1003884477/OpenQuizzDB_003/openquizzdb_3.json';

  //   this.http.get<any>(urlHarryAPI).subscribe(
  //     (response) => {

  //       this.potterAPIList = response;
  //       console.log(this.potterAPIList + '------------------------------------------------------')
  //     });
  // }

  handleClickResponseQuizz(responseNumber) {

    this.getQuestion(this.indexQuestion);

    this.getResponse(this.indexQuestion);

    //calcul et récupération du score
    this.getScoreValue(responseNumber, this.indexQuestion);

    // for (let i = 0; i < this.questionList.length; i++) {
    //   this.questionList[i];
    // }

    
console.log(this.score)
    // incremente l'index de la question
    this.indexQuestion = this.indexQuestion + 1; 

  }

  getQuestion(indexQuestion){

    //incrementation du numero de question pour l'afficher en html
    this.numberOfQuestion = this.numberOfQuestion + 1;

    if(indexQuestion === 0){
      this.questionList[0] = this.questionList[1];
    } else if(indexQuestion === 1) {
      this.questionList[0] = this.questionList[2];
    } else if(indexQuestion === 2) {
      this.questionList[0] = this.questionList[3];
    } else if(indexQuestion === 3) {
      this.questionList[0] = this.questionList[4];
    } else if(indexQuestion === 4) {
      this.questionList[0] = this.questionList[5];
    } else if(indexQuestion === 5) {
      this.questionList[0] = this.questionList[6];
    } else if(indexQuestion === 6) {
      this.questionList[0] = this.questionList[7];
    } else if(indexQuestion === 7) {
      this.questionList[0] = this.questionList[8];
    } else if(indexQuestion === 8) {
      this.questionList[0] = this.questionList[9];
    } 
    //on termine le programme avec un message de fin 
    else if(indexQuestion === 9) {
      this.questionList[0] = 'Merci d\'avoir participé à notre Quizz';
    } 
  }

  getResponse(indexQuestion){
    if(indexQuestion === 0){
      this.responseList[0] = this.responseList[4];
      this.responseList[1] = this.responseList[5];
      this.responseList[2] = this.responseList[6]; 
      this.responseList[3] = this.responseList[7];
    } else if(indexQuestion === 1){
        this.responseList[0] = this.responseList[8];
        this.responseList[1] = this.responseList[9];
        this.responseList[2] = this.responseList[10]; 
        this.responseList[3] = this.responseList[11];
      } else if(indexQuestion === 2){
          this.responseList[0] = this.responseList[12];
          this.responseList[1] = this.responseList[13];
          this.responseList[2] = this.responseList[14]; 
          this.responseList[3] = this.responseList[15];
        } else if(indexQuestion === 3){
            this.responseList[0] = this.responseList[16];
            this.responseList[1] = this.responseList[17];
            this.responseList[2] = this.responseList[18]; 
            this.responseList[3] = this.responseList[19];
          } else if(indexQuestion === 4){
              this.responseList[0] = this.responseList[20];
              this.responseList[1] = this.responseList[21];
              this.responseList[2] = this.responseList[22]; 
              this.responseList[3] = this.responseList[23];
            } else if(indexQuestion === 5){
                this.responseList[0] = this.responseList[24];
                this.responseList[1] = this.responseList[25];
                this.responseList[2] = this.responseList[26]; 
                this.responseList[3] = this.responseList[27];
              } else if(indexQuestion === 6){
                  this.responseList[0] = this.responseList[28];
                  this.responseList[1] = this.responseList[29];
                  this.responseList[2] = this.responseList[30]; 
                  this.responseList[3] = this.responseList[31];
                } else if(indexQuestion === 7){
                    this.responseList[0] = this.responseList[32];
                    this.responseList[1] = this.responseList[33];
                    this.responseList[2] = this.responseList[34]; 
                    this.responseList[3] = this.responseList[35];
                  } else if(indexQuestion === 8){
                      this.responseList[0] = this.responseList[36];
                      this.responseList[1] = this.responseList[37];
                      this.responseList[2] = this.responseList[38]; 
                      this.responseList[3] = this.responseList[39];
                    } else if(indexQuestion === 9){
                        this.responseList[0] = this.responseList[40];
                        this.responseList[1] = this.responseList[41];
                        this.responseList[2] = this.responseList[42]; 
                        this.responseList[3] = this.responseList[43];
                      }  

  }



  getScoreValue(responseNumber, indexQuestion) {

    if(indexQuestion === 0 && responseNumber === 3) {
      this.score = this.score + 1;
    } else if (indexQuestion === 1 && responseNumber === 0) {
      this.score = this.score + 1;
    } else if (indexQuestion === 2 && responseNumber === 2) {
      this.score = this.score + 1;
    } else if (indexQuestion === 3 && responseNumber === 1) {
      this.score = this.score + 1;
    } else if (indexQuestion === 4 && responseNumber === 3) {
      this.score = this.score + 1;
    } else if (indexQuestion === 5 && responseNumber === 2) {
      this.score = this.score + 1;
    } else if (indexQuestion === 6 && responseNumber === 0) {
      this.score = this.score + 1;
    } else if (indexQuestion === 7 && responseNumber === 1) {
      this.score = this.score + 1;
    } else if (indexQuestion === 8 && responseNumber === 1) {
      this.score = this.score + 1;
    } else if (indexQuestion === 9 && responseNumber === 3) {
      this.score = this.score + 1;
    } 

  }

//initialisation apres click sur REJOUER
  handleClickNextBtn(){
    
    this.numberOfQuestion = 1;
    this.indexQuestion = 0;
    this.score = 0;

    this.ngOnInit();

  }

  handleClickStartQuizz(){
    this.indexQuestion = 0;
    this.numberOfQuestion = 1;
    this.accueilQuizz = 1;

  }

///////////////////////////
////      TODO      //////
///////////////////////////
//faire une liste de questions/reponses tableau 2d, 1 question associé a une list de réponses
//y faire appel aléatoirement


}