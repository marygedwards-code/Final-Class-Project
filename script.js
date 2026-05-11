const plans = {
  beginner: [
    ["Monday: Run 3 min / Walk 2 min × 7", "Wednesday: Run 5 min / Walk 2 min × 5", "Friday: Run 25 min", "Sunday: 4 mile long run"],
    ["Monday: Run 2.5 miles", "Wednesday: Run 3 miles", "Friday: 1 mile WU + 5x1 min hard/3 min easy + 1 mile CD", "Sunday: 6 mile long run"],
    ["Monday: Run 3 miles", "Wednesday: Run 4 mile cutdown", "Thursday: 3 miles + 6 strides", "Friday: 2 mile WU + 8x1:30 hard/2 min easy + 1 mile CD", "Sunday: 7 mile long run"],
    ["Monday: Run 3.5 miles", "Tuesday: 2 mile WU + 2.5 miles @ tempo + 2 mile CD", "Thursday: 4 miles + 10 strides", "Friday: 2 mile WU + 10x400s @ GRP + 2 min stand recovery + 1 mile CD", "Sunday: 8 mile long run"],
    ["Monday: Run 4 miles", "Tuesday: 2 mile WU + 3 miles @ tempo + 2 mile CD", "Thursday: 5 miles + 8 hill sprints", "Friday: 2 mile WU + 5x1k @ GRP + 3 min stand recovery + 2 mile CD", "Sunday: 9 mile long run"],
    ["Monday: Run 4 miles", "Tuesday: 2 mile WU + 3.5 miles @ tempo + 2 mile CD", "Thursday: 5 miles + 10 strides", "Friday: 2 mile WU + 5x1k @ GRP + 3 min stand recovery + 2 mile CD", "Sunday: 9 mile long run"],
    ["Monday: Run 4 miles", "Tuesday: 2 mile WU + 3.5 miles @ tempo + 2 mile CD", "Thursday: 5 miles + 10 strides", "Friday: 2 mile WU + 8x400s + 2 mile CD", "Sunday: 8 mile long run"],
    ["Monday: Run 3 miles", "Tuesday: 2 mile WU + 10 min tempo + 4x200s faster than race pace + 2 mile CD", "Thursday: Run 3 miles", "Friday: Run 3-4 miles", "Sunday: Race Day"]
  ],

  intermediate: [
    ["Monday: Run 4 min / Walk 2 min × 7", "Wednesday: Run 6 min / Walk 2 min × 5", "Friday: Run 35 min", "Sunday: 6 mile long run"],
    ["Monday: Run 4.5 miles", "Wednesday: Run 5 miles", "Friday: 2 mile WU + 6x1:30 hard/1:30 easy + 2 mile CD", "Saturday: Run 4 miles easy", "Sunday: 8 mile long run"],
    ["Monday: Run 5 miles", "Wednesday: Run 6 mile cutdown", "Thursday: 5 miles + 6 strides", "Friday: 2 mile WU + 12x1:30 hard/2 min easy + 2 mile CD", "Sunday: 9 mile long run"],
    ["Monday: Run 5.5 miles", "Tuesday: 2 mile WU + 4 miles @ tempo + 4 mile CD", "Thursday: 6 miles + 10 strides", "Friday: 2 mile WU + 12x400s @ GRP + 2 min recovery + 2.5 mile CD", "Sunday: 10 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 5 miles @ tempo + 3 mile CD", "Thursday: 7 miles + 8 hill sprints", "Friday: 2 mile WU + 5x1k @ GRP + 3 min recovery + 2.5 mile CD", "Sunday: 11 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 6 miles @ tempo + 3 mile CD", "Thursday: 7 miles + 10 strides", "Friday: 2 mile WU + 6x1k @ GRP + 3 min recovery + 2.5 mile CD", "Sunday: 11 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 5.5 miles @ tempo + 2 mile CD", "Thursday: 7 miles + 10 strides", "Friday: 2 mile WU + 15x400s @ GRP + 2 min recovery + 2 mile CD", "Sunday: 10 mile long run"],
    ["Monday: Run 5 miles", "Tuesday: 2 mile WU + 20 min tempo + 4x200s faster than race pace + 2 mile CD", "Thursday: Run 5 miles", "Friday: Run 6 miles + strides", "Sunday: Race Day"]
  ],

  advanced: [
    ["Monday: Run 20 min", "Wednesday: Run 25 min", "Friday: Run 35 min", "Sunday: 6 mile long run"],
    ["Monday: Run 4.5 miles", "Wednesday: Run 5 miles", "Friday: 2 mile WU + 8x1:30 hard/1:30 easy + 2 mile CD", "Saturday: Run 4 miles easy", "Sunday: 8 mile long run"],
    ["Monday: Run 6 miles", "Wednesday: Run 7 mile cutdown", "Thursday: 6 miles + 6 strides", "Friday: 2 mile WU + 12x1:45 hard/3 min easy + 3 mile CD", "Saturday: Run 4 miles", "Sunday: 10 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 5 miles @ tempo + 4 mile CD", "Thursday: 6 miles + 10 strides", "Friday: 2 mile WU + 21x400s @ GRP + 2 min recovery + 4 mile CD", "Saturday: Run 4 miles", "Sunday: 12 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 6 miles @ tempo + 4 mile CD", "Thursday: 7 miles + 8 hill sprints", "Friday: 2 mile WU + 8x1k @ GRP + 3 min recovery + 4 mile CD", "Saturday: Run 5 miles", "Sunday: 14 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 7 miles @ tempo + 4 mile CD", "Thursday: 7 miles + 10 hill sprints", "Friday: 2 mile WU + 6x1k @ GRP + 6x400 faster than GRP + 4 mile CD", "Saturday: Run 5 miles", "Sunday: 16 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 6 miles @ tempo + 3 mile CD", "Thursday: 7 miles + 10 strides", "Friday: 2 mile WU + 15x400s @ GRP + 3 mile CD", "Saturday: Run 5 miles", "Sunday: 11 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 20 min tempo + 6x400s @ GRP + 2 mile CD", "Thursday: Run 6 miles", "Friday: Run 6 miles + strides", "Sunday: Race Day"]
  ],

  marathon: [
    ["Monday: Run 30 min", "Wednesday: Run 35 min", "Friday: Run 40 min", "Sunday: 6 mile long run"],
    ["Monday: Run 5 miles", "Wednesday: Run 6 miles + 6 strides", "Friday: 2 mile WU + 12x1:30 hard/1:30 easy + 3 mile CD", "Saturday: Run 5 miles easy", "Sunday: 9 mile long run"],
    ["Monday: Run 6 miles", "Wednesday: Run 7 mile cutdown", "Thursday: 6 miles + 6 strides", "Friday: 2 mile WU + 16x1:45 hard/2 min easy + 3 mile CD", "Saturday: Run 5 miles", "Sunday: 11 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 6 miles @ tempo + 4 mile CD", "Thursday: 7 miles + 10 strides", "Friday: 2 mile WU + 24x400s @ GRP + 4 mile CD", "Saturday: Run 7 miles", "Sunday: 14 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 7 miles @ tempo + 6x400 @ GRP + 4 mile CD", "Thursday: 8 miles + 8 hill sprints", "Friday: 2 mile WU + 10x1k @ GRP + 16x400 faster than GRP + 4 mile CD", "Saturday: Run 8 miles", "Sunday: 17 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 8 miles @ tempo + 6x200 faster than GRP + 4 mile CD", "Thursday: 9 miles + 10 hill sprints", "Friday: 2 mile WU + 10x1k @ GRP + 10x400 faster than GRP + 4 mile CD", "Saturday: Run 8 miles", "Sunday: 18 mile long run"],
    ["Monday: Run 7 miles", "Tuesday: 2 mile WU + 6 miles @ tempo + 3 mile CD", "Thursday: 7 miles + 10 strides", "Friday: 2 mile WU + 21x400s @ GRP + 4x200 faster than GRP + 3 mile CD", "Saturday: Run 6 miles", "Sunday: 12 mile long run"],
    ["Monday: Run 6 miles", "Tuesday: 2 mile WU + 4 mile tempo + 6x400s @ GRP + 2 mile CD", "Thursday: Run 8 miles", "Friday: Run 6 miles + strides", "Sunday: Race Day"]
  ]
};

