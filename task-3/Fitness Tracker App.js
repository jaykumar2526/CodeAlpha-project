document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const goalsForm = document.getElementById('goals-form');
    const workoutList = document.getElementById('workout-list');
    const goalSummary = document.getElementById('goal-summary');

    let workouts = [];
    let goals = {};

    // Handle adding a workout
    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = parseInt(document.getElementById('duration').value, 10);
        const calories = parseInt(document.getElementById('calories').value, 10);

        workouts.push({ exercise, duration, calories });
        updateWorkoutLog();
        updateGoalProgress();
        workoutForm.reset();
    });

    // Handle setting a goal
    goalsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goalType = document.getElementById('goal-type').value;
        const goalValue = parseInt(document.getElementById('goal-value').value, 10);

        goals[goalType] = goalValue;
        updateGoalSummary();
        goalsForm.reset();
    });

    function updateWorkoutLog() {
        workoutList.innerHTML = '';
        workouts.forEach((workout, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Exercise: ${workout.exercise}, Duration: ${workout.duration} mins, Calories: ${workout.calories}`;
            workoutList.appendChild(listItem);
        });
    }

    function updateGoalSummary() {
        if (Object.keys(goals).length === 0) {
            goalSummary.textContent = 'No goals set yet.';
        } else {
            let summary = 'Current Goals:\n';
            for (const [key, value] of Object.entries(goals)) {
                summary += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
            }
            goalSummary.textContent = summary;
        }
    }

    function updateGoalProgress() {
        let totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0);
        let totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);

        if (goals.duration) {
            const progressDuration = totalDuration >= goals.duration ? 'Goal Achieved' : `Progress: ${totalDuration}/${goals.duration} mins`;
            goalSummary.textContent += `\nWorkout Duration Goal: ${progressDuration}`;
        }

        if (goals.calories) {
            const progressCalories = totalCalories >= goals.calories ? 'Goal Achieved' : `Progress: ${totalCalories}/${goals.calories} calories`;
            goalSummary.textContent += `\nCalories Burned Goal: ${progressCalories}`;
        }
    }
});
