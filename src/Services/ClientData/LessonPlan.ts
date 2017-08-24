import { IIntroduction } from './LessonPlans/Introduction';
import { IWarmUp } from './LessonPlans/WarmUp';
import { IGame } from './LessonPlans/Game';

export interface ILessonPlan {
    LessonPlanName: string;
    Introductions: IIntroduction[];
    WarmUps: IWarmUp[];
    Games: IGame[];
}
