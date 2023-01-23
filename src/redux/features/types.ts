export interface Owner {
    user_id: string;
    profile_img: string;
    display_name: string;
}

export interface Tags {
    count: number;
    name: string;
}

export interface Question {
    view_count: number;
    answer_count: number;
    score: number;
    tags: string[];
    owner: Owner;
    question_id: string;
    title: string;
    is_answered: boolean;
}

// export interface Comment {
//     owner: Owner;
//     answer_id: string;
// }

export interface AppData {
    questions?: Question[];
    status?: string | null;
    error?: string | null;
    allTags: Tags[];
    // questionAnswers: 
}