export type IQuizSet = {
    question : string,
    answer : number,
    alternatives : string[]
}

export type IResult = {
     rightAnswers: number,
    amountOfAnswers: number,
    onClick:()=>void
} 