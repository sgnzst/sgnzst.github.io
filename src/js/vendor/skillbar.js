!function(t){"use strict";var i={o:function(){this.o=null,this.$=null,this.run=function(){return this.o=t.extend({width:this.$.data("width")||80,height:this.$.data("height")||30,textColor:this.$.data("text-color")||"#ffffff",background:this.$.data("background")||"#337ab7"},this.o),this.class(this.$),this.intv(this.$),this}},cb:function(){i.o.call(this),this.class=function(t){t.addClass("sb_progress"),t.html("<div class='sb_bar'><div class='sb_label' style='font-weight:600;'>"+t.text()+"</div></div>"),t.css({position:"relative",width:"100%",backgroundColor:"#dddddd",height:this.o.height+"px"}),t.find(".sb_bar").css({position:"absolute",width:"1%",height:"100%",backgroundColor:this.o.background}),t.find(".sb_label").css({paddingLeft:"5px",lineHeight:this.o.height+"px",color:this.o.textColor})},this.intv=function(t){var i=this,s=t.find(".sb_bar"),h=1,n=setInterval(function(){o()},10),o=function(){h>=i.o.width?clearInterval(n):(h++,s.css("width",h+"%"))}}}};t.fn.simpleSkillbar=function(s){return this.each(function(){var h=new i.cb;h.o=s,h.$=t(this),h.run()})}}($);