"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[6355],{3627:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return l}});var s=t(83117),a=(t(67294),t(3905));t(56022);const o={},i="Extend",r={unversionedId:"usage/extend",id:"usage/extend",title:"Extend",description:"The framework provides multiple ways to extends its functionalities.",source:"@site/docs/usage/extend.md",sourceDirName:"usage",slug:"/usage/extend",permalink:"/docs/next/usage/extend",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/extend.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Inline Menu",permalink:"/docs/next/usage/inline_menu"},next:{title:"Bulk Messenger",permalink:"/docs/next/usage/bulk_messenger"}},u={},l=[{value:"Usage",id:"usage",level:3}],d={toc:l};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extend"},"Extend"),(0,a.kt)("p",null,"The framework provides multiple ways to extends its functionalities."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Nutgram")," class and all its types (",(0,a.kt)("inlineCode",{parentName:"p"},"BaseType")," class) have the ability that makes\nit possible to add methods at runtime."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You can add a new method using ",(0,a.kt)("inlineCode",{parentName:"p"},"macro"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Nugram::macro('sendHelloMessage', function() {\n    return $this->sendMessage('Hello!');\n});\n\nMessage::macro('pin', function(array $opt = []) {\n    return $this->pinChatMessage($this->chat->id, $this->message_id, $opt);\n});\n\n$bot = new Nutgram('you telegram token here');\n$message = $bot->sendHelloMessage();\n$message->pin();\n")),(0,a.kt)("p",null,"You can also add multiple methods in one go by using a ",(0,a.kt)("inlineCode",{parentName:"p"},"mixin")," class.\nA mixin class contains methods that return callables.\nEach method from the mixin will be registered on the class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class CustomMethods {\n\n    public function sendHelloMessage() {\n        return function() {\n            return $this->sendMessage('Hello!');\n        };\n    }\n    \n    public function sendByeMessage() {\n        return function() {\n            return $this->sendMessage('Bye!');\n        };\n    }\n}\n\nNugram::mixin(new CustomMethods());\n\n$bot = new Nutgram('you telegram token here');\n$bot->sendHelloMessage();\n$bot->sendByeMessage();\n")))}c.isMDXComponent=!0}}]);