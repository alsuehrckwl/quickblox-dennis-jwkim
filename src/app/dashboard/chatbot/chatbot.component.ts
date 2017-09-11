import { Component, OnInit, Input } from '@angular/core';
// import { AppComponent } from '../../app.component';
import { QuickbloxService } from '../../service/quickblox.service';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { Buffer } from 'buffer';

declare var QB: any;
declare var RecordRTC: any;
declare var MediaStreamRecorder: any;
declare var StereoAudioRecorder: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  providers: [QuickbloxService]
})

export class ChatbotComponent implements OnInit {
  onConnect;
  // fnCallback;
  inputMsg = '';

  @Input() msgArray: any;

  constructor(qbs: QuickbloxService) {
    this.onConnect = qbs.onConnect();
    const outputMsg: string[] = [];
    this.msgArray = outputMsg;

    QB.chat.onMessageListener = function( userId, msg ) {
      console.log( 'message from user: ' + userId, msg );
      outputMsg.push(msg.body);
    };
  }

  ngOnInit() { }

  // sendMsg() {
  //   if (this.inputMsg !== null) {
  //     const msg = {
  //       type: 'groupchat',
  //       body: this.inputMsg,
  //       extension: {
  //         save_to_history: 1
  //       }
  //     };

  //     QB.chat.send('60785_599d781ba0eb474ccf844a0e@muc.chat.quickblox.com', msg);
  //     console.log('send message working!');
  //     this.inputMsg = '';
  //   }
  // }

  // user keyup actions
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

