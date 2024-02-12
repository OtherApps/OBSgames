



// chat log below work
var jsonInfoData =0;
var guestList ="";


var goodies = null; 

async function getSpecialFans(userid){
	
	var ids =0; 
	var el3 =   document.getElementById("info2") ;
	el3.style.display="block";
 
	http://localhost:8081/info/51919855
	var urlForInfo='http://localhost:8081/info/'+userid;
	var json = fetch (urlForInfo)
        .then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            jsonId = JSON.parse (json);
			ids=jsonId.totalFans;		
			el3.innerHTML = "Total fans " +  ids;
        console.log(jsonId); 
		});
	
			
	
	
}

async function ListCards(whoToDisplay){
	const response = await fetch('http://localhost:8080/username/'+whoToDisplay);
	const body = await response.text();
	//console.log(body); 
	var el3 =   document.getElementById("cardlist") ;
	var results=body.split('<br>'); 
	var i=0; var counts=0;
	var output =""; 
	el3.style.visibility = 'visible';
	el3.style.color= 'white';


console.log("within list cards"); 

	while(i < results.length){
	var temp = results[i].split(","); 


	output2= "<center><h2 style='font-family: Josefin Sans;font-size:30px', sans-serif;'>"+ whoToDisplay+ " "+"</h2></center>" 
	 

	var Searching = null; 


		if((temp[0].includes(whoToDisplay) )){

		output = output+"<div style='display:inline'><div style='display:inline;'> <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + temp[1].trim() +".svg'  style='border-radius: 50%;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'/></div></div> "

		counts++;

		}
		
i++; 


}

el3.innerHTML = output2+"<br><center><span class='sp'> number of cards : " + counts +"</span></center><br>" +output +""; 


	setTimeout(() => {
  

  // 👇️ hides element (still takes up space on page)
el3.style.visibility = 'hidden';
}, 14500);
	





}
function tradeCards(ToUser,FromUser,cardSent){


    targetUrl = 'http://localhost:8080/trade?UserSending='+FromUser+"&UserTo="+ToUser+"&card="+cardSent;
    var json = fetch (targetUrl)
        .then (data =>
        {
       console.log(data); 

		
        });

}
DownloadGifts();
function displayPopUp(data){

	var popup = document.getElementById('cardlist');
	popup.style.visibility="visible" 
	popup.innerHTML	= data; 
		setTimeout(() => {
  

  // 👇️ hides element (still takes up space on page)
popup.style.visibility = 'hidden';
}, 14500);
	
}

function customUserName(){


}
function displayGiftOnly(i,data2){
	
	index =0; 
	var index =0; 
	stuff = goodies.goodies;
	gifts = data2; 
	
	var totalLikesGiven = gifts.extraData['numOfLikes']
	
	if(totalLikesGiven> 1)
	{
	
	return totalLikesGiven
	}
	else if (gifts.extraData.value > 1){
	
	
	return gifts.extraData.value;
	
	}
	else{
	
	
	return 0
	}
} 

	async function DownloadGifts()
	{
    //console.log ("Fetching Gifts...");
    targetUrl = 'https://ynassets.younow.com/giftsData/live/de/data.json';
    var json = fetch (targetUrl)
        .then (blob => blob.json ())
        .then (data =>
        {
            json = JSON.stringify (data, null, 2);
            goodies = JSON.parse (json);
        });
	}

 
