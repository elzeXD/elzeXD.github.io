(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),l=i(a("pVnL")),o=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function k(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+o+s+d+a+i+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=o.default.createElement(N,(0,l.default)({src:t},r,{ariaHidden:n}));return a.length>1?o.default.createElement("picture",null,i(a),s):s},N=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,k=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:O?1:0,transition:z?"opacity "+y+"ms":"none"},d),V="boolean"==typeof b?"lightgray":b,x={transitionDelay:y+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&x,{},d,{},f),q={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:S};if(m){var j=m,P=p(m);return o.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&x)}),P.base64&&o.default.createElement(A,{ariaHidden:!0,src:P.base64,spreadProps:q,imageVariants:j,generateSources:L}),P.tracedSVG&&o.default.createElement(A,{ariaHidden:!0,src:P.tracedSVG,spreadProps:q,imageVariants:j,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,w(j),o.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:k})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},P,{imageVariants:j}))}}))}if(h){var B=h,M=p(h),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,o.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&x)}),M.base64&&o.default.createElement(A,{ariaHidden:!0,src:M.base64,spreadProps:q,imageVariants:B,generateSources:L}),M.tracedSVG&&o.default.createElement(A,{ariaHidden:!0,src:M.tracedSVG,spreadProps:q,imageVariants:B,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,w(B),o.default.createElement(N,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:k})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:E},M,{imageVariants:B}))}}))}return null},t}(o.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=z;t.default=x},Bxyr:function(e,t,a){"use strict";a.r(t);a("OG14"),a("Z2Ku"),a("L9s1");var i=a("Ypm3"),r=a("q1tI"),n=a.n(r),s=a("Bl7J"),d=a("vrFN"),l=a("QiaT"),o=a.n(l),c=(a("f3/d"),a("9Ruc")),u=a.n(c);var f=function(e){e.url;var t=e.name,a=e.onClick;return n.a.createElement("button",{className:u.a.btn,onClick:a,id:"search-btn"},n.a.createElement("span",{className:u.a.name},t))},g=a("JMMV");t.default=function(){var e=Object(r.useState)(""),t=e[0],a=e[1],l=Object(r.useState)([]),c=l[0],u=l[1],p=i.data;return n.a.createElement(s.a,null,n.a.createElement(d.a,{title:"Search"}),n.a.createElement("div",{className:o.a.container},n.a.createElement("h1",{className:o.a.title},"Cari release"),n.a.createElement("div",{className:o.a.search},n.a.createElement("input",{type:"text",placeholder:"Masukkan keyword disini",className:o.a.input,value:t,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("search-btn").click())}}),n.a.createElement(f,{name:"Cari",onClick:function(){var e=(p.allMarkdownRemark.edges||[]).filter((function(e){var a=e.node.frontmatter,i=a.desc,r=a.title,n=a.tags;return i.toLowerCase().includes(t.toLowerCase())||r.toLowerCase().includes(t.toLowerCase())||n.join("").toLowerCase().includes(t.toLowerCase())}));u(e),console.log(e)}})),n.a.createElement("div",{className:o.a.results}),c.map((function(e){var t=e.node;return n.a.createElement(g.a,{key:t.id,title:t.frontmatter.title,desc:t.frontmatter.desc,slug:t.fields.slug})}))))}},Chh9:function(e){e.exports=JSON.parse('{"data":{"file":{"id":"1e73aae7-59b0-5acd-9b61-f64b16e5cde9","childImageSharp":{"id":"c202b7c8-8d30-5286-a461-c799a122ee15","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABOIAAATiAGjigkoAAAA6UlEQVQoz9VSSaqEMBTsIzqLIs4jNt7DrehCN4IoKujOG3iwal4kIr3uxf+L4r2kkkqlkpeqqvglXr8UUxTlEpQkCaIoskoQBAGyLDNw7hvE8Z7WU70d+r6PJElg2zZc18X7/YZpmvc4yzLGh2GIKIoYLMtiNY5j5HnOOOZQ0zRUVYXzPNE0DcqyxDRNqOsay7JgHEd0XYe+77HvO9Z1xTzPaNsWwzDgOA5s28bW6bp+OXQcB2maIggC5sowDBRFwU4nZ9wh8dwV3YLmqae9nuddgmTzmSHPjufyxDPPb564+1H+7Lf5H4IfuXjLqXIOqPYAAAAASUVORK5CYII=","aspectRatio":1.7777777777777777,"src":"/static/3ccecebd8758f4f4602d859abe6bae3f/91886/placeholder.png","srcSet":"/static/3ccecebd8758f4f4602d859abe6bae3f/5c427/placeholder.png 284w,\\n/static/3ccecebd8758f4f4602d859abe6bae3f/87139/placeholder.png 569w,\\n/static/3ccecebd8758f4f4602d859abe6bae3f/91886/placeholder.png 800w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},JMMV:function(e,t,a){"use strict";var i=a("Chh9"),r=a("q1tI"),n=a.n(r),s=a("Wbzz"),d=a("BbIM"),l=a.n(d),o=a("9eSz"),c=a.n(o);t.a=function(e){var t=e.slug,a=e.title,r=e.desc,d=e.cover,o=i.data;return n.a.createElement(s.Link,{to:t},n.a.createElement("div",{className:l.a.container},n.a.createElement(c.a,{className:l.a.img,fluid:d||o.file.childImageSharp.fluid,alt:"Image"}),n.a.createElement("div",{className:l.a.wrapper},n.a.createElement("span",{className:l.a.title},a),n.a.createElement("hr",null),n.a.createElement("p",{className:l.a.desc},r))))}},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Ypm3:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"0cc9e36c-472f-585f-844c-c7a59e7fc1ec","frontmatter":{"title":"Tutorial Fix Blank Icon Setelah Install Theme Windows 10 (Build 1903 and up)","desc":"Jika setelah install theme, iconnya jadi hilang, atau file-file anda jadi gelap hitam, mungkin ini akan membantu.","date":"February 29, 2020","tags":["tutorial","theme","windows 10","blank icon","bug","shellstyle"]},"fields":{"slug":"/releases/id/owo-patching/"}}},{"node":{"id":"6a3ac744-9dbc-54ed-9846-bd2fadee3af3","frontmatter":{"title":"Tutorial Install Theme Windows 10","desc":"Tutorial install tools untuk patching theme di Windows 10. Wajib diikuti, agar tidak ada yang komplain \'Bang, ini kenapa gabisa?\' dan lain-lain sebagainya.","date":"February 29, 2020","tags":["tutorial","theme","windows 10"]},"fields":{"slug":"/releases/id/tutorial-patching/"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-search-js-d6251623bdb83378f57d.js.map