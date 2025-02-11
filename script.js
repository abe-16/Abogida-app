// Dynamic content for course-detail.html
const courseTitle = document.getElementById('course-title');
const lessonList = document.getElementById('lesson-list');

const courses = {
  'natural-science': {
    title: 'Natural Science',
    lessons: ['Physics', 'Chemistry', 'Biology']
  },
  'social-science': {
    title: 'Social Science',
    lessons: ['History', 'Geography', 'Civics']
  }
};

const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('course');

if (courseId && courses[courseId]) {
  courseTitle.textContent = courses[courseId].title;
  courses[courseId].lessons.forEach(lesson => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="lesson.html?course=${courseId}&lesson=${lesson.toLowerCase()}">${lesson}</a>`;
    lessonList.appendChild(li);
  });
}