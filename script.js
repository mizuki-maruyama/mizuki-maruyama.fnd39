const game = document.getElementById("game");
game.style.display = "none";

const choices = document.getElementsByClassName("choices");

const choice = document.getElementById("choice");
choice.style.display = "none";

const loadSlots = document.getElementById("loadSlots");
loadSlots.style.display = "none";

let load = true;
const chooseContinue = document.getElementById("continue");

function transitionLoad(){
    load = true;
    startDisplay.style.display = "none";
    loadSlots.style.display = "";
}
chooseContinue.addEventListener("click", transitionLoad);

const back = document.getElementById("back");
function transitionStartorGame(){
    if(load === true){
        loadSlots.style.display = "none";
        startDisplay.style.display = "";
    }else{
        loadSlots.style.display = "none";
        game.style.display = "";
    }
}
back.addEventListener("click", transitionStartorGame);

const input = document.querySelector("input");

const chooseStart = document.getElementById("chooseStart");

const startDisplay = document.getElementById("start");

let num = 0;
let sayLove = false;
let inputName;

function startGame(){
    startDisplay.style.display = "none";
    game.style.display = "";
    num = 0;
    inputName = input.value;
    if (inputName === ""){
        inputName = "おたく";
    }
    display()
}

chooseStart.addEventListener("click", startGame)


const heroin = {normal: "heroinNormal.png", climax: "heroinClimax.png", closeEyes: "heroinCloseEyes.png", smile: "heroinSmile.png"};

const character = document.getElementById("character");

const characterName = document.getElementById("characterName");


const message = document.getElementById("message");

const backGround = document.getElementById("backGround");
backGround.src = "classroom.jpg";

const choice1Text = document.getElementById("choice1Text");
const choice2Text = document.getElementById("choice2Text");

function display () {
    const names = ["", "優子", inputName];
    const characterAndMessage =
        [["", `僕の名前は${names[2]}。\nクラスに一人はいる、しがないオタクだ。`, names[0]], 
        ["", "早速だが、オタクの僕にも好きな人ができた。", names[0]], 
        [heroin.normal, "小田国 優子（おたくに ゆうこ）ちゃん。\nこんなオタクの僕にも優しい同級生の女の子だ。", names[0]], 
        [heroin.normal, `どうしたの？　${names[2]}くん。\n私の顔に何かついてる？`, names[1]], 
        [heroin.normal,"あっ、すみませんっ、ぶぶぶ不躾な視線をっ。\nなんでもないんですっ。", names[2]], 
        [heroin.smile, `あはは、何その口調。\n${names[2]}くんってたまに珍妙で面白いよね～。`, names[1]], 
        [heroin.smile, "ああ、この笑顔、かわいすぎる。\nまさにオタクに遣わされた天使だ。", names[0]],
        ["", "今学期から同じ委員会ということで話す機会も増えたが、\n僕としてはそれ以降も優子ちゃんと話したい。仲良くしたい。遊びたい。", names[0]],
        ["", "そしてあわよくば――――", names[0]], 
        ["", "（優子ちゃんとお付き合いをしたい！！）", names[2]],
        ["", "いままでは告白する勇気がなかった。でも……\n勇気を出して告白すべき時かもしれない。", names[0]],
        [heroin.normal, "さ、帰ろ。もうすぐ最終下校時刻だし――", names[1]],
        [heroin.normal, "あ、あのっ、優子ちゃん！", names[2]], 
        [heroin.normal, "？", names[1]]];

    const afterChoice1 = 
        [[heroin.normal, "僕は、優子ちゃんのことが好きです！\n付き合ってください！", names[2]], 
        [heroin.normal,  `${names[2]}くん……？`, names[1]], 
        ["", "優子ちゃんはとても驚いた顔をしている。\nやはりこんなオタクが優子ちゃんに告白、なんておこがましかっただろうか……", names[0]], 
        [heroin.climax, "……ふふっ。", names[1]], 
        [heroin.climax, "！？", names[0]],
        [heroin.climax, `わたしもね、${names[2]}くんの珍妙なところ、悪くないと思ってるよ。`, names[1]], 
        [heroin.climax, "優子ちゃん……！", names[2]],
        [heroin.closeEyes, "……でも、付き合うっていうのはまだ早いかな。", names[1]], 
        [heroin.closeEyes, "っ……！　そ、そう、ですか……", names[2]],
        [heroin.normal, "なんて顔してるの。\n「まだ」って言ったでしょ。", names[1]],
        [heroin.normal, "え？", names[2]], 
        [heroin.closeEyes, "だって私たち、一緒に遊びに行ったりとかしたことないし。\n私、よく知らない人と付き合ったりしたくないんだよね。", names[1]],
        [heroin.closeEyes, "な、なるほど……", names[2]],
        [heroin.normal, "――――だからまずはお友達からで。一緒に遊んだりご飯食べに行ったりして、\n互いのことを知っていって……今後のことはそれから考える。\nそれでもいいかな？", names[1]], 
        [heroin.normal, "～～っ！！　はいっ！！\nよろしくお願いします！！", names[2]], 
        ["", "な、なんてことだ……！　\n優子ちゃんに告白を拒絶されなかった！", names[0]],
        ["", "しかも遊びに行ったりお食事したりって……\nそれって、そういう仲の友達にはなれたってことだよね！？", names[0]],
        ["", "幸せすぎる……\n今後の学校生活が楽しみであふれかえるよ……！", names[0]],
        [heroin.smile, "そんなことを考えながらふと優子ちゃんのほうを見ると、\n彼女は天使のような笑みを浮かべていた。", names[0]],
        [heroin.smile, "（……でもなんか、不気味なくらいすがすがしい笑顔じゃないか……？）", names[2]],
        [heroin.smile, "ゆ、優子ちゃん……？", names[2]],
        [heroin.smile, `――――ねえ${names[2]}くん、今度の土曜日なんだけど。`, names[1]],
        [heroin.smile, "は、はい。", names[2]],
        [heroin.smile, "早速いっしょに遊びに行こうか。\n駅前のショッピングモールに。", names[1]],
        [heroin.smile, "ショ、ショッピングモール、ですか。\nいいですけど、なんで――――", names[2]],
        [heroin.normal, `――――――――${names[2]}くんは私と付き合いたいんだよね？`, names[1]],
        [heroin.normal, "！？", names[2]],
        [heroin.closeEyes, "じゃあまずは身だしなみと美意識をなんとかしなきゃね。\n私、オタクっぽい人は人間として好きだけど、\nオタクの見た目している人と付き合いたいとは思わないから。", names[1]],
        [heroin.normal, "どうする？　受け入れられないなら別にいいよ。", names[1]],
        [heroin.normal, "受け入れます！　自分磨き頑張ります！", names[2]],
        [heroin.closeEyes, "よろしい。", names[1]],
        [heroin.climax, `……それじゃあこれからよろしくね、${names[2]}くん。`, names[1]],
        ["", "ああ、やっぱり最高だ……\nこういう小悪魔的なひとが一番好きなんだよ、オタクって……", names[0]],
        ["", "今週の土曜日に思いをはせながら、僕は優子ちゃんに続いて教室を出ていった。\n ～～～～～～～～～～～～～～～～～～～～～～完　Good End!", names[0]]];
    const afterChoice2 = 
        [[heroin.normal, "な、なんでもない、です……", names[2]],
        [heroin.normal, "そう？\nそれじゃあ私もう帰るね。今日塾あるから。", names[1]],
        [heroin.normal, "は、はい…………", names[2]],
        [heroin.normal, "それじゃあ、また明日ね。", names[1]],
        ["", "そう言って優子ちゃんは帰ってしまった。", names[0]],
        ["", "……今日も告白、できなかったな。", names[2]],
        ["", "で、でも優子ちゃんとは毎日会えるんだ。\nいつでも告白するチャンスはある……！", names[2]], 
        ["", "……………………", names[0]],
        ["", "この時の僕は知らなかったのだ。", names[0]],
        ["", "翌日、優子ちゃんが嬉々として\n「彼氏ができた」と僕に報告してくることになるなんて――――――――\n～～～～～～～～～～～～～～～～～～～～～～完　Bad End...", names[0]]];

    if(game.style.display === "" && num < 14){
        character.src = characterAndMessage[num][0];
        message.innerText = characterAndMessage[num][1];
        characterName.innerText = characterAndMessage[num][2];
        num ++;
    }else if(num === 14){
        choiceFuture();
    }else if((game.style.display === "" && num === 49 && sayLove) || (game.style.display === "" && num === 25 && !sayLove)){
        transitionStart();
    }else if(game.style.display === ""){
        let after14num = num - 15;
        let choicedFuture;
        if(sayLove){
            choicedFuture = afterChoice1;
        }else{
            choicedFuture = afterChoice2;
        }
        character.src = choicedFuture[after14num][0];
        message.innerText = choicedFuture[after14num][1];
        characterName.innerText = choicedFuture[after14num][2];
        num ++;
    }
}

