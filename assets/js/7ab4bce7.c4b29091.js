"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[1810],{23668:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=a(83117),o=(a(67294),a(3905));a(56022);const i={},r="From 3.x to 4.x",l={unversionedId:"upgrading/from-3.x-to-4.x",id:"upgrading/from-3.x-to-4.x",title:"From 3.x to 4.x",description:"Estimated Upgrade Time: 1.5 Hours",source:"@site/docs/upgrading/from-3.x-to-4.x.md",sourceDirName:"upgrading",slug:"/upgrading/from-3.x-to-4.x",permalink:"/docs/next/upgrading/from-3.x-to-4.x",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/upgrading/from-3.x-to-4.x.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u23eb Upgrading",permalink:"/docs/next/category/-upgrading"},next:{title:"From 2.x to 3.x",permalink:"/docs/next/upgrading/from-2.x-to-3.x"}},p={},d=[{value:"Updating dependencies",id:"updating-dependencies",level:2},{value:"PHP 8.2.0 required",id:"php-820-required",level:3},{value:"Laravel support moved in another package",id:"laravel-support-moved-in-another-package",level:3},{value:"Enums",id:"enums",level:2},{value:"Attributes to Enums",id:"attributes-to-enums",level:3},{value:"Renamed namespace",id:"renamed-namespace",level:3},{value:"Naming",id:"naming",level:3},{value:"Nutgram config",id:"nutgram-config",level:2},{value:"Config parameter",id:"config-parameter",level:3},{value:"split_long_messages option",id:"split_long_messages-option",level:3},{value:"Types",id:"types",level:2},{value:"StickerSet object",id:"stickerset-object",level:3},{value:"Custom types",id:"custom-types",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"Signature",id:"signature",level:3},{value:"Group method",id:"group-method",level:3},{value:"Handlers",id:"handlers",level:2},{value:"onPoll handler",id:"onpoll-handler",level:3},{value:"Case sensitive pattern",id:"case-sensitive-pattern",level:3},{value:"Persisting data",id:"persisting-data",level:2},{value:"setData &amp; getData",id:"setdata--getdata",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"from-3x-to-4x"},"From 3.x to 4.x"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Estimated Upgrade Time: 1.5 Hours")),(0,o.kt)("h2",{id:"updating-dependencies"},"Updating dependencies"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: High")),(0,o.kt)("h3",{id:"php-820-required"},"PHP 8.2.0 required"),(0,o.kt)("p",null,"Nutgram now requires PHP 8.2.0 or greater."),(0,o.kt)("h3",{id:"laravel-support-moved-in-another-package"},"Laravel support moved in another package"),(0,o.kt)("p",null,'Starting from the latest update, the Laravel support for Nutgram has been moved to a new package. To continue utilizing Laravel functionality in Nutgram, it is necessary to install the composer package "nutgram/laravel":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require nutgram/laravel\n")),(0,o.kt)("p",null,"To streamline the integration process, the previous package ",(0,o.kt)("inlineCode",{parentName:"p"},"nutgram/nutgram")," is now included within the ",(0,o.kt)("inlineCode",{parentName:"p"},"nutgram/laravel")," package.",(0,o.kt)("br",null),"\nThis means that if you install ",(0,o.kt)("inlineCode",{parentName:"p"},"nutgram/laravel"),", you can safely remove ",(0,o.kt)("inlineCode",{parentName:"p"},"nutgram/nutgram")," as it is already incorporated."),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h3",{id:"attributes-to-enums"},"Attributes to Enums"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The Attributes (Class with constants) have been converted to Enums.\nIf you were previously using the value directly, now you will need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"->value")," to obtain the raw value."),(0,o.kt)("h3",{id:"renamed-namespace"},"Renamed namespace"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The namespace has been renamed using ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- use SergiX44\\Nutgram\\Telegram\\Attributes\\X;\n+ use SergiX44\\Nutgram\\Telegram\\Properties\\X;\n")),(0,o.kt)("h3",{id:"naming"},"Naming"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The names of the enums are now in ",(0,o.kt)("strong",{parentName:"p"},"singular")," form."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"From"),(0,o.kt)("th",{parentName:"tr",align:"left"},"To"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ChatActions"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ChatAction")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Emojis"),(0,o.kt)("td",{parentName:"tr",align:"left"},"DiceEmoji")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"MessageEntityTypes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"MessageEntityType")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"MessageTypes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"MessageType")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PassportSources"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PassportSource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PassportTypes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PassportType")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"UpdateTypes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"UpdateType")))),(0,o.kt)("h2",{id:"nutgram-config"},"Nutgram config"),(0,o.kt)("h3",{id:"config-parameter"},"Config parameter"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: High")),(0,o.kt)("p",null,"The constructor of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nutgram")," class now accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," class as the second parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- $bot = new Nutgram('TOKEN', [\n-     'timeout' => 5 \n- ]);\n+ $bot = new Nutgram('TOKEN', new Configuration(\n+     clientTimeout: 5\n+ ));\n")),(0,o.kt)("h3",{id:"split_long_messages-option"},"split_long_messages option"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,'The feature "Split long text message to multiple messages" has been removed and replaced by the Chunked endpoints:\n',(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedMessage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedPhoto"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedAudio"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedDocument"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedVideo"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedAnimation"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"sendChunkedVoice"),"."),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("h3",{id:"stickerset-object"},"StickerSet object"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Low")),(0,o.kt)("p",null,"The deprecated ",(0,o.kt)("inlineCode",{parentName:"p"},"contains_mask")," property from ",(0,o.kt)("inlineCode",{parentName:"p"},"StickerSet")," object has been removed.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"sticker_type")," property instead."),(0,o.kt)("h3",{id:"custom-types"},"Custom types"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Low")),(0,o.kt)("p",null,"We have made a complete revision by replacing our custom-created objects, namely\n",(0,o.kt)("inlineCode",{parentName:"p"},"EditedMessage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelPost"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"EditedChannelPost"),", with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Message")," object within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Update"),".\nThis change applies to their respective properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"edited_message"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"channel_post"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"edited_channel_post"),"."),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("h3",{id:"signature"},"Signature"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Very High")),(0,o.kt)("p",null,"The conversion of all endpoint signatures from ",(0,o.kt)("strong",{parentName:"p"},"array")," to ",(0,o.kt)("strong",{parentName:"p"},"parameters")," enables\nthe convenient utilization of ",(0,o.kt)("strong",{parentName:"p"},"named parameters"),".\nMoreover, the parameter sorting will be configured in a way that mandatory parameters come first,\nfollowed by optional ones, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"$clientOpt")," parameter, if present, will always be placed at the end."),(0,o.kt)("p",null,"You'll need to convert the usages from the old logic to the new one like this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- $bot->sendMessage('my text', [\n-     'disable_notification' => true\n- ]);\n+ $bot->sendMessage('my text', \n+     disable_notification: true\n+ );\n")),(0,o.kt)("h3",{id:"group-method"},"Group method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: High")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," method has been modified from the old logic, where it accepted the middleware as a parameter,\nto the new logic, where the middleware is set using the ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," method."),(0,o.kt)("p",null,"The updated code would be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- $bot->group(Middleware::class, function (Nutgram $bot){\n-     // Your handlers here\n- });\n+ $bot->group(function (Nutgram $bot){\n+     // Your handlers here\n+ })->middleware(Middleware::class);\n")),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("h3",{id:"onpoll-handler"},"onPoll handler"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The deprecated ",(0,o.kt)("inlineCode",{parentName:"p"},"onPoll")," handler has been removed.\nInstead, you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"onUpdatePoll")," handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- $bot->onPoll(YourPollHandler::class);\n+ $bot->onUpdatePoll(YourPollHandler::class);\n")),(0,o.kt)("h3",{id:"case-sensitive-pattern"},"Case sensitive pattern"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$pattern")," parameter used in the specified handlers: ",(0,o.kt)("inlineCode",{parentName:"p"},"onCallbackQueryData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onPreCheckoutQueryPayload"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onSuccessfulPaymentPayload"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onText"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onCommand"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onException")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onApiError")," is now ",(0,o.kt)("strong",{parentName:"p"},"case sensitive"),"."),(0,o.kt)("h2",{id:"persisting-data"},"Persisting data"),(0,o.kt)("h3",{id:"setdata--getdata"},"setData & getData"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likelihood Of Impact: Medium")),(0,o.kt)("p",null,"The methods ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," have been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," respectively."),(0,o.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("p",null,"We also encourage you to view the changes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nutgram/nutgram")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nutgram/nutgram"},"GitHub repository"),".\nWhile many of these changes are not required, you may wish to keep these files in sync with your application.\nSome of these changes will be covered in this upgrade guide, but others,\nsuch as changes to configuration files or comments, will not be.\nYou can easily view the changes with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laravel/laravel/compare/3.x...4.x"},"GitHub comparison tool"),"\nand choose which updates are important to you."))}u.isMDXComponent=!0}}]);