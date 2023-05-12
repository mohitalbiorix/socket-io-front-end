import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../chat-message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  model = new ChatMessage("");

  messageList: string[] = [];

  submitted = false;

  sendMessage():void{
    console.log(this.model.msg)
    this.messageService.sendMessage(this.model.msg)
    this.model.msg = "";
  }


  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message:string)=>{
      this.messageList.push(message);
    })
  }


  onSubmit(){
    this.sendMessage();
    this.submitted = true;
  }

}
