# Ascension Workout

An original RPG-inspired progressive workout tracker built as an installable iPhone web app.

## Progression

- Six strength quests rotate from A through F after completion.
- Each quest automatically prescribes three sets, reps or time, and a suggested weight where relevant.
- Confirming all sets awards 100 XP.
- The Recovery Walk starts at 10 minutes, gains 5 minutes every 10 levels, and caps at 45 minutes.
- Recovery can be confirmed once per day for 20 XP.
- Twenty-eight achievements track strength quests, levels, streaks, and recovery walks.
- Settings lets each user switch between Home equipment (dumbbells, barbell, bench and bodyweight) and a fully equipped Gym program.

## Use

1. Open the deployed link in Safari on iPhone.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Turn on **Open as Web App**, then tap **Add**.

Workout history is stored on the device. Use **Settings → Export data** to make a backup.

All files belong together at the top level of the GitHub repository. The package uses relative paths so it works correctly from a GitHub Pages project address.

## Preview on a computer

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.
