import { Component, OnInit, Input } from '@angular/core';

declare var QB: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent implements OnInit {
  onConnect;
  inputMsg = '';

  @Input() msgArray: any;

  constructor() {
    const outputMsg: string[] = [];
    this.msgArray = outputMsg;

    QB.chat.onMessageListener = function( userId, msg ) {
      console.log( 'message from user: ' + userId, msg );
      outputMsg.push(msg.body);
    };
  }

  ngOnInit() { }

  // user keyup actions
  // send button delete
  onEnter(inputMsg: string) {

    if (this.inputMsg !== null) {
      const msg = {
        type: 'groupchat',
        body: this.inputMsg,
        extension: {
          save_to_history: 1
        }
      };

      QB.chat.send('60785_599d781ba0eb474ccf844a0e@muc.chat.quickblox.com', msg);
      this.inputMsg = '';
    }

  }

}

