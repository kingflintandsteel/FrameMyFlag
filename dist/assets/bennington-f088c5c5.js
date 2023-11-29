import{_ as s,s as n,a as o,b as t,r,o as l,c as d}from"./index-7e403f5f.js";import{i as m}from"./WhiteWoodGrain-f76dcabd.js";const c="/assets/s735706548779528181_p23_i9_w1516-3639dd69.jpeg",g="/assets/s735706548779528181_p23_i1_w2538-10dd9e45.jpeg",u="/assets/s735706548779528181_p23_i2_w4896-80b64a4b.jpeg",p={name:"benningtonStore",components:{store:n},data:function(){return{title:"Bennington 1776",description:"A vintage version of the Bennington 1776 American flag associated with the American revolution. All flags are antiqued by hand, which makes them one-of-a-kind originals. Perfect for any home or business.",defaultSize:"Large",formItems:[{label:"Size",id:"size",options:[{value:"Large",name:"Large"},{value:"SuperJumbo",name:"Super Jumbo"}]},{label:"Frame Style",id:"frameStyle",options:[{value:"BlackSatinWood",name:"Black Satin Wood",disabledSizes:["SuperJumbo"]},{value:"BlackSatinMetal",name:"Black Satin Metal",forcedSizes:["SuperJumbo"]},{value:"RusticWoodGrain",name:"Rustic Wood Grain",disabledSizes:["SuperJumbo"]},{value:"White Wood Grain",name:"White Wood Grain",disabledSizes:["SuperJumbo"]}]}],sizes:[{value:"Large",price:599,salePrice:null,details:["All Flags Are Hand Crafted - Made to Order - No Inventories","25 to 40 Business Days to Create, Frame, and Ship",'Flags Unframed are 36" x 24"','Flags Framed are 42" x 32"',"100% Cotton Flags","Flags Mounted on 100% Cotton Linen","Black Satin Wood, White Satin Wood, and Rustic Wood Frames","Crystal Clear Acrylic Covering (No Glass)","Acid Free Foam Core Backing","Comes Framed and Ready to Hang"]},{value:"SuperJumbo",price:1399,salePrice:null,details:["All Flags Are Hand Crafted - Made to Order - No Inventories","25 to 40 Business Days to Create, Frame, and Ship",'Flags Unframed are 60" x 36"','Flags Framed are 65" x 40"',"100% Cotton Flags","Flags Mounted on 100% Cotton Linen","Black Satin Metal Frames","Crystal Clear Acrylic Covering (No Glass)","Acid Free Foam core Backing","Comes Framed and Ready to Hang"]}],images:[{src:c,index:0},{src:g,index:1},{src:u,index:2},{src:o,index:3},{src:m,index:4},{src:t,index:5}]}},props:{loadingSize:{type:String,required:!1}}};function S(a,f,e,F,b,h){const i=r("store");return l(),d(i,{type:"Bennington",images:a.images,title:this.title,description:this.description,sizes:this.sizes,formItems:this.formItems,defaultSize:e.loadingSize?e.loadingSize:this.defaultSize},null,8,["images","title","description","sizes","formItems","defaultSize"])}const z=s(p,[["render",S]]);export{z as default};
