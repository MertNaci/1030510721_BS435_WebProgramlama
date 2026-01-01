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
                url: "/images/Q1-real1.jpg",
                isAi: false
            },
            {
                id: 102,
                url: "/images/Q1-real2.jpg",
                isAi: false
            },
            {
                id: 103,
                url: "/images/Q1-ai.png",
                isAi: true,
                hint: "Arka plan detaylarına dikkat et."
            }
        ]
    },
    {
        id: 2,
        options: [
            {
                id: 201,
                url: "/images/Q2-ai.png",
                isAi: true,
                hint: "Yansımalara bakabilirsin ya da aşırı mükemmel olmasına dikkat et."
            },
            {
                id: 202,
                url: "/images/Q2-real3.jpg",
                isAi: false
            },
            {
                id: 203,
                url: "/images/Q2-real4.jpg",
                isAi: false
            }
        ]
    },
    {
        id: 3,
        options: [
            {
                id: 301,
                url: "/images/Q3-real5.jpg",
                isAi: false
            },
            {
                id: 302,
                url: "/images/Q3-real6.jpg",
                isAi: false
            },
            {
                id: 303,
                url: "/images/Q3-ai.png",
                isAi: true,
                hint: "Kusursuz ışık dengesine dikkat et."
            }
        ]
    },
    {
        id: 4,
        options: [
            {
                id: 401,
                url: "/images/Q4-real7.jpg",
                isAi: false
            },
            {
                id: 402,
                url: "/images/Q4-ai.png",
                isAi: true,
                hint: "Gerçekçilik katmak için konulan şeylere dikkat et."
            },
            {
                id: 403,
                url: "/images/Q4-real8.jpg",
                isAi: false
            }

        ]
    }
];