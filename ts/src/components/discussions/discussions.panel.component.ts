import { Component } from "@angular/core";
import { CommentType } from "src/types/types";

@Component({
    selector: 'discussions-panel',
    templateUrl: './discussions-panel.component.html',
    styleUrls: ['./discussions-panel.component.scss']
})
export class DiscussionsComponent {
    commentsList: CommentType[] = [
        {
            subject: "Assunto da pergunta aparece aqui",
            author: "Carlos Henrique Santos",
            comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 1,
            replys: []
        },
        {
            subject: "Assunto da pergunta aparece aqui",
            author: "Carlos Henrique Santos",
            comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 1,
            replys: []
        }
    ]

    constructor(){}
}