import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ChatbotRoutingModule,
        FormsModule
    ],
    declarations: [
        ChatbotComponent
    ]
})

export class ChatbotModule { }
