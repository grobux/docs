"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[2422],{92733:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return u}});var a=t(83117),l=(t(67294),t(3905));t(56022);const o={sidebar_position:6},i="Inline Menu",r={unversionedId:"usage/inline_menu",id:"usage/inline_menu",title:"Inline Menu",description:"The InlineMenu class extends Conversation and help you to provide an easy interface to",source:"@site/docs/usage/inline_menu.md",sourceDirName:"usage",slug:"/usage/inline_menu",permalink:"/docs/next/usage/inline_menu",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/inline_menu.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Conversations",permalink:"/docs/next/usage/conversations"},next:{title:"Extend",permalink:"/docs/next/usage/extend"}},s={},u=[{value:"Methods",id:"methods",level:2},{value:"Changing Telegram method type",id:"changing-telegram-method-type",level:3},{value:"Example",id:"example",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"inline-menu"},"Inline Menu"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"InlineMenu")," class extends ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/usage/conversations"},"Conversation")," and help you to provide an easy interface to\ncreate inline menu messages in your bot."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"menuText(string $text, array $opt = [])"),(0,l.kt)("br",null),"\nSet the message text and the optional message parameters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"addButtonRow(... InlineKeyboardButton $buttons)"),(0,l.kt)("br",null),"\nSet a row of buttons to the current message",(0,l.kt)("br",null),"\nWhen you use a button with ",(0,l.kt)("inlineCode",{parentName:"p"},"callback_data"),", you must set\nthe value as ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackData@methodName")," and create a method with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"methodName"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"clearButtons()"),(0,l.kt)("br",null),"\nRemove the buttons from the current message")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"orNext(?string $orNext)"),(0,l.kt)("br",null),"\nCall a method if there is no matching handlers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"showMenu(bool $reopen = false, bool $noHandlers = false, bool $noMiddlewares = false)"),(0,l.kt)("br",null),"\nSend the message with buttons")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"closeMenu()"),(0,l.kt)("br",null),"\nClose the menu deleting the current message"))),(0,l.kt)("h3",{id:"changing-telegram-method-type"},"Changing Telegram method type"),(0,l.kt)("p",null,"Override the following methods only to change the Telegram method used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"doOpen()"),(0,l.kt)("br",null),"\nSend the message. Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"sendMessage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"doUpdate()"),(0,l.kt)("br",null),"\nEdit the message. Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"editMessageText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"doClose()"),(0,l.kt)("br",null),"\nDelete the message. Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteMessage")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ChooseColorMenu extends InlineMenu\n{\n\n    public function start(Nutgram $bot)\n    {\n        $this->menuText('Choose a color:')\n            ->addButtonRow(InlineKeyboardButton::make('Red', callback_data: 'red@handleColor'))\n            ->addButtonRow(InlineKeyboardButton::make('Green', callback_data: 'green@handleColor'))\n            ->addButtonRow(InlineKeyboardButton::make('Yellow', callback_data: 'yellow@handleColor'))\n            ->orNext('none')\n            ->showMenu();\n    }\n\n    public function handleColor(Nutgram $bot)\n    {\n        $color = $bot->callbackQuery()->data;\n        $this->menuText(\"Choosen: $color!\")\n            ->showMenu();\n    }\n\n    public function none(Nutgram $bot)\n    {\n        $bot->sendMessage('Bye!');\n        $this->end();\n    }\n}\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/IQ63ruH.gif",alt:"example"})))}m.isMDXComponent=!0}}]);