var canvas=document.getElementById("canva");
var ctx=canvas.getContext("2d");
var anchrov=100;
var altrov=90;
var xrov=10;
var yrov=10;
var rob="rover.png";
var rob1="rover1.png";
var rob2="rover2.png";
var rob3="rover3.png";
var backprond="mars.jpg";
function load(){
     backimage=new Image();
    backimage.onload=cargarfondo;
    backimage.src=backprond;
     rovimage=new Image();
    rovimage.onload=cargarrov;
    rovimage.src=rob;
    rovimage1=new Image();
    rovimage1.onload=cargarrov1;
    rovimage1.src=rob1;
    rovimage2=new Image();
    rovimage2.onload=cargarrov2;
    rovimage2.src=rob2;
    rovimage3=new Image();
    rovimage3.onload=cargarrov3;
    rovimage3.src=rob3;
}
function cargarfondo(){
    ctx.drawImage(backimage,0,0,canvas.width,canvas.height);
}
function cargarrov(){
    ctx.drawImage(rovimage,xrov,yrov,anchrov,altrov);
}
function cargarrov1(){
    ctx.drawImage(rovimage1,xrov,yrov,anchrov,altrov);
}
function cargarrov2(){
    ctx.drawImage(rovimage2,xrov,yrov,anchrov,altrov);
}
function cargarrov3(){
    ctx.drawImage(rovimage3,xrov,yrov,anchrov,altrov);
}
window.addEventListener("keydown",move);
function rovdown(){

    if(yrov<510){
        yrov=yrov+6;
        cargarfondo();
        cargarrov1();
    }
}
function rovup(){

    if(yrov>0){
        yrov=yrov-6;
        cargarfondo();
        cargarrov3();
    }
}
function rovleft(){

    if(xrov>0){
        xrov=xrov-6;
        cargarfondo();
        cargarrov2();
    }
}
function rovright(){

    if(xrov<700){
        xrov=xrov+6;
        cargarfondo();
        cargarrov();
    }
}
function move(e){
     ASCII=e.keyCode;
    if(ASCII=="37"){
        rovleft();
        console.log("te estás moviendo a la izquierda")
    }
    if(ASCII=="38"){
        rovup();
    }
    if(ASCII=="39"){
        rovright();
    }
    if(ASCII=="40"){
        rovdown();
    }
}