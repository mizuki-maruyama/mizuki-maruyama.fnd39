const game = document.getElementById("game");
game.style.display = "none";

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

    if(game.style.display === "" && num !== 14){
        character.src = characterAndMessage[num][0];
        message.innerText = characterAndMessage[num][1];
        characterName.innerText = characterAndMessage[num][2];
        num ++;
    }else if(num === 14){
        choice.style.display = "";
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
            slots[thisSlotIndex].src = "start.png"; 
            const now = new Date();
            const saveNumber = thisSlotIndex + 1;
            slotText[thisSlotIndex].innerText= `セーブ${saveNumber}: \n   ${now.getMonth() + 1}月${now.getDay()}日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            slotText[thisSlotIndex].style.fontSize = "40px"
        }else{
            num = saveSlot[thisSlotIndex].number;
            inputName = saveSlot[thisSlotIndex].name;
            loadSlots.style.display = "none";
            game.style.display = "";
            num --;
            display();
        }
    });
}

const backStart = document.getElementById("backStart");
backStart.addEventListener("click", transitionStart)

function transitionStart(){
    num = 0;
    game.style.display = "none";
    startDisplay.style.display = "";
    input.value = "";
}

//分岐を作りたい。選択肢を出したい。


