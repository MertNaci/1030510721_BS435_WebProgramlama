export type ImageOption = {
    id: number;
    url: string;
    isAi: boolean;
    hint?: string;
};

export type Question = {
    id: number;
    options: ImageOption[];
};

export const questions: Question[] = [
    {
        id: 1,
        options: [
            {
                id: 101,
                url: "https://picsum.photos/id/10/300/300",
                isAi: false
            },
            {
                id: 102,
                url: "https://picsum.photos/id/77/300/300",
                isAi: false
            },
            {
                id: 103,
                url: "https://picsum.photos/id/84/300/300",
                isAi: true,
                hint: "Arka plandaki nesnelerin büküldüğüne dikkat et."
            }
        ]
    },
    {
        id: 2,
        options: [
            {
                id: 201,
                url: "https://picsum.photos/id/159/300/300",
                isAi: true,
                hint: "Işıklandırma çok yapay duruyor, gölgelere bak."
            },
            {
                id: 202,
                url: "https://picsum.photos/id/133/300/300",
                isAi: false
            },
            {
                id: 203,
                url: "https://picsum.photos/id/219/300/300",
                isAi: false
            }
        ]
    }
];