export interface IBlog{
    result:{
        title: string,
        date: string,
        image: string,
        texts: string,
        comments:{
            mail: string,
            name: string,
            comment: string,
            date: string,
            status: string
        }
    }

}