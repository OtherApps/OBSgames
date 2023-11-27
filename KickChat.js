let emotes = {};
function main(chatroomID) 
{
    const chat = new WebSocket('wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.4.0&flash=false');
  //  console.log("Connecting to Pusher...");
	

    chat.onerror = (error) => {
        console.log("Error: " + error);
    };

    chat.onopen = () => {
    //    console.log("Connected to Pusher");
        //document.getElementById("loading").innerHTML = "Connected";
        // 2 seconds after connecting, remove the loading screen
        setTimeout(() => {
           // document.getElementById("loading").style.display = "none";
        }, 1000);
        chat.send(
            JSON.stringify({
                event: 'pusher:subscribe',
                data: {
                    auth: "",
                    channel: `chatrooms.${chatroomID}.v2`
                },
            })
        );
        chat.send(
            JSON.stringify({
                event: 'pusher:subscribe',
                data: {
                    auth: "",
                    channel: `channel.${chatroomID + 2}`
                },
            })
        )
    };

    chat.onmessage = (event) => {
	//console.log(event.data);   
 parseMessage(event.data);
    };

    // Ping every 1 minute to keep the connection alive
    setInterval(() => {
        chat.send(JSON.stringify({
            event: 'pusher:ping',
            data: {}
        }));
    }, 60000);
}
function parseMessage(message) {
    const msg = JSON.parse(message);
	
	//console.log(message);
	
    // Remove all the \ from message.data
    const data = JSON.parse(
        msg.data.replace(/\\u00a0/g, " ")
            .replace(/\\n/g, " ")
            .replace(/\\t/g, " ")
            .replace(/\\r/g, " ")
            .replace(/\\f/g, " ")
            .replace(/\\b/g, " ")
            .replace(/\\v/g, " ")
            .replace(/\\\\/g, "\\")
    );
    // If the data begins with "pusher", it's a pusher message, just console.log it
    if (msg.event.startsWith("pusher")) {
        if (!msg.event == "pusher:pong") {
            console.log(data);
        }
    } else if (msg.event == "App\\Events\\ChatMessageEvent") {
       // console.log("Sent:");
       // console.log(data);
        handleMessage(data);
    } 
    else {

    }

}

function handleMessage(data){
	
	let msgID = data.id;
    let msgContent = data.content;
    let msgSender = data.sender.username;
    let msgTimestamp = data.created_at;
	
	if( msgContent.includes("!g")){
		
		var inputs = msgContent.split(" ");
		//console.log(inputs[1]);
		createClick(inputs[1]);
	}
	else if(msgContent.includes("!new")) {
	
	
	
	}
	
	else if(data.content.includes("!spin")){
			spinWheel(data.sender.username);
			
		}
		
	
	
}