function FetchEvent (userId){
		pusher = new Pusher ('42a54e2785b3c81ee7b3', {
        cluster: "mt1"
		});
	
		let channel = pusher.subscribe ("public-channel_" + userId);
  
		channel.bind('onEnd', function(data){

		});
	
	channel.bind ('onChat', function (data)
    {
		
        if (data.message !== "undefined")
    
			{
				
				
		var dataout = "" ; 
					
					for (let i = 0; i < data.message.comments.length; i++)
						{
						var username = data.message.comments[i].name;
						var	TimsStamp =  data.message.comments[i].timestamp; 
						var whatsSaid = data.message.comments[i].comment; 
						var CommentUserId = data.message.comments[i].userId; 
						var userImage = GetuserImage(CommentUserId); 
						var propslevel = (data.message.comments[i].propsLevel ) 
						var ifMod = data.message.comments[i].broadcasterMod; 
		
		
							
							if(data.message.comments[i].optedToGuest!=false){ 
						
							AddToGuestList(data.message.comments[i].name);;}
							else{ if(guestList.includes(data.message.comments[i].name) !=false){ guestList=guestList.replace(data.message.comments[i].name," ") }
							else{}
								
								updateList();
		
		
							if(whatsSaid.includes("!deal")!=false){
					
							saveRandom(username); 
							//console.log("getting a new card");
				
			
				
							}
							else if(whatsSaid.includes("!mine")!=false){
						
							
							ListCards(username);	
						//	playAudio(); 
							
							
							}
						//
						else if(whatsSaid.includes("!play")!=false){
						if(ifMod !=true){
								
								alert("Not a mod");
								
							}
							
							else{
								
								var tempstring= whatsSaid.split("!play"); 
								//console.log(tempstring[1])
								searchForSong(tempstring[1]);
							
							}
							
						}
						
						else if(whatsSaid.includes("!start")!=false){
							
							countdown( "countDown2", 10, 0 );
						}
						else if(whatsSaid.includes("pause")!=false){
							
							
						}
						else if(whatsSaid.includes("!music")!=false){
							
							startSpot()
							
						}
						else if(whatsSaid.includes("!new")!=false){
						
							if(CommentUserId !=2282276){

							}else{
							 init(); 
							}
					
							
							
						}
						else if(whatsSaid.includes("!show")!=false){
						
							if(CommentUserId !=2282276){

							}else{
							showWord();
							}
					
							
							
						}
						else if(whatsSaid.includes("!revoke")!=false){
						removeItemFromList("3WATWS2Ywo5HeHtG0bE2iZ");
							
							
						}
						else if(whatsSaid.includes("!trade")!=false ){
	
						var temp = whatsSaid.split(" " ); 
						if((temp.length > 1) ){
						console.log("From "+username + " " 	+"sending to "+temp[1] +  "card number " +temp[2]  );
						tradeCards(temp[1],username,temp[2])
						}
						else{
						alert("Unable to  trade missing data"); 
						
						}

	
				}
				else if(whatsSaid.includes("!g")){
					var inputs = whatsSaid.split(" "); 
					//guess(inputs[1];
					
					createClick(inputs[1]);
					
						dataout = dataout + "<table><tr><td>"+"<img  style='width:50px;height:50px; border-radius: 20px;align:left;' src='" + userImage+"'/></td><td  class='msg' style='align:left;color:white'>" + Math.abs(propslevel) + " " +data.message.comments[i].name  +" "+ timeConverter(TimsStamp) +"<br>"  +data.message.comments[i].comment + 
						"</td></tr><table>"; 
					
				}
				
						// 
							if(ifMod != false) {
			
			
							dataout = dataout + "<table><tr><td>"+"<img  style='width:50px;height:50px; border-radius: 20px;align:left;' src='" + userImage+"'/></td><td  class='msg' style='color:red;background-color:white'>" + Math.abs(propslevel) + " " +data.message.comments[i].name  +" "+ timeConverter(TimsStamp) +"<br>"  +data.message.comments[i].comment + 
							"</td></tr><table>"; 
							}
							
							else{
						dataout = dataout + "<table><tr><td>"+"<img  style='width:50px;height:50px; border-radius: 20px;align:left;' src='" + userImage+"'/></td><td  class='msg' style='align:left;color:white'>" + Math.abs(propslevel) + " " +data.message.comments[i].name  +" "+ timeConverter(TimsStamp) +"<br>"  +data.message.comments[i].comment + 
						"</td></tr><table>"; 
							}
						}
	
			}



		displayIt(dataout);



	
	}});

	
   
        channel.bind('onGift', function (data)
        {
		
		// check who  got the gift  and display it in a different list
		
		playSound("./sounds/thank_you.wav"); 
		let tempUsername = data.message.stageGifts[0].profileUrlString
		var giftids = data.message.stageGifts[0].giftId;
		var onlydata = data.message.stageGifts[0] ;
		
		if(data.message.stageGifts[0].extraData.numOfLikes >0){
			console.log("GOT " +data.message.stageGifts[0].receiverFirstName +" likes " +  data.message.stageGifts[0].extraData.numOfLikes)}
		else
		{
			
			if(data.message.stageGifts[0].extraData.value >0){
				
					console.log(data.message.stageGifts[0].extraData.value)
			}
			else if(data.message.stageGifts[0].giftId===897){
				
				displayPopUp2("New sub");
				
			}
			else if(data.message.stageGifts[0].giftId!=248){
			
			console.log(data.message.stageGifts[0]);			
			//248
			}
			else
			{
			
			}
			
		}
		
		
		if(displayGiftOnly(giftids,onlydata) != 0){
		
			dataout = "<div  class='msg' style='font-size:16px;'>" +tempUsername+ " Gave <center> "+ displayGiftOnly(giftids,onlydata)+" likes </center></div>"
		}
		else{
			dataout = "<div  class='msg' style='font-size:16px;'><center>" + onlydata.comment+"  </center></div>"
		
		
		}
		
			displayIt(dataout)
  
		
		});
	
        //Get Stickers
        channel.bind('onSticker', function (data)
        {
		if(stickers !=false) {
			dealwithFreeStickers(data);
		}
		else{
		
		}
		  //  console.log('sticker data', data);
            //handleNewSticker(data);
        });

		channel.bind('onRaid', function (data)
        {
		//console.log("raid : " +  data )
		
		});
 channel.bind('onBroadcastPlayData', function (data)
        {
           var  viewers= data.message.viewers ;
		   var likes = data.message.likes; 

	
	dataout =  "Total viewers " + viewers + " Total:" + likes
				//var el4 =   document.getElementById("info2") ;
	//el4.innerHTML =  dataout; 
			
			
        });
		//Get Stickers
        channel.bind('onPartnerSticker', function (data)
        {
		
		console.log("Partener sticker data " + data )
            //handleOnOldPartnerSticker(data);
        });
   
		channel.bind ('onSuperMessage', function (data)
			{        
	
			dataout = dataout + "<div class='msg' style='color:red'>"    +data.message.superMessages[0].name +" <b> " + data.message.superMessages[0].comment + "</b><div>"; 
			displayIt(dataout);
			
		//	
		});
		
	
	
	
}  
function dealwithFreeStickers(data){

	var ids = data.message.stickers[0].stickerUserId; 
	var stickername = data.message.stickers[0].assetSku; 
	var fullpath = "https://ynassets.younow.com/subscriptionsTiers/usersAssets/live/" + ids+"/" +stickername +"/web_" +stickername +".png?assetRevision=1 " ;
	var sent_user = data.message.stickers[0].profile;
	var imagedata= "<div class='msg'    style='width:200px;height:auto;font-size:15px;' >" +sent_user+"  <br><img src='" + fullpath +"' style='color:white; width:50px;height:50px'/> </div>"

	displayIt(imagedata); 
 

}
function GetuserImage(data){


return   "https://ynassets.younow.com/user/live/" + data + "/" + data +".jpg"; 



}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  if(sec <10 ){
	sec ="0"+sec

  }
  if(hour <10) {
	hour = "0" + hour;

  }
  if(min <10){
	min = "0" + min

  }
  var time =   hour + ':' + min ;
  return time;
}
function displayIt(data){

	//dataout = data;
//	var el2 =   document.getElementById("chat") ;
	//el2.innerHTML =   el2.innerHTML  + dataout; 

}



