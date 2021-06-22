const Quizedb = [
	{
		id :1,
		question : " Which of the following JavaScript cannot do?",
		option1 : " JavaScript can react to events",
		option2 : " JavaScript can manipulate HTML elements",
		option3 : " JavaScript can be use to validate data",
		option4 : " All of the Above",
		correctAns : "ans4"
	},
	{
        id :2,
		
		question : " Whats so great about XML?",
		option1 : " Easy data exchange",
		option2 : " High speed on network",
		option3 : " Only B.is correct",
		option4 : " Both A & B",
		correctAns : "ans4"
	},
	{
        id :3,
		
		question : " _________ keyword is used to declare variables in javascript.",
		option1 : " Var",
		option2 : " Dim",
		option3 : " String",
		option4 : " None of the above",
		correctAns : "ans1"
	},
	{   id :4,
		
		question : " The attribute used to define a new namespace is.",
		option1 : " XMLNS",
		option2 : " XmlNameSpace",
		option3 : " Xmlns",
		option4 : " XmlNs",
		correctAns : "ans3"
	},
	{    id :5,
		
	    question : " Which of the following options is correct with regard to HTML?",
		option1 : " It is a modelling language",
		option2 : " It is a scripting language",
		option3 : " It is a partial programming language",
		option4 : " It is used to structure documents",
		correctAns : "ans4"
	},
	{
		id :6,
		
		question :  "Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
		option1 : " Associations",
		option2 : " Transitions",
		option3 : " Transistor",
		option4 : " None of the above",
		correctAns : "ans2"
	},
	{
		id :7,
		
		question : ". ____________ is the tainted property of a window object.",
		option1 : " Pathname",
		option2 : " Protocol",
		option3 : " Defaultstatus",
		option4 : " Host",
		correctAns : "ans3"
	},
	{
		id :8,
		
		question :  "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
		option1 : " a wrapper",
		option2 : " a link",
		option3 : " a cursor",
		option4 : " a form",
		correctAns : "ans1"
	},
	{
        id :9,
		
		question : " Identify the most accurate statement about the application of XML:",
		option1 : " XML must be used to produce XML and HTML output",
		option2 : " XML cannot specify or contain presentation information",
		option3 : " XML is used to describe hierarchically organized information",
		option4 : " XML performs the conversion of information between different e-business applications",
		correctAns : "ans3"
	},
	{id :10,
		
		
		question: "Which of the following is NOT a Hotspot tool?",
		option1 : " Orthogonal Hotspot Tool",
		option2 : " Rectangular Hotspot Tool",
		option3 : " Oval Hotspot Tool",
		option4 : " Polygon Hotspot Tool",
		correctAns : "ans1"
	},
];
var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var next = document.querySelector('#next');
var submit=document.querySelector("#submit");
var answers=document.querySelectorAll(".answer");
var strt=document.getElementById("strt");
var home=document.querySelector(".detail");
var quize=document.querySelector(".main-div");
var points=document.querySelector("#score");
var btn=document.querySelector(".btn");
var score =0;
strt.addEventListener("click",start);

function start(event)
{
    //alert("hello");
    home.style.display="none";
    quize.style.display="block";
	quize.style.margine="5%";
};
let questioncount=0;

var loadQuestion = ()=>
{ 
  
    var questionList=Quizedb[questioncount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.option1;
    option2.innerHTML=questionList.option2;
    option3.innerHTML=questionList.option3;
    option4.innerHTML=questionList.option4;
   

}
loadQuestion();


submit.addEventListener("click", submitchek);
 var getanswer=()=>
 {
     var answer;
     answers.forEach((element) => {
        if(element.checked)
        {
            answer=element.id;
        }
    
     });

     return answer;
        
    
 };
function submitchek(e)
{
var chos=getanswer();
   console.log(chos);
if(chos===Quizedb[questioncount].correctAns)
{
    score++;
}
questioncount++;
if(questioncount<10)
{
    loadQuestion();
}
else
{
    quize.style.display="none";
    points.innerHTML="<h3>your score is </h3>"+score ;
     btn.style.display="block";
    points.style.display="block";
}
}

