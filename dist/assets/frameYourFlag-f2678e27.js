import{s as t}from"./store-00212836.js";import{_ as s,r,o,c as n}from"./index-a0f8b309.js";const l="/assets/s735706548779528181_p21_i19_w640-50afefad.jpeg",m="/assets/s735706548779528181_p21_i32_w4032-0c06fba9.jpeg",c="/assets/s735706548779528181_p21_i29_w1024-7cd7525d.jpeg",d="/assets/s735706548779528181_p21_i16_w4032-1e917119.jpeg",p="/assets/s735706548779528181_p21_i18_w2724-077983c2.jpeg",u="/assets/s735706548779528181_p21_i17_w4032-bd9c7290.jpeg",g={name:"frameYourFlagStore",components:{store:t},data:function(){return{title:"Frame Your Flag",description:"Do you already have the perfect flag that you want framed? This option is perfect for you: simply measure your flag and select the size of the frame you want! Custom framing available for $100 add-on",defaultSize:"40x28",formItems:[{label:"Size",id:"size",options:[{value:"40x28",name:'40" Wide x 28" High'},{value:"44x32",name:'44" Wide x 32" High'},{value:"64x40",name:'64" Wide x 40" High'},{value:"76x52",name:'76" Wide x 52" High'}]},{label:"Frame Style",id:"frameStyle",options:[{value:"BlackSatinMetal",name:"Black Satin Metal"},{value:"WhiteSatinMetal",name:"White Satin Metal"}]},{label:"Custom Framing",id:"customFraming",options:[{value:1,name:"Yes"},{value:0,name:"No"}]}],sizes:[{value:"40x28",price:349,salePrice:175,details:["Black Satin Metal or White Satin Metal Frames","Acid Free Foam Board Backing","Mounting Fabric (Cream Linen)","Crystal Clear Acrylic (Museum Quality)"]},{value:"44x32",price:449,salePrice:225,details:["temp"]},{value:"64x40",price:549,salePrice:275,details:["temp"]},{value:"76x52",price:649,salePrice:325,details:["temp"]}],images:[{src:l,index:0},{src:m,index:1},{src:c,index:2},{src:d,index:3},{src:p,index:4},{src:u,index:5}]}},props:{loadingSize:{type:String,required:!1}}};function f(a,_,e,x,h,S){const i=r("store");return o(),n(i,{type:"FrameYourFlag",images:a.images,title:this.title,description:this.description,sizes:this.sizes,formItems:this.formItems,defaultSize:e.loadingSize?e.loadingSize:this.defaultSize,staticDetails:!0},null,8,["images","title","description","sizes","formItems","defaultSize"])}const z=s(g,[["render",f]]);export{z as default};
