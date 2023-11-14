import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { CommentType } from "src/types/types";

@Component({
    selector: 'discussions-panel',
    templateUrl: './discussions-panel.component.html',
    styleUrls: ['./discussions-panel.component.scss']
})
export class DiscussionsComponent implements OnChanges {
    isNewTopic: boolean = false;
    topicPanel: string = 'newTopic';

    commentModel: CommentType = {
        subject: '',
        author: 'postAuthor',
        comment: '',
        likes: 0,
        replys: [],
        isAvaliabe: false,
        isCommentActive: false
    }

    commentsList: CommentType[] = [
        {
            subject: "Assunto da pergunta aparece aqui",
            author: "Carlos Henrique Santos",
            comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 1,
            replys: [],
            isAvaliabe: true,
            isCommentActive: false
        },
        {
            subject: "Assunto da pergunta aparece aqui",
            author: "Carlos Henrique Santos",
            comment: "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?",
            likes: 1,
            replys: [
                {
                    author: "Adriano da Silva",
                    comment: "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.",
                    userType: "author"
                },
                {
                    author: "Carlos Henrique Santos",
                    comment: `Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.

                    Obrigada pela resposta, muito interessante o seu trabalho! `,
                    userType: "postAuthor"
                },
                {
                    author: "Carmila Ferreira Andrade",
                    comment: `Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

                    Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
                    userType: "coautor"
                },
                {
                    author: "Ana Carolina",
                    comment: `Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
                    userType: "coautor"
                }
            ],
            isAvaliabe: true,
            isCommentActive: false
        }
    ]
comment: any;

    constructor(){}

    ngOnChanges(): void {
        this.commentModel = this.commentModel;
    }

    submit() :void{
        this.commentsList.unshift(this.commentModel);
        this.isNewTopic = !this.isNewTopic;
        this.topicPanel = "sendTopic"
    }

}