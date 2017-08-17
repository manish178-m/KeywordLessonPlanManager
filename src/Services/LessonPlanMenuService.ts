// Import services needed
import { CourseService } from './CourseService';
import { UnitService } from './UnitService';
import { LessonService } from './LessonService';

// Import data types
import {
    ICourseMenuItem,
    ILessonMenuItem,
    ILessonPlanMenu,
    IUnitMenuItem
} from './ClientData/LessonPlanMenu';

export class LessonPlanMenuService {
    courseService: CourseService;
    unitService: UnitService;
    lessonService: LessonService;

    constructor() {
        this.courseService = new CourseService();
        this.unitService = new UnitService();
        this.lessonService = new LessonService();
    }

    public async BuildMenu(): Promise<ILessonPlanMenu> {
        // Grab all lists we need
        let courses = await this.courseService.GetAllCourses();
        let units = await this.unitService.GetAllUnits();
        let lessons = await this.lessonService.GetAllLessons();

        debugger;

        // Build up the nested list
        let menu: ILessonPlanMenu = { courseList: [] };

        // Loop through all courses. Every course will be added to the menu.
        for (var i = 0; i < courses.length; i++) {
            var newCourseMenuItem: ICourseMenuItem = {
                courseId: courses[i].CourseId,
                courseName: courses[i].CourseName,
                unitList: []
            };

            // Before adding the course menu item to the menu we need to loop through all units and add only the ones for this course.
            for (var j = 0; j < units.length; j++) {
                if (units[j].CourseId == courses[i].CourseId) {
                    var newUnitMenuItem: IUnitMenuItem = {
                        unitId: units[j].UnitId,
                        unitName: units[j].UnitName,
                        lessonList: []
                    };

                    // Before added the unit to the course we need to loop through all lessons and add only the ones for this unit.
                    for (var k = 0; k < lessons.length; k++) {
                        if (lessons[k].UnitId == units[j].UnitId) {
                            var newLessonMenuItem: ILessonMenuItem = {
                                lessonId: lessons[k].LessonId,
                                lessonName: lessons[k].LessonName
                            };

                            // Add this lesson to the unit
                            newUnitMenuItem.lessonList.push(newLessonMenuItem);
                        }
                    }

                    // Add this unit to the course
                    newCourseMenuItem.unitList.push(newUnitMenuItem);
                }
            }

            // Add this course to the menu.
            menu.courseList.push(newCourseMenuItem);
        }

        // The menu is now a nested array of courses, units, and lessons, ready to enter into the webpage.
        return await menu;
    }
}