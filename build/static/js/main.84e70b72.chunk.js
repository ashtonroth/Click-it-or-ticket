(this["webpackJsonpclick-it-or-ticket"]=this["webpackJsonpclick-it-or-ticket"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),i=t(2),n=t.n(i),s=t(3),l=t(4),o=t(6),m=t(5),d=t(7),u=function(e){return console.log("hello",e),c.a.createElement("div",{className:"actorCard",onClick:function(){return e.setClicked(e.id)}},c.a.createElement("img",{className:"img",alt:e.name,src:e.image}))},g=function(e){return c.a.createElement("div",{className:"container-fluid scoreboard"},c.a.createElement("div",{className:"row scoring"},c.a.createElement("div",{className:"anneWrapper col-3"},c.a.createElement("div",{className:"anneTitle row"},"Lives Left"),c.a.createElement("div",{className:"anne row"},e.hearts)),c.a.createElement("div",{className:"anneTitle col-6"},c.a.createElement("h1",{className:"gameTitleMain"},"Anne Hathaway Memory Game"),c.a.createElement("h3",{className:"rules"},"Can you remember all of Anne's costars without clicking the same one twice?")),c.a.createElement("div",{className:"col-3 scores"},c.a.createElement("div",{className:"currentScore score row"}," Current Score: ",e.currentScore," "),c.a.createElement("div",{className:"topScore score row"},"Top Score: ",e.topScore))),c.a.createElement("div",{className:"row message"},c.a.createElement("h3",{className:"messageText"},e.message)))},p=0,h=0,v=3,k="Click on any Actor to start",f=[{id:1,name:"Mia Thermopolis",image:"./images/Miatherm.jpeg",clicked:!1},{id:2,name:"Catwoman",image:"./images/download.jpeg",clicked:!1},{id:3,name:"Andrea Sachs",image:"./images/andreasachs.jpeg",clicked:!1},{id:4,name:"Jules",image:"./images/Jules.jpeg",clicked:!1},{id:5,name:"Meryl Streep",image:"./images/merylstreep.jpeg",clicked:!1},{id:6,name:"Julie Andrews",image:"./images/Julieandrews.jpeg",clicked:!1},{id:7,name:"Heather Matarazzo",image:"./images/heatherm.jpeg",clicked:!1},{id:8,name:"Erik Von Detten",image:"./images/erikvd.jpeg",clicked:!1},{id:9,name:"Fat Louie",image:"./images/fatlouie.jpeg",clicked:!1},{id:10,name:"Adrien Grenier",image:"./images/adrieng.jpeg",clicked:!1}],S=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={Actors:f,topScore:p,currentScore:h,message:k,lives:v},t.componentDidMount=function(){f.sort((function(e,a){return.5-Math.random()})),t.setState({Actors:f})},t.setClicked=function(e){var a=t.state.Actors,r=a.filter((function(a){return a.id===e}));if(r[0].clicked){if(h=0,v<=1){k="Game Over! Click an Actor to play again",p=0,v=3,t.setState({topScore:p});for(var c=0;c<a.length;c++)a[c].clicked=!1}else{v--,k="Oops, your knowledge base has failed.";for(var i=0;i<a.length;i++)a[i].clicked=!1}t.setState({lives:v}),t.renderlives(),t.setState({message:k}),t.setState({currentScore:h}),t.setState({Actors:a})}else{if(r[0].clicked=!0,44===h){k="Wow! Maybe stop watching so much film...",h=0,p=0,v=3,t.setState({topScore:p});for(var n=0;n<a.length;n++)a[n].clicked=!1}else k="Making Progress!",(h+=4)>p&&(p=h,t.setState({topScore:p}));a.sort((function(e,a){return.5-Math.random()})),t.setState({Actors:a}),t.setState({currentScore:h}),t.setState({message:k})}},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"renderlives",value:function(){for(var e=[],a=0;a<this.state.lives;a++)e.push(c.a.createElement("div",{key:a,className:"lives"}));return c.a.createElement("div",null,e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{clasName:"container-fluid"},c.a.createElement(g,{lives:this.renderlives(),currentScore:this.state.currentScore,topScore:this.state.topScore,message:this.state.message}),c.a.createElement("div",{className:"row Wrapper"},this.state.Actors.map((function(a){return c.a.createElement(u,{setClicked:e.setClicked,id:a.id,key:a.id,image:a.image,name:a.name,className:"col-sm-1"})}))))}}]),a}(r.Component);var E=function(){return c.a.createElement(S,null)};n.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.84e70b72.chunk.js.map