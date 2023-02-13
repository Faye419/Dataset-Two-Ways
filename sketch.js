function setup() {
  var data = [71, 41, 143, 83, 14, 13, 23];
	var names = ["BORN THIS WAY","A STAR IS BORN","THE FAME","THE FAME MONSTER","CHROMATICA","JOANNE","ARTPOP"]
	var colors = ["#66ccff","#cc99ff",'#ff6699','#ccff99',"#99ff66","black","#ffff66"]

  var width = 650,
      height = 650,
      margin = 100,
      w = width - 2 * margin, 
      h = height -2 * margin;
  
  var barWidth =  (h / data.length) * 0.8; 
  var barMargin = (h / data.length) * 0.3; 
  
  createCanvas(width, height);
  
  textSize(12);
  
  push();
  translate(margin, margin); 
  
  for(var i=0; i<data.length; i++) {
    push();
    fill(colors[i]);
    noStroke();
    translate(0, i* (barWidth + barMargin)); 
    rect(0, 0, data[i], barWidth); 

		
    fill('grey');
    text(names[i], 5, barWidth/2 + 5); 

    pop();
  }
  
  pop();
}