function playAudio() { 
		var x = document.getElementById("myAudio"); 
	
		
	  var playPromise = x.play();
 
  if (playPromise !== undefined) {
    playPromise.then(_ => {
	console.log("playing");
	
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
      x.pause();
    })
    .catch(error => {
	console.log(error);
	
      // Auto-play was prevented
      // Show paused UI.
    });
  }	
		
		
		
		
} 
function playSound(filename){
				var audio = new Audio(filename);
        audio.play();
					
	
}


function getCountry2(data){
	json = JSON.stringify (data,null,2);
	//console.log(json); //
	good2 = JSON.parse (data);
	console.log(good2.country);
	
	
}

async function getCountry(ids){
	var url = "http://localhost:8080/info/"+ids;
	

 let response = await fetch(url);

    if (response.status === 200) {
        
		let data3 = await response.text();
		  //json = JSON.stringify (data3,null,2);
           // good2 = JSON.parse (json);
	getCountry2(data3);
	
		
		
		}

	
}
function AddToGuestList(username){
	var dataout = username ; 
	console.log("Hand is up");
	
		if(guestList.includes(username) !=false ){
			
		}
		
		else{
			guestList = guestList + "," + dataout;
		console.log("added " +  dataout); 
		
		}
		
	updateList();
}
function updateList(){
	
//	var el2 =   document.getElementById("guestList") ;
	
	var test = guestList.split(","); 
	var output2 = ""; 
	var i=0; 
			while(i < test.length) 
	
				{
					if(test[i] > "" ){
						
					output2 =  output2+" <br>" + test[i]; }
					
					i++; 
				}
			//el2.innerHTML =  output2; 
	
}
	
