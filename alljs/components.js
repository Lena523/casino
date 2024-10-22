class Component {
  constructor(customClass = '') {
    this.customClass = customClass;
  }

  render() {
    return `<div class="${this.customClass}"></div>`;
  }
}


class Content extends Component {
  render() {
    return `<div style="overflow:visible;" class="content ${this.customClass}" id="content"></div>`;
  }
}

class Chips extends Component{
    render(){
        return `<div class="cash-block not-seen ${this.customClass}> 
        <label class="fishki">Мои фишки</label>
        <input  class="my-cash" id="my-cash" name="my-cash" type="text">
        </div>`;
    }
}

class Roulette extends Component{
  render(){
      const numbers=[ 0, 32, 15, 4, 19, 2, 21, 34, 17, 6, 25, 36, 13, 30, 11, 8, 27, 10, 23, 24, 5, 16, 33, 20, 1, 14, 31, 22, 9,18, 29, 28, 7, 12, 35, 26, 3];
      const innerCircleRadius=135;
      const innerCircleWidth=20;
      let counter=0;
      let cellMoveDown=100;
      let numHeight=0;
       
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width","1150");
      svg.setAttribute("height","630");
      svg.setAttribute('transform','translate(100,100)');
      svg.setAttribute('class','svg');
      document.body.append(svg);
      
      let rect=document.createElementNS(svg.namespaceURI,"rect");
      rect.setAttribute("width","1150");
      rect.setAttribute("height","630");
      rect.setAttribute("fill","#3e8e4d");
      svg.append(rect);
      
      let outerCircle=document.createElementNS(svg.namespaceURI,"circle");
      outerCircle.setAttribute('r','200');
      outerCircle.setAttribute('cx','250');
      outerCircle.setAttribute('cy','350');
      outerCircle.setAttribute('fill','#61533b');
      outerCircle.setAttribute('stroke','#504531');
      outerCircle.setAttribute('stroke-width','10');
      svg.append(outerCircle);
      
      let circle=document.createElementNS(svg.namespaceURI,"circle");
      circle.setAttribute('r','160');
      circle.setAttribute('cx','250');
      circle.setAttribute('cy','350');
      circle.setAttribute('fill','#997b47');
      svg.append(circle);
      
      let innerCircle=document.createElementNS(svg.namespaceURI,"circle");
      innerCircle.setAttribute('r','140');
      innerCircle.setAttribute('cx','250');
      innerCircle.setAttribute('cy','350');
      innerCircle.setAttribute('fill','#eec955');
      innerCircle.setAttribute('stroke','#eec955');
      innerCircle.setAttribute('stroke-width','2');
      svg.append(innerCircle);
      
      for(let i=0;i<numbers.length;i++){
          let slot=document.createElementNS(svg.namespaceURI,"rect");
          slot.setAttribute("width","25");
          slot.setAttribute("height","25");
          if(i==0){
              slot.setAttribute("fill","green");
          }
          else if(i%2!=0){
              slot.setAttribute("fill","red");
          }
          else if(i%2==0){
              slot.setAttribute("fill","black");
          }
          const digitAngle=i*9.73;
          const calcPosition=innerCircleRadius-innerCircleWidth/2;
          let angleEachDigitRadians=digitAngle * Math.PI / 180;
          let x=(calcPosition*Math.sin(angleEachDigitRadians)+innerCircleRadius) +"px";
          let y=(-calcPosition*Math.cos(angleEachDigitRadians)+innerCircleRadius) +"px";
          slot.setAttribute("x",x);
          slot.setAttribute("y",y);
          slot.setAttribute("rx","5");
          slot.setAttribute("ry","5");
          slot.setAttribute("stroke","black");
          slot.setAttribute("stroke-width","2");
          slot.setAttribute('transform','translate(103,203)');
          let number=document.createElementNS(svg.namespaceURI,"text");
        if(i==0){
            number.setAttribute("color","green");
        }
        else if(i%2!=0){
            number.setAttribute("color","red");
            number.setAttribute("divided","even")
        }
        else if(i%2==0){
            number.setAttribute("color","black");
            number.setAttribute("divided","odd");
        }
          number.setAttribute("x",x);
          number.setAttribute("y",y);
          number.setAttribute('font-size','12');
          number.setAttribute('font-weight','bold');
          number.setAttribute('font-family','Old Standard TT');
          number.setAttribute('fill','white');
          number.setAttribute("numValue",`${numbers[i]}`);
          number.textContent=`${numbers[i]}`;
          number.setAttribute("class","number");
          number.setAttribute('transform','translate(110,218)');
          svg.append(slot);
          svg.append(number);   
      }
      
      let centerCircle=document.createElementNS(svg.namespaceURI,"circle");
      centerCircle.setAttribute('r','100');
      centerCircle.setAttribute('cx','250');
      centerCircle.setAttribute('cy','350');
      centerCircle.setAttribute('fill','#c4b997');
      centerCircle.setAttribute('stroke','#afa176');
      centerCircle.setAttribute('stroke-width','10');
      svg.append(centerCircle);
      
      let picture=document.createElementNS(svg.namespaceURI,"image");
      picture.setAttribute("width","130");
      picture.setAttribute("height","130");
      picture.setAttribute("href","images/roulette.png");
      picture.setAttribute('transform','translate(185,285)');
      svg.append(picture);

      let ball=document.createElementNS(svg.namespaceURI,"circle");
      ball.setAttribute("r","10");
      ball.setAttribute("cx","250");
      ball.setAttribute("cy","350");
      ball.setAttribute("fill","white");
      ball.setAttribute("id","ball");
      svg.append(ball);
      
      let table=document.createElementNS(svg.namespaceURI,"rect");
      table.setAttribute("width","180");
      table.setAttribute("height","530");
      table.setAttribute("transform","translate(600,50)");
      svg.append(table);
      
      let nullCell=document.createElementNS(svg.namespaceURI,"rect");
      nullCell.setAttribute("width","180");
      nullCell.setAttribute("height","50");
      nullCell.setAttribute("fill","#3e8e4d");
      nullCell.setAttribute("stroke-width","white");
      nullCell.setAttribute("stroke-width","1");
      nullCell.setAttribute("transform","translate(600,50)");
      nullCell.setAttribute("class","class0");
      nullCell.setAttribute("value","0");
      
      let nullNumber=document.createElementNS(svg.namespaceURI,"text");
      nullNumber.setAttribute("x","680");
      nullNumber.setAttribute("y","85");
      nullNumber.textContent="0";
      nullNumber.setAttribute("font-size","30");
      nullNumber.setAttribute("fill","white");
      nullNumber.setAttribute('font-weight','bold');
      nullNumber.setAttribute('font-family','Old Standard TT');
      nullNumber.setAttribute("value","0");
      svg.append(nullCell);
      svg.append(nullNumber);
      
      
      for(let i=1;i<numbers.length;i++){
          let numberCell=document.createElementNS(svg.namespaceURI,"rect");
          counter++;
          numberCell.setAttribute("width","60");
          numberCell.setAttribute("height","40");
          numberCell.setAttribute("value",i);
          numberCell.setAttribute("class","class"+i);
          if(i%2!=0){
              numberCell.setAttribute("fill","black");
          }
          else{
              numberCell.setAttribute("fill","red");
          }
      
          let numberCellContent=document.createElementNS(svg.namespaceURI,"text");
          if(i%2!=0){
            numberCellContent.setAttribute("color","black");
            numberCellContent.setAttribute("divided","odd");
        }
          else{
            numberCellContent.setAttribute("color","red");
            numberCellContent.setAttribute("divided","even");
        }
          numberCellContent.setAttribute("font-size","20");
          numberCellContent.setAttribute("fill","white");
          numberCellContent.setAttribute("font-weight","bold");
          numberCellContent.setAttribute('font-family','Old Standard TT');
          numberCellContent.setAttribute("value",i);
          numberCellContent.textContent=`${counter}`;
          
          if(counter==1||counter==4||counter==7||counter==10||counter==13||counter==16
              ||counter==19||counter==22||counter==25||counter==28||counter==31||
              counter==34){
              numberCell.setAttribute("transform",`translate(600,${cellMoveDown})`);
              numberCellContent.setAttribute("x","620");
              numHeight=cellMoveDown+25;
              numberCellContent.setAttribute("y",numHeight);
              }
      
          else if(counter==2||counter==5||counter==8||counter==11||counter==14
              ||counter==17||counter==20||counter==23||counter==26||counter==29
              ||counter==32||counter==35){
                  numberCell.setAttribute("transform",`translate(660,${cellMoveDown})`);
                  numberCellContent.setAttribute("x","680");
                  numHeight=cellMoveDown+25;
                  numberCellContent.setAttribute("y",numHeight);
              }
      
          else{
              numberCell.setAttribute("transform",`translate(720,${cellMoveDown})`);
              numberCellContent.setAttribute("x","740");
              numHeight=cellMoveDown+25;
              numberCellContent.setAttribute("y",numHeight);
              cellMoveDown+=40;
          }
      
          numberCell.setAttribute("stroke","white");
          numberCell.setAttribute("stroke-width","1");
          svg.append(numberCell);
          svg.append(numberCellContent);
      }
      
      let odd=document.createElementNS(svg.namespaceURI,"rect");
      odd.setAttribute("width","40");
      odd.setAttribute("height","120");
      odd.setAttribute("transform","translate(558,102)");
      odd.setAttribute("fill","#3e8e4d");
      odd.setAttribute("stroke","white");
      odd.setAttribute("stroke-width","3");
      odd.setAttribute("class","classodd")
      odd.setAttribute("value","odd");
      let oddContext=document.createElementNS(svg.namespaceURI,"text");
      oddContext.setAttribute("transform","translate(570,122) rotate (90)");
      oddContext.textContent="нечетное";
      oddContext.setAttribute("fill","white");
      oddContext.setAttribute("font-size","20");
      oddContext.setAttribute('font-family','Old Standard TT');
      oddContext.setAttribute("value","odd");
      svg.append(odd);
      svg.append(oddContext);
      
      let even=document.createElementNS(svg.namespaceURI,"rect");
      even.setAttribute("width","40");
      even.setAttribute("height","120");
      even.setAttribute("transform","translate(558,222)");
      even.setAttribute("fill","#3e8e4d");
      even.setAttribute("stroke","white");
      even.setAttribute("stroke-width","3");
      even.setAttribute("class","classeven")
      even.setAttribute("value","even");
      let evenContext=document.createElementNS(svg.namespaceURI,"text");
      evenContext.setAttribute("transform","translate(570,252) rotate (90)");
      evenContext.textContent="четное";
      evenContext.setAttribute("fill","white");
      evenContext.setAttribute("font-size","20");
      evenContext.setAttribute('font-family','Old Standard TT');
      evenContext.setAttribute("value","even");
      svg.append(even);
      svg.append(evenContext);
      
      
      let red=document.createElementNS(svg.namespaceURI,"rect");
      red.setAttribute("width","40");
      red.setAttribute("height","120");
      red.setAttribute("transform","translate(558,342)");
      red.setAttribute("fill","red");
      red.setAttribute("stroke","white");
      red.setAttribute("stroke-width","3");
      red.setAttribute("class","classred")
      red.setAttribute("value","red");
      let redContext=document.createElementNS(svg.namespaceURI,"text");
      redContext.setAttribute("transform","translate(570,368) rotate (90)");
      redContext.textContent="красное";
      redContext.setAttribute("fill","white");
      redContext.setAttribute("font-size","20");
      redContext.setAttribute('font-family','Old Standard TT');
      redContext.setAttribute("value","red");
      svg.append(red);
      svg.append(redContext);
      
      
      let black=document.createElementNS(svg.namespaceURI,"rect");
      black.setAttribute("width","40");
      black.setAttribute("height","120");
      black.setAttribute("transform","translate(558,460)");
      black.setAttribute("fill","black");
      black.setAttribute("stroke","white");
      black.setAttribute("stroke-width","3");
      black.setAttribute("class","classblack")
      black.setAttribute("value","black");
      let blackContext=document.createElementNS(svg.namespaceURI,"text");
      blackContext.setAttribute("transform","translate(570,490) rotate (90)");
      blackContext.textContent="черное";
      blackContext.setAttribute("fill","white");
      blackContext.setAttribute("font-size","20");
      blackContext.setAttribute('font-family','Old Standard TT');
      blackContext.setAttribute("value","black");
      svg.append(black);
      svg.append(blackContext);
      
      table.setAttribute("stroke","white");
      table.setAttribute("stroke-width","5");
      
      let arrow=document.createElementNS(svg.namespaceURI,"image");
      arrow.setAttribute("width","55");
      arrow.setAttribute("height","63");
      arrow.setAttribute("href","images/arrow-down.svg");
      arrow.setAttribute('transform','translate(222,138)');
      arrow.setAttribute("id","arrow");
      svg.append(arrow);
      
      let title=document.createElementNS(svg.namespaceURI,"path");
      title.setAttributeNS(null, "d", "M 0 350 Q 50 100 300 100   ");
      title.setAttribute('fill','transperent');
      title.setAttribute('opacity','0');
      title.setAttribute('stroke','red');
      title.setAttribute('id','my-path');
      svg.append(title);
      
      let roulette=document.createElementNS(svg.namespaceURI,"text");
      roulette.setAttribute('font-size','60');
      roulette.setAttribute('x','120');
      roulette.setAttribute('y','450');
      
      let roulettePath=document.createElementNS(svg.namespaceURI,"textPath");
      roulettePath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#my-path");
      roulettePath.setAttribute('font-family','Old Standard TT');
      roulettePath.setAttribute('font-weight','500');
      let ringtext = document.createTextNode("моя рулетка");
      roulettePath.append(ringtext);
      roulette.append(roulettePath);
      svg.append(roulette);
      
      return svg;
}
}

