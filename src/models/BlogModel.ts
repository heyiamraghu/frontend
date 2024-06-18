export class BlogModel {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    date: Date;
    author: string;

    constructor(id: number, title: string, subtitle: string, content: string, date: Date, author: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.date = date;
        this.author = author;
    }
}