function choosePlanType(sex, goal) {
  if (sex === "female" && goal === "5k") return "beginner";
  if ((sex === "male" && goal === "5k") || (sex === "female" && goal === "10k")) return "intermediate";
  if ((sex === "male" && goal === "10k") || (sex === "female" && goal === "marathon")) return "advanced";
  if (sex === "male" && goal === "marathon") return "marathon";
}

function adjustForInjury(workout, injury) {
  if (injury !== "prone") return workout;

  return workout.replace(/(\d+(\.\d+)?) mile/g, function(match, number) {
    let adjusted = Math.max(1, parseFloat(number) - 1);
    return adjusted + " mile";
  });
}

function generatePlan() {
  const sex = document.getElementById("sex").value;
  const goal = document.getElementById("goal").value;
  const injury = document.getElementById("injury").value;
  const mileage = document.getElementById("mileage").value;
  const pace = document.getElementById("pace").value;

  const planType = choosePlanType(sex, goal);
  const selectedPlan = plans[planType];

  let output = `
    <p><strong>Goal:</strong> ${goal.toUpperCase()}</p>
    <p><strong>Sex:</strong> ${sex}</p>
    <p><strong>Injury History:</strong> ${injury}</p>
    <p><strong>Current Weekly Mileage:</strong> ${mileage || "Not entered"}</p>
    <p><strong>Goal Race Pace:</strong> ${pace || "Not entered"}</p>
  `;

  selectedPlan.forEach((week, index) => {
    output += `<div class="week"><h3>Week ${index + 1}</h3>`;

    week.forEach(workout => {
      output += `<p class="workout">${adjustForInjury(workout, injury)}</p>`;
    });

    output += `</div>`;
  });

  document.getElementById("planOutput").innerHTML = output;

  localStorage.setItem("savedPlan", output);
}

