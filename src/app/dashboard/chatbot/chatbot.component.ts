import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../../app.component';
import { QuickbloxService } from '../../service/quickblox.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  providers: [QuickbloxService]
})
export class ChatbotComponent implements OnInit {
  onConnect;

  constructor(qbs: QuickbloxService) {
    this.onConnect = qbs.onConnect();
  }

  ngOnInit() {
    this.onConnect();
  }

}
