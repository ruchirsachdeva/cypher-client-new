!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var s=0;s<e.length;s++){var c=e[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function s(t,s,c){return s&&e(t.prototype,s),c&&e(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{flCG:function(e,c,o){"use strict";o.r(c),o.d(c,"HomeTwoModule",function(){return mt});var a=o("ofXK"),i=o("sYmb"),n=o("NntI"),r=o("tyNb"),l=o("LRne"),b=o("2Vo4"),u=o("PqYM"),p=o("pLZG"),d=o("vkgz"),g=o("eIep"),h=o("5+tZ"),f=o("fXoL"),_=o("+mav"),k=o("T+lh"),m=o("XcHx"),v=o("ES/e"),y=o("Wbe3"),E=o("yAsh");function P(t,e){if(1&t&&(f.Qb(0,"div",3),f.Qb(1,"div",6),f.Qb(2,"div",7),f.Ec(3),f.Lb(4,"app-decor",8),f.Pb(),f.Pb(),f.Pb()),2&t){var s=f.ac();f.xb(3),f.Gc(" ",s.blockTitle," ")}}function T(t,e){if(1&t&&(f.Qb(0,"li"),f.Qb(1,"a",17),f.Ec(2),f.Pb(),f.Pb()),2&t){var s=e.$implicit,c=f.ac(2);f.xb(1),f.hc("routerLink",c.url.category(s)),f.xb(1),f.Fc(s.name)}}function L(t,e){if(1&t&&(f.Qb(0,"div",9),f.Qb(1,"div",10),f.Qb(2,"div",11),f.Qb(3,"div",12),f.Qb(4,"a",13),f.Lb(5,"img",14),f.Pb(),f.Pb(),f.Qb(6,"div",15),f.Qb(7,"div",16),f.Qb(8,"a",17),f.Ec(9),f.Pb(),f.Pb(),f.Qb(10,"ul",18),f.Cc(11,T,3,2,"li",19),f.Pb(),f.Qb(12,"div",20),f.Qb(13,"a",21),f.Ec(14),f.bc(15,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&t){var s=e.$implicit,c=f.ac();f.xb(4),f.hc("routerLink",c.url.category(s)),f.xb(1),f.hc("src",s.image,f.wc),f.xb(3),f.hc("routerLink",c.url.category(s)),f.xb(1),f.Fc(s.name),f.xb(2),f.hc("ngForOf",c.children[s.slug]),f.xb(2),f.hc("routerLink",c.url.category(s)),f.xb(1),f.Gc(" ",f.cc(15,7,"LINK_SHOP_ALL")," ")}}var O,Q,x,F=((O=function(){function e(s){t(this,e),this.url=s,this.categories=[],this.classBlock=!0,this.classBlockCategories=!0}return s(e,[{key:"ngOnChanges",value:function(t){var e=this;t.categories&&(this.children={},this.categories.forEach(function(t){e.children[t.slug]=t.children.slice(0,5)}))}}]),e}()).\u0275fac=function(t){return new(t||O)(f.Kb(y.a))},O.\u0275cmp=f.Eb({type:O,selectors:[["app-block-categories"]],hostVars:4,hostBindings:function(t,e){2&t&&f.Cb("block",e.classBlock)("block-categories",e.classBlockCategories)},inputs:{blockTitle:"blockTitle",categories:"categories"},features:[f.vb],decls:6,vars:2,consts:[["class","container",4,"ngIf"],[1,"block-categories__body"],["type","bottom",1,"block-categories__body-decor"],[1,"container"],[1,"block-categories__list"],["class","block-categories__item category-card category-card--layout--classic",4,"ngFor","ngForOf"],[1,"block-categories__header"],[1,"block-categories__title"],["type","center",1,"block-categories__title-decor"],[1,"block-categories__item","category-card","category-card--layout--classic"],[1,"category-card__body"],[1,"category-card__content"],[1,"category-card__image","image","image--type--category"],[1,"image__body",3,"routerLink"],["alt","",1,"image__tag",3,"src"],[1,"category-card__info"],[1,"category-card__name"],[3,"routerLink"],[1,"category-card__children"],[4,"ngFor","ngForOf"],[1,"category-card__actions"],[1,"category-card__link",3,"routerLink"]],template:function(t,e){1&t&&(f.Cc(0,P,5,1,"div",0),f.Qb(1,"div",1),f.Lb(2,"app-decor",2),f.Qb(3,"div",3),f.Qb(4,"div",4),f.Cc(5,L,16,9,"div",5),f.Pb(),f.Pb(),f.Pb()),2&t&&(f.hc("ngIf",e.blockTitle),f.xb(5),f.hc("ngForOf",e.categories))},directives:[a.l,E.a,a.k,r.h],pipes:[i.d],encapsulation:2}),O),C=o("EmqW"),w=((Q=function e(){t(this,e),this.classBlock=!0,this.classBlockBanners=!0}).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=f.Eb({type:Q,selectors:[["app-block-banners"]],hostVars:4,hostBindings:function(t,e){2&t&&f.Cb("block",e.classBlock)("block-banners",e.classBlockBanners)},decls:28,vars:18,consts:[[1,"container"],[1,"block-banners__list"],["routerLink","/",1,"block-banners__item","block-banners__item--style--one"],[1,"block-banners__item-image"],["src","assets/images/banners/banner1.jpg","alt","",1,"reflect-rtl"],[1,"block-banners__item-image","block-banners__item-image--blur"],[1,"block-banners__item-title"],[1,"block-banners__item-details",3,"innerHTML"],[1,"block-banners__item-button","btn","btn-primary","btn-sm"],["routerLink","/",1,"block-banners__item","block-banners__item--style--two"],["src","assets/images/banners/banner2.jpg","alt","",1,"reflect-rtl"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"div",1),f.Qb(2,"a",2),f.Qb(3,"span",3),f.Lb(4,"img",4),f.Pb(),f.Qb(5,"span",5),f.Lb(6,"img",4),f.Pb(),f.Qb(7,"span",6),f.Ec(8),f.bc(9,"translate"),f.Pb(),f.Lb(10,"span",7),f.bc(11,"translate"),f.Qb(12,"span",8),f.Ec(13),f.bc(14,"translate"),f.Pb(),f.Pb(),f.Qb(15,"a",9),f.Qb(16,"span",3),f.Lb(17,"img",10),f.Pb(),f.Qb(18,"span",5),f.Lb(19,"img",10),f.Pb(),f.Qb(20,"span",6),f.Ec(21),f.bc(22,"translate"),f.Pb(),f.Lb(23,"span",7),f.bc(24,"translate"),f.Qb(25,"span",8),f.Ec(26),f.bc(27,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&t&&(f.xb(8),f.Fc(f.cc(9,6,"TEXT_BANNER_ONE_TITLE")),f.xb(2),f.hc("innerHTML",f.cc(11,8,"TEXT_BANNER_ONE_SUBTITLE"),f.vc),f.xb(3),f.Fc(f.cc(14,10,"TEXT_BANNER_ONE_BUTTON")),f.xb(8),f.Fc(f.cc(22,12,"TEXT_BANNER_TWO_TITLE")),f.xb(2),f.hc("innerHTML",f.cc(24,14,"TEXT_BANNER_TWO_SUBTITLE"),f.vc),f.xb(3),f.Fc(f.cc(27,16,"TEXT_BANNER_TWO_BUTTON")))},directives:[r.h],pipes:[i.d],encapsulation:2}),Q),B=o("1G5W"),S=o("XNiG"),I=o("bhfF"),A=o("YfDW"),R=o("lJxs"),$=((x=function(){function e(s){t(this,e),this.platformId=s,this.destroy$=new S.a,this.reset$=new S.a,this.leftDays=0,this.leftHours=0,this.leftMinutes=0,this.leftSeconds=0,this.time=0,this.classTimer=!0}return s(e,[{key:"ngOnInit",value:function(){var t=this;this.reset$.pipe(Object(g.a)(function(){return Object(a.u)(t.platformId)?Object(u.a)(0,1e3):Object(l.a)(0)}),Object(B.a)(this.destroy$),Object(R.a)(function(e){return t.time-e}),Object(p.a)(function(t){return t>=0})).subscribe(function(e){t.leftDays=Math.floor(e/86400),t.leftHours=Math.floor((e-86400*t.leftDays)/3600),t.leftMinutes=Math.floor((e-86400*t.leftDays-3600*t.leftHours)/60),t.leftSeconds=e-86400*t.leftDays-3600*t.leftHours-60*t.leftMinutes}),this.reset$.next()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"format",value:function(t){return("0"+t).substr(-2)}},{key:"reset",value:function(){this.reset$.next()}}]),e}()).\u0275fac=function(t){return new(t||x)(f.Kb(f.B))},x.\u0275cmp=f.Eb({type:x,selectors:[["app-timer"]],hostVars:2,hostBindings:function(t,e){2&t&&f.Cb("timer",e.classTimer)},inputs:{time:"time"},exportAs:["timer"],decls:27,vars:16,consts:[[1,"timer__part"],[1,"timer__part-value","timer__part-value--days"],[1,"timer__part-label"],[1,"timer__dots"],[1,"timer__part-value","timer__part-value--hours"],[1,"timer__part-value","timer__part-value--minutes"],[1,"timer__part-value","timer__part-value--seconds"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"div",1),f.Ec(2),f.Pb(),f.Qb(3,"div",2),f.Ec(4),f.bc(5,"translate"),f.Pb(),f.Pb(),f.Lb(6,"div",3),f.Qb(7,"div",0),f.Qb(8,"div",4),f.Ec(9),f.Pb(),f.Qb(10,"div",2),f.Ec(11),f.bc(12,"translate"),f.Pb(),f.Pb(),f.Lb(13,"div",3),f.Qb(14,"div",0),f.Qb(15,"div",5),f.Ec(16),f.Pb(),f.Qb(17,"div",2),f.Ec(18),f.bc(19,"translate"),f.Pb(),f.Pb(),f.Lb(20,"div",3),f.Qb(21,"div",0),f.Qb(22,"div",6),f.Ec(23),f.Pb(),f.Qb(24,"div",2),f.Ec(25),f.bc(26,"translate"),f.Pb(),f.Pb()),2&t&&(f.xb(2),f.Fc(e.format(e.leftDays)),f.xb(2),f.Fc(f.cc(5,8,"TEXT_TIMER_DAYS")),f.xb(5),f.Fc(e.format(e.leftHours)),f.xb(2),f.Fc(f.cc(12,10,"TEXT_TIMER_HOURS")),f.xb(5),f.Fc(e.format(e.leftMinutes)),f.xb(2),f.Fc(f.cc(19,12,"TEXT_TIMER_MINUTES")),f.xb(5),f.Fc(e.format(e.leftSeconds)),f.xb(2),f.Fc(f.cc(26,14,"TEXT_TIMER_SECONDS")))},pipes:[i.d],encapsulation:2}),x),j=o("Qocv"),H=o("p+cq"),N=o("1W7l"),D=function(){return["features","list-buttons"]};function U(t,e){if(1&t&&(f.Qb(0,"div",22),f.Lb(1,"app-product-card",23),f.Pb()),2&t){var s=f.ac().$implicit;f.xb(1),f.hc("product",s)("exclude",f.kc(2,D))}}function X(t,e){1&t&&f.Cc(0,U,2,3,"ng-template",21)}function M(t,e){if(1&t&&(f.Qb(0,"div",18),f.Qb(1,"owl-carousel-o",19),f.Cc(2,X,1,0,void 0,20),f.Pb(),f.Pb()),2&t){var s=f.ac();f.xb(1),f.hc("options",s.carouselOptions),f.xb(1),f.hc("ngForOf",s.products)}}var G,W=((G=function(){function e(s,c){t(this,e),this.language=s,this.cd=c,this.destroy$=new S.a,this.showCarousel=!0,this.loading=!1,this.products=[],this.classBlock=!0,this.classBlockSale=!0}return s(e,[{key:"ngOnChanges",value:function(t){var e=this;t.products&&setTimeout(function(){e.initOptions(),e.showCarousel=!1,e.cd.detectChanges(),e.showCarousel=!0},0)}},{key:"ngOnInit",value:function(){var t=this;this.initOptions(),this.language.directionChange$.pipe(Object(g.a)(function(){return Object(u.a)(250)}),Object(B.a)(this.destroy$)).subscribe(function(){t.initOptions(),t.showCarousel=!1,t.cd.detectChanges(),t.showCarousel=!0})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"initOptions",value:function(){this.carouselOptions={items:5,dots:!1,margin:24,loop:!0,rtl:this.language.isRTL(),responsive:{1350:{items:5,margin:24},1110:{items:4,margin:24},930:{items:4,margin:16},690:{items:3,margin:16},410:{items:2,margin:16},0:{items:1}}}}},{key:"classBlockSaleLoading",get:function(){return this.loading}}]),e}()).\u0275fac=function(t){return new(t||G)(f.Kb(A.a),f.Kb(f.h))},G.\u0275cmp=f.Eb({type:G,selectors:[["app-block-sale"]],viewQuery:function(t,e){var s;1&t&&f.Jc(I.a,!0),2&t&&f.qc(s=f.Yb())&&(e.carousel=s.first)},hostVars:6,hostBindings:function(t,e){2&t&&f.Cb("block",e.classBlock)("block-sale",e.classBlockSale)("block-sale--loading",e.classBlockSaleLoading)},inputs:{loading:"loading",products:"products"},features:[f.vb],decls:24,vars:11,consts:[[1,"block-sale__content"],[1,"block-sale__header"],[1,"block-sale__title"],[1,"block-sale__subtitle"],[1,"block-sale__timer"],[3,"time"],[1,"block-sale__controls"],["direction","prev",1,"block-sale__arrow","block-sale__arrow--prev",3,"click"],[1,"block-sale__link"],["routerLink","/"],["direction","next",1,"block-sale__arrow","block-sale__arrow--next",3,"click"],["type","center",1,"block-sale__header-decor"],[1,"block-sale__body"],["type","bottom",1,"block-sale__body-decor"],[1,"block-sale__image",2,"background-image","url(assets/images/sale.jpg)"],[1,"block-sale__loader"],[1,"container"],["class","block-sale__carousel",4,"ngIf"],[1,"block-sale__carousel"],["appOwlPreventClick","",3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"block-sale__item"],[3,"product","exclude"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"div",1),f.Qb(2,"div",2),f.Ec(3),f.bc(4,"translate"),f.Pb(),f.Qb(5,"div",3),f.Ec(6),f.bc(7,"translate"),f.Pb(),f.Qb(8,"div",4),f.Lb(9,"app-timer",5),f.Pb(),f.Qb(10,"div",6),f.Qb(11,"app-arrow",7),f.Xb("click",function(){return e.carousel.prev()}),f.Pb(),f.Qb(12,"div",8),f.Qb(13,"a",9),f.Ec(14),f.bc(15,"translate"),f.Pb(),f.Pb(),f.Qb(16,"app-arrow",10),f.Xb("click",function(){return e.carousel.next()}),f.Pb(),f.Lb(17,"app-decor",11),f.Pb(),f.Pb(),f.Qb(18,"div",12),f.Lb(19,"app-decor",13),f.Lb(20,"div",14),f.Lb(21,"div",15),f.Qb(22,"div",16),f.Cc(23,M,3,2,"div",17),f.Pb(),f.Pb(),f.Pb()),2&t&&(f.xb(3),f.Fc(f.cc(4,5,"HEADER_DEAL_ZONE_TITLE")),f.xb(3),f.Fc(f.cc(7,7,"HEADER_DEAL_ZONE_SUBTITLE")),f.xb(3),f.hc("time",259200),f.xb(5),f.Fc(f.cc(15,9,"LINK_VIEW_ALL_AVAILABLE_OFFERS")),f.xb(9),f.hc("ngIf",e.showCarousel))},directives:[$,j.a,r.h,E.a,a.l,I.a,H.a,a.k,I.c,N.a],pipes:[i.d],encapsulation:2}),G),K=o("4ZRl"),V=o("6QJN");function Y(t,e){if(1&t&&(f.Qb(0,"div",8),f.Lb(1,"app-post-card",9),f.Pb()),2&t){var s=f.ac().$implicit;f.xb(1),f.hc("post",s)}}function J(t,e){1&t&&f.Cc(0,Y,2,1,"ng-template",7)}function q(t,e){if(1&t&&(f.Qb(0,"div",3),f.Lb(1,"div",4),f.Qb(2,"owl-carousel-o",5),f.Cc(3,J,1,0,void 0,6),f.Pb(),f.Pb()),2&t){var s=f.ac();f.Cb("block-posts-carousel__carousel--has-items",(null==s.posts?null:s.posts.length)>0),f.xb(2),f.hc("options",s.carouselOptions),f.xb(1),f.hc("ngForOf",s.posts)}}var Z,z,tt,et,st,ct={grid:{items:4,responsive:{1350:{items:4,margin:20},1110:{items:3,margin:20},930:{items:3,margin:16},690:{items:2,margin:16},0:{items:1,margin:16}}},list:{items:2,responsive:{1350:{items:2,margin:20},930:{items:2,margin:16},0:{items:1,margin:16}}}},ot=((Z=function(){function e(s,c){t(this,e),this.language=s,this.cd=c,this.destroy$=new S.a,this.showCarousel=!0,this.loading=!1,this.layout="grid",this.links=[],this.posts=[],this.classBlock=!0,this.classBlockPostsCarousel=!0}return s(e,[{key:"ngOnChanges",value:function(t){var e=this;t.posts&&setTimeout(function(){e.initOptions(),e.showCarousel=!1,e.cd.detectChanges(),e.showCarousel=!0},0)}},{key:"ngOnInit",value:function(){var t=this;this.initOptions(),this.language.directionChange$.pipe(Object(g.a)(function(){return Object(u.a)(250)}),Object(B.a)(this.destroy$)).subscribe(function(){t.initOptions(),t.showCarousel=!1,t.cd.detectChanges(),t.showCarousel=!0})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"initOptions",value:function(){this.carouselOptions=Object.assign({dots:!1,margin:20,loop:!0,rtl:this.language.isRTL()},ct[this.layout])}},{key:"classBlockPostsCarouselLoading",get:function(){return this.loading}},{key:"classBlockPostsCarouselLayoutGrid",get:function(){return"grid"===this.layout}},{key:"classBlockPostsCarouselLayoutList",get:function(){return"list"===this.layout}}]),e}()).\u0275fac=function(t){return new(t||Z)(f.Kb(A.a),f.Kb(f.h))},Z.\u0275cmp=f.Eb({type:Z,selectors:[["app-block-posts-carousel"]],viewQuery:function(t,e){var s;1&t&&f.Jc(I.a,!0),2&t&&f.qc(s=f.Yb())&&(e.carousel=s.first)},hostVars:10,hostBindings:function(t,e){2&t&&f.Cb("block",e.classBlock)("block-posts-carousel",e.classBlockPostsCarousel)("block-posts-carousel--loading",e.classBlockPostsCarouselLoading)("block-posts-carousel--layout--grid",e.classBlockPostsCarouselLayoutGrid)("block-posts-carousel--layout--list",e.classBlockPostsCarouselLayoutList)},inputs:{label:"label",loading:"loading",layout:"layout",links:"links",posts:"posts"},features:[f.vb],decls:3,vars:4,consts:[[1,"container"],[3,"sectionTitle","arrows","links","next","prev"],["class","block-posts-carousel__carousel",3,"block-posts-carousel__carousel--has-items",4,"ngIf"],[1,"block-posts-carousel__carousel"],[1,"block-posts-carousel__carousel-loader"],["appOwlPreventClick","",3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"block-posts-carousel__item"],[3,"post"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"app-section-header",1),f.Xb("next",function(){return e.carousel.next()})("prev",function(){return e.carousel.prev()}),f.Pb(),f.Cc(2,q,4,4,"div",2),f.Pb()),2&t&&(f.xb(1),f.hc("sectionTitle",e.label)("arrows",!0)("links",e.links),f.xb(1),f.hc("ngIf",e.showCarousel))},directives:[K.a,a.l,I.a,H.a,a.k,I.c,V.a],encapsulation:2}),Z),at=o("i9Gj"),it=o("6IpJ"),nt=((z=function(){function e(){t(this,e),this.layout="top-strip",this.classBlock=!0,this.classBlockFeatures=!0}return s(e,[{key:"classBlockFeaturesLayoutTopStrip",get:function(){return"top-strip"===this.layout}},{key:"classBlockFeaturesLayoutBottomStrip",get:function(){return"bottom-strip"===this.layout}}]),e}()).\u0275fac=function(t){return new(t||z)},z.\u0275cmp=f.Eb({type:z,selectors:[["app-block-features"]],hostVars:8,hostBindings:function(t,e){2&t&&f.Cb("block",e.classBlock)("block-features",e.classBlockFeatures)("block-features--layout--top-strip",e.classBlockFeaturesLayoutTopStrip)("block-features--layout--bottom-strip",e.classBlockFeaturesLayoutBottomStrip)},inputs:{layout:"layout"},decls:42,vars:24,consts:[[1,"container"],[1,"block-features__list"],[1,"block-features__item"],[1,"block-features__item-icon"],["icon","fi-free-delivery-48"],[1,"block-features__item-info"],[1,"block-features__item-title"],[1,"block-features__item-subtitle"],["icon","fi-24-hours-48"],["icon","fi-payment-security-48"],["icon","fi-tag-48"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"ul",1),f.Qb(2,"li",2),f.Qb(3,"div",3),f.Lb(4,"app-icon",4),f.Pb(),f.Qb(5,"div",5),f.Qb(6,"div",6),f.Ec(7),f.bc(8,"translate"),f.Pb(),f.Qb(9,"div",7),f.Ec(10),f.bc(11,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Qb(12,"li",2),f.Qb(13,"div",3),f.Lb(14,"app-icon",8),f.Pb(),f.Qb(15,"div",5),f.Qb(16,"div",6),f.Ec(17),f.bc(18,"translate"),f.Pb(),f.Qb(19,"div",7),f.Ec(20),f.bc(21,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Qb(22,"li",2),f.Qb(23,"div",3),f.Lb(24,"app-icon",9),f.Pb(),f.Qb(25,"div",5),f.Qb(26,"div",6),f.Ec(27),f.bc(28,"translate"),f.Pb(),f.Qb(29,"div",7),f.Ec(30),f.bc(31,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Qb(32,"li",2),f.Qb(33,"div",3),f.Lb(34,"app-icon",10),f.Pb(),f.Qb(35,"div",5),f.Qb(36,"div",6),f.Ec(37),f.bc(38,"translate"),f.Pb(),f.Qb(39,"div",7),f.Ec(40),f.bc(41,"translate"),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&t&&(f.xb(7),f.Fc(f.cc(8,8,"TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE")),f.xb(3),f.Fc(f.cc(11,10,"TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE")),f.xb(7),f.Fc(f.cc(18,12,"TEXT_SHOP_FEATURE_SUPPORT_TITLE")),f.xb(3),f.Fc(f.cc(21,14,"TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE")),f.xb(7),f.Fc(f.cc(28,16,"TEXT_SHOP_FEATURE_SECURITY_TITLE")),f.xb(3),f.Fc(f.cc(31,18,"TEXT_SHOP_FEATURE_SECURITY_SUBTITLE")),f.xb(7),f.Fc(f.cc(38,20,"TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE")),f.xb(3),f.Fc(f.cc(41,22,"TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE")))},directives:[it.a],pipes:[i.d],encapsulation:2}),z),rt=function(){return{url:"/shop",desktopImage:"assets/images/slides/slide-3.jpg",mobileImage:"assets/images/slides/slide-3-mobile.jpg",offer:"30% OFF",title:"When Buying Parts <br>With Installation",details:"Installation of parts in the services of <br>our partners.",buttonLabel:"Shop Now"}},lt=function(){return{url:"/shop",desktopImage:"assets/images/slides/slide-2.jpg",mobileImage:"assets/images/slides/slide-2-mobile.jpg",title:"Not enough <br>spare parts?",details:"We have everything you need \u2013 replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...",buttonLabel:"Shop Now"}},bt=function(){return{url:"/shop",desktopImage:"assets/images/slides/slide-1.jpg",mobileImage:"assets/images/slides/slide-1-mobile.jpg",offer:"30% OFF",title:"Big Choice Of <br>Wheel Tires",details:"Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",buttonLabel:"Shop Now"}},ut=function(t,e,s){return[t,e,s]},pt=function(){return{label:"Special Offers",url:"/blog"}},dt=function(){return{label:"New Arrivals",url:"/blog"}},gt=function(){return{label:"Reviews",url:"/blog"}},ht=function(t,e){return{title:t,products:e}},ft=[{path:"",pathMatch:"full",component:(tt=function(){function e(s,c){t(this,e),this.shopApi=s,this.blogApi=c,this.brands$=Object(l.a)([]),this.popularCategories$=Object(l.a)([])}return s(e,[{key:"ngOnInit",value:function(){this.brands$=this.shopApi.getBrands({limit:16}),this.popularCategories$=this.shopApi.getCategories({slugs:["headlights-lighting","fuel-system","body-parts","interior-parts","tires-wheels","engine-drivetrain"],depth:1}),this.featuredProducts=this.makeCarouselData([{label:"All",products$:this.shopApi.getFeaturedProducts(null,8)},{label:"Power Tools",products$:this.shopApi.getFeaturedProducts("power-tools",8)},{label:"Hand Tools",products$:this.shopApi.getFeaturedProducts("hand-tools",8)},{label:"Plumbing",products$:this.shopApi.getFeaturedProducts("plumbing",8)}]),this.blockSale=this.makeDeferredData(this.shopApi.getSpecialOffers(8)),this.latestPosts=this.makeDeferredData(this.blogApi.getLatestPosts(8)),this.columnTopRated$=this.shopApi.getTopRatedProducts(null,3),this.columnSpecialOffers$=this.shopApi.getSpecialOffers(3),this.columnBestsellers$=this.shopApi.getPopularProducts(null,3)}},{key:"groupChange",value:function(t,e){t.subject$.next(e)}},{key:"makeCarouselData",value:function(t){var e=new b.a(t[0]),s={subject$:e,products$:e.pipe(Object(p.a)(function(t){return null!==t}),Object(d.a)(function(){return s.loading=!0}),Object(g.a)(function(t){return t.products$}),Object(d.a)(function(){return s.loading=!1})),loading:!0,groups:t};return s}},{key:"makeDeferredData",value:function(t){var e={loading:!0,data$:null};return e.data$=Object(u.a)(0).pipe(Object(h.a)(function(){return t.pipe(Object(d.a)(function(){return e.loading=!1}))})),e}}]),e}(),tt.\u0275fac=function(t){return new(t||tt)(f.Kb(_.d),f.Kb(_.b))},tt.\u0275cmp=f.Eb({type:tt,selectors:[["app-page-two"]],decls:32,vars:70,consts:[["layout","divider-xs"],[3,"slides"],["layout","divider-nl"],["layout","columns-8-full",3,"brands"],[3,"blockTitle","categories"],["layout","grid-5","rows","1",3,"blockTitle","loading","products","groups","changeGroup"],[3,"loading","products"],["layout","list",3,"label","loading","posts","links"],["layout","divider-nl",1,"d-xl-block","d-none"],[3,"columns"],["layout","bottom-strip"]],template:function(t,e){1&t&&(f.Lb(0,"app-block-space",0),f.Lb(1,"app-block-slideshow",1),f.Lb(2,"app-block-space",2),f.Lb(3,"app-block-brands",3),f.bc(4,"async"),f.Lb(5,"app-block-space",2),f.Lb(6,"app-block-categories",4),f.bc(7,"translate"),f.bc(8,"async"),f.Lb(9,"app-block-space",2),f.Qb(10,"app-block-products-carousel",5),f.Xb("changeGroup",function(t){return e.groupChange(e.featuredProducts,t)}),f.bc(11,"translate"),f.bc(12,"async"),f.Pb(),f.Lb(13,"app-block-space",2),f.Lb(14,"app-block-banners"),f.Lb(15,"app-block-space",2),f.Lb(16,"app-block-sale",6),f.bc(17,"async"),f.Lb(18,"app-block-space",2),f.Lb(19,"app-block-posts-carousel",7),f.bc(20,"translate"),f.bc(21,"async"),f.Lb(22,"app-block-space",8),f.Lb(23,"app-block-products-columns",9),f.bc(24,"translate"),f.bc(25,"async"),f.bc(26,"translate"),f.bc(27,"async"),f.bc(28,"translate"),f.bc(29,"async"),f.Lb(30,"app-block-space",2),f.Lb(31,"app-block-features",10)),2&t&&(f.xb(1),f.hc("slides",f.nc(46,ut,f.kc(43,rt),f.kc(44,lt),f.kc(45,bt))),f.xb(2),f.hc("brands",f.cc(4,15,e.brands$)),f.xb(3),f.hc("blockTitle",f.cc(7,17,"HEADER_POPULAR_CATEGORIES"))("categories",f.cc(8,19,e.popularCategories$)),f.xb(4),f.hc("blockTitle",f.cc(11,21,"HEADER_FEATURED_PRODUCTS"))("loading",e.featuredProducts.loading)("products",f.cc(12,23,e.featuredProducts.products$))("groups",e.featuredProducts.groups),f.xb(6),f.hc("loading",e.blockSale.loading)("products",f.cc(17,25,e.blockSale.data$)),f.xb(3),f.hc("label",f.cc(20,27,"HEADER_LATEST_NEWS"))("loading",e.latestPosts.loading)("posts",f.cc(21,29,e.latestPosts.data$))("links",f.nc(53,ut,f.kc(50,pt),f.kc(51,dt),f.kc(52,gt))),f.xb(4),f.hc("columns",f.nc(66,ut,f.mc(57,ht,f.cc(24,31,"HEADER_TOP_RATED"),f.cc(25,33,e.columnTopRated$)),f.mc(60,ht,f.cc(26,35,"HEADER_SPECIAL_OFFERS"),f.cc(27,37,e.columnSpecialOffers$)),f.mc(63,ht,f.cc(28,39,"HEADER_BESTSELLERS"),f.cc(29,41,e.columnBestsellers$)))))},directives:[k.a,m.a,v.a,F,C.a,w,W,ot,at.a,nt],pipes:[a.b,i.d],encapsulation:2}),tt)}],_t=((et=function e(){t(this,e)}).\u0275mod=f.Ib({type:et}),et.\u0275inj=f.Hb({factory:function(t){return new(t||et)},imports:[[r.i.forChild(ft)],r.i]}),et),kt=o("4fzT"),mt=((st=function e(){t(this,e)}).\u0275mod=f.Ib({type:st}),st.\u0275inj=f.Hb({factory:function(t){return new(t||st)},imports:[[a.c,i.c.forChild(),n.a,_t,kt.a]]}),st)}}])}();