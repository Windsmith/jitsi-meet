// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Awareness Game.',
    totalQuestions: 5,
    perQuestionScore: 5,
    questions: [
        {
            choices: ['Yes, it is a deepfake.', 'No, it is not a deepfake.'],
            type: 'MCQs',
            correctAnswer: 'Yes, it is a deepfake.',
            // Audio needs to come from this specific dir.
                // Audio sources specified below won't work.
            audioSrc: '../../../../sounds/audioQns/Deepfake 1.mp3'
        },
        {
            choices: ['Yes, it is a deepfake.', 'No, it is not a deepfake.'],
            type: 'MCQs',
            correctAnswer: 'No, it is not a deepfake.',
            audioSrc: '../../../../sounds/audioQns/Real 1.mpga'
        },
        {
            choices: ['Yes, it is a deepfake.', 'No, it is not a deepfake.'],
            type: 'MCQs',
            correctAnswer: 'Yes, it is a deepfake.',
            audioSrc: '../../../../sounds/audioQns/Deepfake 2.mp3'
        },
        {
            choices: ['Yes, it is a deepfake.', 'No, it is not a deepfake.'],
            type: 'MCQs',
            correctAnswer: 'No, it is not a deepfake.',
            audioSrc: '../../../../sounds/audioQns/Real 2.ogg'
        },
        {
            choices: ['Yes, it is a deepfake.', 'No, it is not a deepfake.'],
            type: 'MCQs',
            correctAnswer: 'Yes, it is a deepfake.',
            audioSrc: '../../../../sounds/audioQns/Deepfake 3.mp3'
        },
    ],
}