function calculatePace() {
  const distance = parseFloat(document.getElementById("distance").value);
  const timeInput = document.getElementById("time").value;

  if (!distance || !timeInput) {
    document.getElementById("paceResult").innerText = "Please enter both distance and time.";
    return;
  }

  const parts = timeInput.split(":").map(Number);
  let totalMinutes = 0;

  if (parts.length === 2) {
    totalMinutes = parts[0] + parts[1] / 60;
  } else if (parts.length === 3) {
    totalMinutes = parts[0] * 60 + parts[1] + parts[2] / 60;
  } else {
    document.getElementById("paceResult").innerText = "Use MM:SS or HH:MM:SS format.";
    return;
  }

  const pace = totalMinutes / distance;
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);

  document.getElementById("paceResult").innerText =
    `Your average pace was ${minutes}:${seconds.toString().padStart(2, "0")} per mile.`;

  const calories = Math.round(distance * 100);
  const carbs = Math.round(distance * 30);

  document.getElementById("nutritionResult").innerText =
    `Estimated nutrition: about ${calories} calories burned and ${carbs} grams of carbs recommended for recovery.`;
}

function clearPlan() {
  localStorage.removeItem("savedPlan");
  document.getElementById("planOutput").innerHTML = "";
}

window.onload = function() {
  const savedPlan = localStorage.getItem("savedPlan");
  if (savedPlan) {
    document.getElementById("planOutput").innerHTML = savedPlan;
  }
};
