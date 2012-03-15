
var Model=require("no/app/model").Model
var Widget=require("no/app/widget").Widget
var DomApp=require("no/app").DomApp

var Widget1=Widget.def({
  ly:["div",{id:"box"},
      ["div",{id:"header"}],
      ["div",{id:"content"}]],
  _map:{
    text:true,
    cc:true},
  text:{
    set:function(v){
      this._value=v
      this._parent._elt.content.set("html",v)},
    get:function(v){
      this._value=v
      this._parent._elt.content.get("html")}},
  cc:{
    s:{
      _x:0,_y:0,
      set:function(v){
        v.x&&(
          this._x=v.x,
          this._elt.box.set("width",x))
        v.y&&(
          this._y=v.y,
          this._elt.box.set("height",y))
        return v},
      get:function(){
        return {x:this._x,y:this._y}}},
    p:{
      _x:0,_y:0,
      set:function(v){
        v.x&&(
          this._x=v.x,
          this._elt.box.set("left",x))
        v.y&&(
          this._y=v.y,
          this._elt.box.set("top",y))
        return v},
      get:function(){
        return {x:this._x,y:this._y}}}}
})


Widget1.extend({
  on:{
    render:function(){
      AddDragHandler(
        this._elt.box,
        this._elt.header)
      AddResizeHandlers(this._elt.box)}
  }
})










var Widget2=Widget.def({
  ly:["div",{id:"box"},
      ["div",{id:"text"}],
      ["div",
       ["span","pos: "],
       ["span",{id:"pos"}]],
      ["div",
       ["span","size: "],
       ["span",{id:"size"}]]],
  _map:{
    text:true,
    cc:true},
  text:{
    set:function(v){
      this._value=v
      this._parent._elt.text.set("html",v)},
    get:function(v){
      this._value=v
      this._parent._elt.text.get("html")}},
  cc:{
    s:{
      _x:0,_y:0,
      set:function(v){
        v.x&&(this._x=v.x)
        v.y&&(this._y=v.y)
        this._elt.size
          .set("html",
               JSON.stringify({x:this._x,y:this._y}))
        return v},
      get:function(){
        return {x:this._x,y:this._y}}},
    p:{
      _x:0,_y:0,
      set:function(v){
        v.x&&(this._x=v.x)
        v.y&&(this._y=v.y)
        this._elt.pos
          .set("html",
               JSON.stringify({x:this._x,y:this._y}))
        return v},
      get:function(){
        return {x:this._x,y:this._y}}}}  
})


















function smoke(){
  
  var m0=Model0.new({
    text:"some",
    cc:{
      s:{x:200,y:100},
      p:{x:10,y:10}}})

  var w1=Widget1.new()
  var w2=Widget2.new()

  var app=DomApp.new()
  
  app.attach(document.body)

  m0.map(w1)
  m0.map(w2)
  
  app.adopt(w1,w2)
  
}




