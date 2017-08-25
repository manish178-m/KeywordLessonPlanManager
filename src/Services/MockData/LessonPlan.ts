import { ILessonPlan } from '../ClientData/LessonPlan';

export function LessonPlansData(): ILessonPlan {
    let lessonPlans: ILessonPlan[] = [];

    for (var i = 0; i < Math.random() * 5; i++) {
        let plan: ILessonPlan = { LessonPlanName: `Lesson plan ${i + 1}`, Introductions: [], WarmUps: [], Games: [] };

        // Generate random list of games
        let randomGameNames = ["Sticky ball", "Hammer game", "Jumping game", "Hoop game", "Tag game", "Magic game", "Awesome game", "Special game", "Random game", "Another game", "Cool game", "Silly game", "Fun game", "Final game"];

        for (var j = 0; j < Math.random() * 10; j++) {
            let game: string = randomGameNames.splice(Math.random() * randomGameNames.length, 1)[0];

            plan.Introductions.push({
                Id: (i + 1) * (j + 1) * 1,
                Name: game,
                Description: game
            });
        }

        // Generate random list of warmups
        let randomWarmupNames = ["Some warmup", "Another warmup", "Singing song 1", "Singing song 2", "Tag warmup", "Magic warmup", "Awesome warmup", "Special warmup", "Random warmup", "Another warmup", "Cool warmup", "Silly warmup", "Fun warmup", "Final warmup"];

        for (var j = 0; j < Math.random() * 10; j++) {
            let warmup: string = randomWarmupNames.splice(Math.random() * randomWarmupNames.length, 1)[0];

            plan.WarmUps.push({
                Id: (i + 1) * (j + 1) * 2,
                Name: warmup,
                Description: warmup
            });
        }

        // Generate random list of introductions
        let randomIntroductionNames = ["Some intro", "Another intro", "Some other intro", "What intro?", "Tag intro", "Magic intro", "Awesome intro", "Special intro", "Random intro", "Another intro", "Cool intro", "Silly intro", "Fun intro", "Final intro"];

        for (var j = 0; j < Math.random() * 10; j++) {
            let intro: string = randomIntroductionNames.splice(Math.random() * randomIntroductionNames.length, 1)[0];

            plan.Games.push({
                Id: (i + 1) * (j + 1) * 3,
                Name: intro,
                Description: intro
            });
        }

        lessonPlans.push(plan);
    }

    return lessonPlans[0];
}
