/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {type: "Goldfish", brand: "Pepperidge Farm", flavor: "Cheddar", count: 2000}; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user){
	this.messageSent = [];
	this.messageReceived;
	this.received = 0;
	this.sent = 0;

	//Logs the messages sent as incoming or outgoing and stores them
	this.logMessage = function (messageText, direction){
		if(direction === 0){
			//Checks if there are more than 5 messages and stores the message based on count
			if(this.messageSent.length >= 5){
				//Moves the messages down one
				this.messageSent.slice(0, 4);
				//Stores the message in the 4th index
				this.messageSent.unshift(messageText);
				}
			else
				this.messageSent.unshift(messageText);

			//Increases the counter of messages sent
			this.sent++;
		}

		if(direction === 1){
			//Stores the messages received
			this.messageReceived = messageText;
			//Increases the counter of messages received
			this.received++;
		}
	}

	//User chooses one out of the last 5 messages sent
	this.getSentMessage = function (n){
		return this.messageSent[n];
	}

	//Function that returns the total messages sent
	this.totalSent = function (){
		return this.sent;
	}

	//Function that returns the total messages received
	this.totalReceived = function (){
		return this.received;
	}

}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function (){
	return this.messageReceived;
}

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var BlackHatGuy = new MessageLog (BlackHatGuy);
BlackHatGuy.logMessage("foo", 1);
BlackHatGuy.logMessage("bar", 1);
BlackHatGuy.logMessage("baz", 1);
var myLog = BlackHatGuy;

//end your code