addEventListener("keydown", display);

const chooseSave = document.getElementById("chooseSave");
chooseSave.addEventListener("click", transitionSave);
function transitionSave(){
    load = false;
    game.style.display = "none";
    loadSlots.style.display = "";
}

const slotButtons = document.getElementsByClassName("slotButtons");
const saveSlot = [{}, {}, {}, {}, {}, {}];
const slots = document.getElementsByClassName("slots");
const slotText = document.getElementsByClassName("slotText");

for(const slotButton of slotButtons){
    slotButton.addEventListener("click", function saveOrLoad(){
        const slotButtonsArray = Array.from(slotButtons);
        const thisSlotIndex = slotButtonsArray.indexOf(slotButton);
        if(load === false){
            saveSlot[thisSlotIndex].number = num;
            saveSlot[thisSlotIndex].name = inputName;
            saveSlot[thisSlotIndex].love = sayLove;
            slots[thisSlotIndex].src = "start.png"; 
            const now = new Date();
            const saveNumber = thisSlotIndex + 1;
            slotText[thisSlotIndex].innerText= `セーブ${saveNumber}: \n   ${now.getMonth() + 1}月${now.getDay()}日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            slotText[thisSlotIndex].style.fontSize = "40px";
        }else{
            if(saveSlot[thisSlotIndex].number !== undefined){
                num = saveSlot[thisSlotIndex].number;
                inputName = saveSlot[thisSlotIndex].name;
                sayLove = saveSlot[thisSlotIndex].love;
                loadSlots.style.display = "none";
                game.style.display = "";
                num --;
                display();
            }
        }
    });
}

const backStart = document.getElementById("backStart");
backStart.addEventListener("click", transitionStart)

function transitionStart(){
    num = 0;
    game.style.display = "none";
    startDisplay.style.display = "";
    choice.style.display = "none";
    input.value = "";
}

//分岐を作りたい。選択肢を出したい。
function choiceFuture(){
    choice.style.display = "";
    choice1Text.innerText = "好きです！";
    choice2Text.innerText = "な、なんでもない……";
    for(const choice1or2 of choices){
        choice1or2.addEventListener("click", () => {
            if(choice1or2 === choices[0]){
                sayLove = true;
            }else{
                sayLove = false;
            }
            num = 15;
            display();
            choice.style.display = "none";
        })
    }
}

